import React, { useEffect, useState } from "react";
import { BackArrowIcon } from "../../components/icon/Icon";
import Button from "../../components/button/Button";
import { Post } from "../../service";
import AuthorData from "../../components/tweet/user-post-data/AuthorData";
import ImageContainer from "../../components/tweet/tweet-image/ImageContainer";
import { useLocation } from "react-router-dom";
import { useHttpRequestService } from "../../service/HttpRequestService";
import TweetInput from "../../components/tweet-input/TweetInput";
import ImageInput from "../../components/common/ImageInput";
import { setLength, updateFeed } from "../../redux/user";
import { useTranslation } from "react-i18next";
import { ButtonType } from "../../components/button/StyledButton";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { StyledContainer } from "../../components/common/Container";
import { StyledLine } from "../../components/common/Line";
import { StyledP } from "../../components/common/text";

const CommentPage = () => {
  const [content, setContent] = useState("");
  const [post, setPost] = useState<Post | undefined>(undefined);
  const [images, setImages] = useState<File[]>([]);
  const postId = useLocation().pathname.split("/")[3];
  const service = useHttpRequestService();
  const { user, length, query } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    window.innerWidth > 600 && exit();
  }, []);

  useEffect(() => {
    service
      .getPostById(postId)
      .then((res) => {
        setPost(res);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [postId]);

  const exit = () => {
    window.history.back();
  };

  const handleSubmit = async () => {
    setContent("");
    setImages([]);
    dispatch(setLength(length + 1));
    const posts = await service.getPosts(query);
    dispatch(updateFeed(posts));
    exit();
  };
  const handleRemoveImage = (index: number) => {
    const newImages = images.filter((i, idx) => idx !== index);
    setImages(newImages);
  };

  return (
    <StyledContainer padding={"16px"}>
      <StyledContainer
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <BackArrowIcon onClick={exit} />
        <Button
          text={"Tweet"}
          buttonType={ButtonType.DEFAULT}
          size={"SMALL"}
          onClick={handleSubmit}
          disabled={content.length === 0}
        />
      </StyledContainer>
      {post && (
        <StyledContainer gap={"16px"}>
          <AuthorData
            id={post.authorId}
            name={post.author.name ?? "Name"}
            username={post.author.username}
            createdAt={post.createdAt}
            profilePicture={post.author.profilePicture}
          />
          <StyledContainer flexDirection={"row"}>
            <StyledLine />
            <StyledContainer gap={"8px"}>
              <StyledP primary>{post.content}</StyledP>
              {post.images && <ImageContainer images={post.images} />}
            </StyledContainer>
          </StyledContainer>
          <StyledContainer gap={"4px"}>
            <TweetInput
              maxLength={240}
              placeholder={t("placeholder.comment")}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              src={user.profilePicture}
            />
            {images.length > 0 && (
              <ImageContainer
                editable
                images={images.map((i) => URL.createObjectURL(i))}
                removeFunction={handleRemoveImage}
              />
            )}
            <StyledContainer padding={"0 0 0 10%"}>
              <ImageInput
                setImages={setImages}
                parentId={`comment-page-${postId}`}
              />
            </StyledContainer>
          </StyledContainer>
        </StyledContainer>
      )}
    </StyledContainer>
  );
};
export default CommentPage;
