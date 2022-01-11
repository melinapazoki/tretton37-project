import Grid from "@mui/material/Grid";
import CardComponent from "./CardComponent";
import ListComponent from "./ListComponent";
import DataNotAvailable from "./DataNotAvailable";
const SearchResultList = ({ coworkers, gridView }) => {
  return (
    <Grid
      container
      direction={gridView ? "row" : "column"}
      justifyContent="flex-start"
      alignItems="center"
      spacing={2}
    >
      {Array.isArray(coworkers) ? (
        coworkers.map((item) => {
          return gridView ? (
            <CardComponent key={item.id} coworker={item} />
          ) : (
            <ListComponent key={item.id} coworker={item} />
          );
        })
      ) : (
        <DataNotAvailable />
      )}
    </Grid>
  );
};
export default SearchResultList;
