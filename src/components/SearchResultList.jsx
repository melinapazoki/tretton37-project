import Grid from "@mui/material/Grid";
import CardComponent from "./CardComponent";

const SearchResultList = ({ coworkers, gridView }) => {
  return (
    <Grid container spacing={2}>
      {coworkers.map((item) => {
        return <CardComponent key={item.email} coworker={item} />;
      })}
    </Grid>
  );
};
export default SearchResultList;
