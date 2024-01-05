import React, { useEffect, useRef, useState } from "react";
import { StyledTweetContainer } from "./TweetContainer";
import AuthorData from "./user-post-data/AuthorData";
import type { Post } from "../../service";
import { StyledReactionsContainer } from "./ReactionsContainer";
import Reaction from "./reaction/Reaction";
import { useHttpRequestService } from "../../service/HttpRequestService";
import { IconType } from "../icon/Icon";
import { StyledContainer } from "../common/Container";
import ThreeDots from "../common/ThreeDots";
import DeletePostModal from "./delete-post-modal/DeletePostModal";
import ImageContainer from "./tweet-image/ImageContainer";
import CommentModal from "../comment/comment-modal/CommentModal";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import { createPortal } from "react-dom";

interface TweetProps {
  post: Post;
  lastElementRef?: (node: Element | null) => void;
}

const Tweet = ({ post, lastElementRef}: TweetProps) => {
  const [actualPost, setActualPost] = useState<Post>(post);
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
  const [showCommentModal, setShowCommentModal] = useState<boolean>(false);
  const deleteModalRef = useRef<HTMLDivElement>(null)
  const user = useAppSelector((state) => state.user.user);
  const service = useHttpRequestService();
  const navigate = useNavigate();

  const getCountByType = (type: string): number => {
    return actualPost.reactions.filter((r) => r.type === type).length ?? 0;
  };

  const handleReaction = async (type: string) => {
    const reacted = actualPost.reactions.find(
      (r) => r.type === type && r.userId === user.id
    );
    if (reacted) {
      await service.deleteReaction(actualPost.id);
    } else {
      await service.createReaction(actualPost.id, type);
    }
    const newPost = await service.getPostById(post.id);
    setActualPost(newPost);
  };

  const hasReactedByType = (type: string): boolean => {
    return actualPost.reactions.some(
      (r) => r.type === type && r.userId === user.id
    );
  };

  const handleClickOutsideLogoutPrompt = (event: MouseEvent)=> {
    if(deleteModalRef.current && !deleteModalRef.current.contains(event.target as Node)) {
      setShowDeleteModal(false)
    }
  }

  useEffect(()=> {
    document.addEventListener('click', handleClickOutsideLogoutPrompt);

    return ()=> document.removeEventListener('click', handleClickOutsideLogoutPrompt)
  }, [])

  return (
    <StyledTweetContainer ref={lastElementRef} id={post.id}>
      <StyledContainer
        style={{ width: "100%" }}
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent={"center"}
        maxHeight={"48px"}
        ref={deleteModalRef}
      >
        <AuthorData
          id={post.author.id}
          name={post.author.name ?? "Name"}
          username={post.author.username}
          createdAt={post.createdAt}
          profilePicture={post.author.profilePicture}
        />
        {post.authorId === user.id && (
          <>
          {createPortal(
            <DeletePostModal
              show={showDeleteModal}
              id={post.id}
              onClose={() => {
                setShowDeleteModal(false);
              }}
            />, document.body
          )}
            <ThreeDots
              onClick={() => {
                setShowDeleteModal(!showDeleteModal);
              }}
            />
          </>
        )}
      </StyledContainer>
      <StyledContainer onClick={() => navigate(`/post/${post.id}`)}>
        <p>{post.content}</p>
      </StyledContainer>
      {post.images && post.images!.length > 0 && (
        <StyledContainer padding={"0 0 0 10%"}>
          <ImageContainer images={post.images} />
        </StyledContainer>
      )}
      <StyledReactionsContainer>
        <Reaction
          img={IconType.CHAT}
          count={post.comments.length}
          reactionFunction={() =>
            window.innerWidth > 600
              ? setShowCommentModal(true)
              : navigate(`/comment/${post.id}`)
          }
          increment={0}
          reacted={false}
          isAComment={true}
        />
        <Reaction
          img={IconType.RETWEET}
          count={getCountByType("RETWEET")}
          reactionFunction={() => handleReaction("RETWEET")}
          increment={1}
          reacted={hasReactedByType("RETWEET")}
          isAComment={false}
        />
        <Reaction
          img={IconType.LIKE}
          count={getCountByType("LIKE")}
          reactionFunction={() => handleReaction("LIKE")}
          increment={1}
          reacted={hasReactedByType("LIKE")}
          isAComment={false}
        />
      </StyledReactionsContainer>

      {createPortal(
      <CommentModal
        show={showCommentModal}
        post={post}
        onClose={() => setShowCommentModal(false)}
      />, document.body)}
    </StyledTweetContainer>
  );
};

export default Tweet;
