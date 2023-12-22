import React, { useEffect } from "react";
import SuggestionBox from "./components/suggestionBox/SuggestionBox";
import ContentContainer from "./components/contentContainer/ContentContainer";
import { setUser, updateFeed } from "../../redux/user";
import { useHttpRequestService } from "../../service/HttpRequestService";
import { SearchBar } from "../../components/search-bar/SearchBar";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { StyledUserSuggestionContainer } from "./UserSeuggestionContainer";

const HomePage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const query = useAppSelector((state) => state.user.query);
  const service = useHttpRequestService();

  const handleSetUser = async () => {
    try {
      const user = await service.me();
      const data = await service.getPosts(query);
      dispatch(setUser(user));
      dispatch(updateFeed(data));
    } catch (e) {
      navigate("/sign-in");
    }
  };

  useEffect(() => {
    handleSetUser().then();
  }, []);

  return (
    <>
      <ContentContainer />
      <StyledUserSuggestionContainer>
        <SearchBar />
        <SuggestionBox />
      </StyledUserSuggestionContainer>
    </>
  );
};

export default HomePage;
