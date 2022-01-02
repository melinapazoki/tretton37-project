import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import "./App.css";
import { fetchCoworkerList } from "./services/api";
import SearchBar from "./components/SearchBar";
import SearchResultList from "./components/SearchResultList";
import AlphabetFilter from "./components/AlphabetFilter";
const App = () => {
  useEffect(() => {
    getCoworkerList();
  }, []);
  const [coworkers, setList] = useState([]);
  const [officeList, setOfficeList] = useState([]);
  const [gridView, setGridView] = useState(true);
  const [alphabetFilter, setShowAlphabetFilter] = useState(false);
  const [personSearch, setsearchValue] = useState(true);
  const getCoworkerList = async () => {
    const coworkers = await fetchCoworkerList();
    let officeList = [];
    coworkers.map((item) => {
      return !officeList.includes(item.office)
        ? officeList.push(item.office)
        : null;
    });
    setList(coworkers);
    setOfficeList(officeList);
  };

  const onSearch = async (e) => {
    const query = e.target.value.trim().toLowerCase();
    const searchResult = coworkers.filter((item) => {
      return item.name.trim().toLowerCase().indexOf(query) > -1;
    });
    // fetch query from backend
    // const coworkers = await fetchCoworkerList(null, null, query);
    setList(searchResult);
  };
  const changeSearchValue = () => {
    setsearchValue(!personSearch);
  };
  const changeGridView = () => {
    setGridView(!gridView);
  };
  const onAlphabetSearch = async (e) => {
    const query = e.target.innerHTML;
    const coworkers = await fetchCoworkerList(null, null, query);
    coworkers.filter((item) =>
      item.name.toLowerCase().startsWith(e.target.innerHTML.toLowerCase())
    );
    setList(coworkers);
  };
  const handlesearchOffice = (e) => {
    const searchResult = coworkers.filter((item) => {
      return (
        item.office.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1
      );
    });
    setList(searchResult);
  };
  const showFilter = () => {
    setShowAlphabetFilter(!alphabetFilter);
  };
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} className="searchBar">
        <SearchBar
          onSearch={onSearch}
          changeGridView={changeGridView}
          gridView={gridView}
          personSearch={personSearch}
          changeSearchValue={changeSearchValue}
          handlesearchOffice={handlesearchOffice}
          officeList={officeList}
          showFilter={showFilter}
        />
      </Grid>
      {alphabetFilter && (
        <Grid item xs={12}>
          <AlphabetFilter onAlphabetSearch={onAlphabetSearch} />
        </Grid>
      )}
      <Grid item xs={12}>
        <SearchResultList coworkers={coworkers} gridView={gridView} />
      </Grid>
    </Grid>
  );
};

export default App;
