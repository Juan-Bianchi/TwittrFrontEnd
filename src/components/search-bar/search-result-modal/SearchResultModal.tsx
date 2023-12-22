import React from "react";
import { Author } from "../../../service";
import UserDataBox from "../../user-data-box/UserDataBox";
import { StyledContainer } from "../../common/Container";
import { StyledSearchResultModalContainer } from "./SearchResultModalContainer";

interface SearchResultModalProps {
  show: boolean;
  results: Author[];
}
export const SearchResultModal = ({
  show,
  results,
}: SearchResultModalProps) => {
  return (
    <>
      {show && (
        <StyledContainer style={{ width: "100%" }}>
          <StyledSearchResultModalContainer>
            {(results.length === 0 && <div>No results</div>) ||
              results.map((author) => {
                return (
                  <UserDataBox
                    key={"search-result-" + author.id}
                    username={author.username}
                    name={author.name!}
                    id={author.id}
                    profilePicture={author.profilePicture!}
                  />
                );
              })}
          </StyledSearchResultModalContainer>
        </StyledContainer>
      )}
    </>
  );
};

export default SearchResultModal;
