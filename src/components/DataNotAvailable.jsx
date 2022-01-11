import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LinearProgress from "@mui/material/LinearProgress";
const DataNotAvailable = ({ loader }) => {
  return (
    <>
      {loader ? (
        <Box sx={{ width: "100%" }}>
          <LinearProgress />
        </Box>
      ) : (
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <img src={"/something-went-wrong.jpg"} alt="Something went wrong " />
        </Grid>
      )}
    </>
  );
};
export default DataNotAvailable;
