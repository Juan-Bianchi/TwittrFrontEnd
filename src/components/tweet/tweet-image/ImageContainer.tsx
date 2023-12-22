import React from "react";
import TweetImage from "./TweetImage";
import {
  StyledContainer,
  StyledOverflowContainer,
} from "../../common/Container";

interface ImageContainerProps {
  images: string[];
  editable?: boolean;
  removeFunction?: (index: number) => void;
}
const ImageContainer = ({
  images,
  editable,
  removeFunction,
}: ImageContainerProps) => {
  return (
    <StyledContainer maxWidth={"100%"} alignItems={"flex-end"} gap={"8px"}>
      <StyledOverflowContainer
        flexDirection={"row"}
        gap={"8px"}
        maxHeight={"460px"}
      >
        {images.slice(0, 2).map((image, index) => (
          <TweetImage
            key={image}
            src={image}
            alt={image}
            removable={editable}
            removeFunction={() =>
              removeFunction ? removeFunction(index) : console.log("")
            }
          />
        ))}
      </StyledOverflowContainer>
      {images && images!.length > 2 && (
        <StyledOverflowContainer
          flexDirection={"row"}
          gap={"8px"}
          maxHeight={"50%"}
        >
          {images.slice(2, images.length).map((image, index) => (
            <TweetImage
              key={image}
              src={image}
              alt={image}
              removable={editable}
              removeFunction={() =>
                removeFunction ? removeFunction(index + 2) : console.log("")
              }
            />
          ))}
        </StyledOverflowContainer>
      )}
    </StyledContainer>
  );
};

export default ImageContainer;
