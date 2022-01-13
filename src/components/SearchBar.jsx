import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import AbcIcon from "@mui/icons-material/Abc";
import SearchIcon from "@mui/icons-material/Search";
import GridViewIcon from "@mui/icons-material/GridView";
import SplitscreenIcon from "@mui/icons-material/Splitscreen";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const SearchBar = ({
  onSearch,
  changeGridView,
  gridView,
  changeSearchValue,
  personSearch,
  handlesearchOffice,
  officeList,
  showFilter,
}) => {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item xs={12}>
        <Paper component="form" className="inputStyle">
          <Tooltip title="Search By Alphabet">
            <IconButton
              aria-label="Alphabet filter"
              role="button"
              onClick={showFilter}
              onKeyDown={showFilter}
              tabindex="0"
            >
              <AbcIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Change Grid View">
            <IconButton
              aria-label="Grid View"
              role="button"
              onClick={changeGridView}
              onKeyDown={changeGridView}
              tabindex="1"
            >
              {gridView ? <GridViewIcon /> : <SplitscreenIcon />}
            </IconButton>
          </Tooltip>
          <Tooltip title="Change Search Option">
            <IconButton
              aria-label="Search option"
              role="button"
              onClick={changeSearchValue}
              onKeyDown={changeSearchValue}
              tabindex="2"
            >
              {personSearch ? <PersonSearchIcon /> : <HomeWorkIcon />}
            </IconButton>
          </Tooltip>
          {personSearch ? (
            <InputBase
              data-testid="search-by-employee"
              placeholder="Search By Employee"
              inputProps={{ "aria-label": "Search" }}
              onChange={onSearch}
            />
          ) : (
            <FormControl>
              <Select
                data-testid="search-by-office"
                placeholder="Search By Office"
                onChange={handlesearchOffice}
                inputProps={{ "aria-label": "Office Search" }}
              >
                {Array.isArray(officeList) &&
                  officeList.map((item, index) => {
                    return (
                      <MenuItem key={index} value={item}>
                        {item}
                      </MenuItem>
                    );
                  })}
              </Select>
            </FormControl>
          )}
          <SearchIcon />
        </Paper>
      </Grid>
    </Grid>
  );
};
export default SearchBar;
