import React, { useState } from "react";
import TweetInput from "../tweet-input/TweetInput";
import { useHttpRequestService } from "../../service/HttpRequestService";
import { setLength, updateFeed } from "../../redux/user";
import ImageContainer from "../tweet/tweet-image/ImageContainer";
import { BackArrowIcon } from "../icon/Icon";
import ImageInput from "../common/ImageInput";
import { useTranslation } from "react-i18next";
import { StyledTweetBoxContainer } from "./TweetBoxContainer";
import { StyledContainer } from "../common/Container";
import { StyledButtonContainer } from "./ButtonContainer";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { Post, PostData } from "../../service";
import { useAppSelector } from "../../redux/hooks";
import { useFormik } from "formik";
import * as Yup from 'yup';
import MyButton from "../my-button/MyButton";
import { MyButtonSize, MyButtonVariant } from "../my-button/StyledMyButton";
import { AnyAction, Dispatch } from "redux";

interface TweetBoxProps {
  parentId?: string;
  close?: Function;
  mobile?: boolean;
  borderless?: boolean
}

const TweetBox = (props: TweetBoxProps) => {
  const { parentId, close, mobile } = props;
  const [images, setImages] = useState<File[]>([]);
  const [imagesPreview, setImagesPreview] = useState<string[]>([]);
  const location = useLocation()

  const { user, length, query } = useAppSelector((state) => state.user);
  const httpService = useHttpRequestService();
  const dispatch: Dispatch<AnyAction> = useDispatch();
  const { t } = useTranslation();
  const formik = useFormik({
    initialValues: {content: ''},
    validationSchema: Yup.object({
      content: Yup.string().required().test('len', t('error.content'), val => val.length <= 240)
    }),
    onSubmit: values => handleSubmit(values.content)
  })

  const handleSubmit = async (content: string): Promise<void> => {
    try {
      if(parentId){
        const commentData: PostData = !images.length? {postCommentedId: parentId, content: content} : {postCommentedId: parentId, content: content, images: images}
        await httpService.createComment(commentData)
      }
      else {
        const postData: PostData = !images.length? {content: content} : {content: content, images: images}
        await httpService.createPost(postData)
      }
      formik.setValues({ content: '' });
      setImages([]);
      setImagesPreview([]);
      dispatch(setLength(length + 1));
      if(location.pathname.startsWith('/profile/')) {
        const profilePosts: Post[] = await httpService.getPostsFromProfile(user.id);
        dispatch(updateFeed(profilePosts));
      }
      if(location.pathname.startsWith('/post/') && parentId) {
        const comments: Post[] = await httpService.getCommentsByPostId(parentId);
        dispatch(updateFeed(comments));
      }
      if(location.pathname.match('/')) {
        const posts: Post[] = await httpService.getPaginatedPosts(5, '', query);
        dispatch(updateFeed(posts));
      }
      close && close();
    } catch (e) {
      console.log(e);
    }
  };

  const handleRemoveImage = (index: number): void => {
    const newImages: File[] = images.filter((i: File, idx: number) => idx !== index);
    const newImagesPreview: string[] = newImages.map((i: File) => URL.createObjectURL(i));
    setImages(newImages);
    setImagesPreview(newImagesPreview);
  };

  const handleAddImage = (newImages: File[]): void => {
    setImages(newImages);
    const newImagesPreview: string[] = newImages.map((i: File) => URL.createObjectURL(i));
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
          <BackArrowIcon onClick={() => close && close()} />
          <MyButton 
            buttonSize={MyButtonSize.SMALL}
            buttonVariant={MyButtonVariant.OUTLINED}
            text="Tweet"
            onClick={ e => {
              e.preventDefault();
              formik.handleSubmit();
            }}
            disabled={formik.values.content.length === 0}
          />
        </StyledContainer>
      )}
      <StyledContainer style={{ width: "100%" }}>
        <TweetInput
          {...formik.getFieldProps('content')}
          placeholder={t("placeholder.tweet")}
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
            <>
              <MyButton 
                buttonSize={MyButtonSize.SMALL}
                buttonVariant={MyButtonVariant.OUTLINED}
                text="Tweet"
                onClick={ e => {
                  e.preventDefault();
                  formik.handleSubmit();
                }}
                disabled={
                  formik.values.content.length <= 0 ||
                  formik.values.content.length > 240 ||
                  images.length > 4 ||
                  images.length < 0
                }
              />
            </>
            
          )}
        </StyledButtonContainer>
      </StyledContainer>
    </StyledTweetBoxContainer>
  );
};

export default TweetBox;
