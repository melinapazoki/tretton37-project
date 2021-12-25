import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";

import SearchIcon from "@mui/icons-material/Search";
import GridViewIcon from "@mui/icons-material/GridView";
import SplitscreenIcon from "@mui/icons-material/Splitscreen";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import MenuItem from "@mui/material/MenuItem";

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
}) => {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      // spacing={4}
    >
      <Grid item xs={12}>
        <Paper
          component="form"
          className="inputStyle"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            m: "10px",
          }}
        >
          <IconButton
            sx={{ p: "10px" }}
            aria-label="Grid View"
            onClick={changeGridView}
          >
            {gridView ? <GridViewIcon /> : <SplitscreenIcon />}
          </IconButton>
          <IconButton
            sx={{ p: "10px" }}
            aria-label="filter"
            onClick={changeSearchValue}
          >
            {personSearch ? <PersonSearchIcon /> : <HomeWorkIcon />}
          </IconButton>

          {personSearch ? (
            <InputBase
              sx={{ ml: 1, flex: 2, height: 60 }}
              placeholder="Search"
              inputProps={{ "aria-label": "Search" }}
              onChange={onSearch}
            />
          ) : (
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <Select
                value="search"
                onChange={handlesearchOffice}
                displayEmpty
                inputProps={{ "aria-label": "office search" }}
              >
                {officeList.map((item, index) => {
                  return (
                    <MenuItem key={index} value={item}>
                      {item}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          )}

          <SearchIcon sx={{ p: "10px" }} />
        </Paper>
      </Grid>
    </Grid>
  );
};
export default SearchBar;
