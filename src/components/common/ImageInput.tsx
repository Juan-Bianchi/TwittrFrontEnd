import React, { ChangeEvent, useRef } from "react";
import { StyledContainer } from "./Container";
import Action from "../../assets/action.svg";

interface ImageInputProps {
  setImages: (images: File[]) => void;
  parentId?: string;
}

const ImageInput = ({ setImages, parentId }: ImageInputProps) => {
  const fileInputRef = useRef(null);

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const uploadedImages = Array.from(files!).slice(0, 4);
      setImages(uploadedImages);
    }
  };

  return (
    <StyledContainer justifyContent={"center"}>
      <label htmlFor={`image-upload-${parentId ?? ""}`}>
        <img src={Action} alt="Upload Images" />
      </label>
      <input
        type="file"
        id={`image-upload-${parentId ?? ""}`}
        accept="image/*"
        multiple
        ref={fileInputRef}
        onChange={handleImageUpload}
        style={{ display: "none" }}
      />
    </StyledContainer>
  );
};

export default ImageInput;
