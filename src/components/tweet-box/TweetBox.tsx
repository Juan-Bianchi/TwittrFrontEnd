import React, { useState } from "react";
import Button from "../button/Button";
import TweetInput from "../tweet-input/TweetInput";
import { useHttpRequestService } from "../../service/HttpRequestService";
import { setLength, updateFeed } from "../../redux/user";
import ImageContainer from "../tweet/tweet-image/ImageContainer";
import { BackArrowIcon } from "../icon/Icon";
import ImageInput from "../common/ImageInput";
import { useTranslation } from "react-i18next";
import { ButtonType } from "../button/StyledButton";
import { StyledTweetBoxContainer } from "./TweetBoxContainer";
import { StyledContainer } from "../common/Container";
import { StyledButtonContainer } from "./ButtonContainer";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { Post, PostData } from "../../service";
import { useAppSelector } from "../../redux/hooks";

interface TweetBoxProps {
  parentId?: string;
  close?: Function;
  mobile?: boolean;
  borderless?: boolean
}

const TweetBox = (props: TweetBoxProps) => {
  const { parentId, close, mobile } = props;
  const [content, setContent] = useState<string>("");
  const [images, setImages] = useState<File[]>([]);
  const [imagesPreview, setImagesPreview] = useState<string[]>([]);
  const location = useLocation()

  const { user, length, query } = useAppSelector((state) => state.user);
  const httpService = useHttpRequestService();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };
  const handleSubmit = async () => {
    try {
      if(parentId){
        const postData: PostData = !images.length? {postCommentedId: parentId, content: content} : {postCommentedId: parentId, content: content, images: images}
        await httpService.createComment(postData)
      }
      else {
        const postData: PostData = !images.length? {content: content} : {content: content, images: images}
        await httpService.createPost(postData)
      }
      setContent("");
      setImages([]);
      setImagesPreview([]);
      dispatch(setLength(length + 1));
      if(location.pathname === '/' ){
        const homePosts: Post[] = await httpService.getPosts(query).catch((e) => {
          console.log(e);
        });
        dispatch(updateFeed(homePosts));
      }
      else {
        const profilePosts: Post[] = await httpService.getPostsFromProfile(user.id);
        dispatch(updateFeed(profilePosts));
      }
      close && close();
    } catch (e) {
      console.log(e);
    }
  };

  const handleRemoveImage = (index: number) => {
    const newImages: File[] = images.filter((i, idx) => idx !== index);
    const newImagesPreview: string[] = newImages.map((i) => URL.createObjectURL(i));
    setImages(newImages);
    setImagesPreview(newImagesPreview);
  };

  const handleAddImage = (newImages: File[]) => {
    setImages(newImages);
    const newImagesPreview = newImages.map((i) => URL.createObjectURL(i));
    setImagesPreview(newImagesPreview);
  };

  return (
    <StyledTweetBoxContainer>
      {mobile && (
        <StyledContainer
          flexDirection={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <BackArrowIcon onClick={()=>close} />
          <Button
            text={"Tweet"}
            buttonType={ButtonType.DEFAULT}
            size={"SMALL"}
            onClick={handleSubmit}
            disabled={content.length === 0}
          />
        </StyledContainer>
      )}
      <StyledContainer style={{ width: "100%" }}>
        <TweetInput
          onChange={(e) => handleChange(e)}
          maxLength={240}
          placeholder={t("placeholder.tweet")}
          value={content}
          src={user.profilePicture}
        />
        <StyledContainer padding={"0 0 0 10%"}>
          <ImageContainer
            editable
            images={imagesPreview}
            removeFunction={handleRemoveImage}
          />
        </StyledContainer>
        <StyledButtonContainer>
          <ImageInput setImages={handleAddImage} parentId={parentId} />
          {!mobile && (
            <Button
              text={"Tweet"}
              buttonType={ButtonType.DEFAULT}
              size={"SMALL"}
              onClick={handleSubmit}
              disabled={
                content.length <= 0 ||
                content.length > 240 ||
                images.length > 4 ||
                images.length < 0
              }
            />
          )}
        </StyledButtonContainer>
      </StyledContainer>
    </StyledTweetBoxContainer>
  );
};

export default TweetBox;
