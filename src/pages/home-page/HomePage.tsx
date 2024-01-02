import React, { useEffect, useState } from "react";
import SuggestionBox from "./components/suggestionBox/SuggestionBox";
import ContentContainer from "./components/contentContainer/ContentContainer";
import { setUser, updateFeed } from "../../redux/user";
import { useHttpRequestService } from "../../service/HttpRequestService";
import { SearchBar } from "../../components/search-bar/SearchBar";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import { StyledUserSuggestionContainer } from "./UserSeuggestionContainer";
import { User } from "../../service";
import Loader from "../../components/loader/Loader";

const HomePage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const service = useHttpRequestService();
  const [isLoading, setIsLoading] = useState(true);

  const handleSetUser = async () => {
    try {
      const user: User = await service.me();
      const data = await service.getPaginatedPosts(7, '', '');
      dispatch(setUser(user));
      dispatch(updateFeed(data));
      setIsLoading(false)
    } catch (e) {
      navigate("/sign-in");
    }
  };

  useEffect(() => {
    handleSetUser().then();
  }, []);

  return (
    <>
      {
        isLoading? <Loader />
        : <>
            <ContentContainer />
            <StyledUserSuggestionContainer>
              <SearchBar />
              <SuggestionBox />
            </StyledUserSuggestionContainer>      
         </>
      }
    </>
  );
};

export default HomePage;
