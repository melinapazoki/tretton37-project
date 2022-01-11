import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import "./App.css";
import { fetchCoworkerList } from "./services/api";
import SearchBar from "./components/SearchBar";
import SearchResultList from "./components/SearchResultList";
import AlphabetFilter from "./components/AlphabetFilter";
import Path from "./components/Path";
import DataNotAvailable from "./components/DataNotAvailable";

const App = () => {
  // statefull component - main one - other components are stateless
  const [coworkers, setList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [officeList, setOfficeList] = useState([]);
  const [originalValue, setOriginalValue] = useState([]);
  const [gridView, setGridView] = useState(true);
  const [alphabetFilter, setShowAlphabetFilter] = useState(false);
  const [personSearch, setsearchValue] = useState(true);
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    async function getCoworkerList() {
      setShowLoader(true);
      let coworkers;
      // to avoid call api rapidlly
      if (originalValue.length > 0) {
        coworkers = originalValue;
      } else {
        coworkers = await fetchCoworkerList();
        setOriginalValue(coworkers);
        getOfficeList(coworkers);
      }
      const results = searchTerm
        ? coworkers.filter((i) => {
            return i.name.trim().toLowerCase().includes(searchTerm);
          })
        : coworkers;
      setList(results);
      setShowLoader(false);
    }
    function getOfficeList() {
      let officeList = [];
      originalValue.map((item) => {
        return !officeList.includes(item.city)
          ? // ? officeList.push(item.office)
            officeList.push(item.city)
          : null;
      });
      setOfficeList(officeList);
    }
    getCoworkerList();
  }, [searchTerm, originalValue]);

  const onSearch = async (e) => {
    setSearchTerm(e.target.value);
    // note: Backend search - if its enable
    // const coworkers = await fetchCoworkerList(null, null, query);
    // setList(coworkers);
  };
  const onAlphabetSearch = async (e) => {
    const query = e.target.innerText.toLowerCase();
    // note: Backend search - if its enable
    // const coworkers = await fetchCoworkerList(null, null, query);
    debugger;
    const filteredList =
      query === "all"
        ? originalValue
        : originalValue.filter((item) =>
            item.name.toLowerCase().startsWith(query)
          );
    setList(filteredList);
  };
  const handlesearchOffice = (e) => {
    const searchResult = originalValue.filter((item) => {
      return item.city.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1;
    });
    setList(searchResult);
  };

  const changeSearchValue = () => {
    setsearchValue(!personSearch);
  };
  const changeGridView = () => {
    setGridView(!gridView);
  };

  const showFilter = () => {
    setShowAlphabetFilter(!alphabetFilter);
  };
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} className="searchBar">
        <SearchBar
          searchTerm={searchTerm}
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
      {showLoader ? (
        <DataNotAvailable loader={showLoader} />
      ) : (
        <>
          {alphabetFilter && (
            <Grid item xs={12}>
              <AlphabetFilter onAlphabetSearch={onAlphabetSearch} />
            </Grid>
          )}
          <Grid item xs={12}>
            <Path mainPath={"Meet Employees"} subPath={searchTerm} />
          </Grid>
          <Grid item xs={12}>
            <SearchResultList coworkers={coworkers} gridView={gridView} />
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default App;
