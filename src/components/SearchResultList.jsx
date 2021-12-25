import Grid from "@mui/material/Grid";
import CardComponent from "./CardComponent";
import ListComponent from "./ListComponent";

const SearchResultList = ({ coworkers, gridView }) => {
  return (
    <Grid
      container
      direction={gridView ? "row" : "column"}
      justifyContent="flex-start"
      alignItems="center"
      spacing={2}
    >
      {coworkers.map((item) => {
        return gridView ? (
          <CardComponent key={item.email} coworker={item} />
        ) : (
          <ListComponent key={item.email} coworker={item} />
        );
      })}
    </Grid>
  );
};
export default SearchResultList;
