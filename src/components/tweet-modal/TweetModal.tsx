import React from "react";
import TweetBox from "../tweet-box/TweetBox";
import { PostModal } from "../post-modal/PostModal";

interface TweetModalProps {
  open: boolean;
  onClose: () => void;
}

export const TweetModal = ({ open, onClose }: TweetModalProps) => {
  return (
    <>
      <PostModal show={open} onClose={onClose}>
        <TweetBox borderless close={onClose} />
      </PostModal>
    </>
  );
};
export default TweetModal;
