import React, { useCallback, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useGetRecommendations } from "../../hooks/useGetRecommendations";
import {
  StyledContainer,
  StyledScrollableContainer,
} from "../../components/common/Container";
import FollowUserBox from "../../components/follow-user/FollowUserBox";
import { StyledH5 } from "../../components/common/text";

const RecommendationPage = () => {
  const [page, setPage] = useState(0);
  const { users, loading } = useGetRecommendations({ page });
  const { t } = useTranslation();

  const observer = useRef<IntersectionObserver | null>(null);
  const lastRecommendation = useCallback(
    (node: Element | null) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setPage((prevPage) => prevPage + 10);
        }
      });

      if (node) observer.current.observe(node);
    },
    [loading, setPage]
  );

  return (
    <StyledContainer maxWidth={"600px"} borderRight={"1px solid"}>
      <StyledContainer padding={"16px"} maxHeight={"53px"}>
        <StyledH5>{t("header.connect")}</StyledH5>
      </StyledContainer>
      <StyledScrollableContainer padding={"8px"} gap={"16px"}>
        {users.map((user, index) => {
          if (users.length === index + 1) {
            return (
              <StyledContainer ref={lastRecommendation} key={"last-div"}>
                <FollowUserBox
                  key={"recommendation-" + user.id}
                  name={user.name}
                  username={user.username}
                  profilePicture={user.profilePicture}
                  id={user.id}
                />
              </StyledContainer>
            );
          } else {
            return (
              <FollowUserBox
                key={"recommendation-" + user.id}
                name={user.name}
                username={user.username}
                profilePicture={user.profilePicture}
                id={user.id}
              />
            );
          }
        })}
      </StyledScrollableContainer>
    </StyledContainer>
  );
};

export default RecommendationPage;
