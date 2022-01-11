import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
const Path = ({ mainPath, subPath }) => {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <Typography variant="h6" className="pathStyle">
          {`You are in: ${mainPath}`}
          <span className="subPath">
            {subPath ? `/ searching ${subPath}` : ""}
          </span>
        </Typography>
      </Grid>
    </Grid>
  );
};
export default Path;
