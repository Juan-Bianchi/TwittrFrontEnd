import React, { ChangeEvent, useState } from "react";
import SearchResultModal from "./search-result-modal/SearchResultModal";
import { Author } from "../../service";
import { useHttpRequestService } from "../../service/HttpRequestService";
import { useTranslation } from "react-i18next";
import { StyledSearchBarContainer } from "./SearchBarContainer";
import { StyledSearchBarInput } from "./SearchBarInput";

export const SearchBar = () => {
  const [results, setResults] = useState<Author[]>([]);
  const [query, setQuery] = useState<string>("");
  const service = useHttpRequestService();
  let debounceTimer: NodeJS.Timeout;
  const { t } = useTranslation();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputQuery = e.target.value;

    setQuery(inputQuery);

    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(async () => {
      try {
        setResults(await service.searchUsers(inputQuery, 4, 0));
      } catch (error) {
        console.log(error);
      }
    }, 300);
  };

  return (
    <StyledSearchBarContainer>
      <StyledSearchBarInput
        onChange={handleChange}
        value={query}
        placeholder={t("placeholder.search")}
      />
      <SearchResultModal show={query.length > 0} results={results} />
    </StyledSearchBarContainer>
  );
};
