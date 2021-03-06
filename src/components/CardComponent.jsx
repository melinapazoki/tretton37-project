import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";

const CardComponent = ({ coworker }) => {
  const MAX_LENGTH = 100;
  return (
    <Grid item xs={12} md={4} lg={3}>
      <Card className="cardRoot">
        <CardMedia
          component="img"
          height="200"
          image={coworker.imagePortraitUrl || "/default.jpg"}
          alt={coworker.name}
        />
        <span className="location">
          <Typography gutterBottom variant="subtitle2">
            <LocationOnIcon color="white" />
            {coworker.office}
          </Typography>
        </span>
        <CardContent>
          <Grid container>
            <Grid item xs={10}>
              <Typography gutterBottom variant="h5">
                {coworker.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {`${
                  coworker.mainText
                    ? coworker.mainText.substring(0, MAX_LENGTH)
                    : "---"
                }...`}
                <Link className="App-link">{`Read more about ${coworker.name.substr(
                  0,
                  coworker.name.indexOf(" ")
                )}`}</Link>
              </Typography>
            </Grid>
            <Divider orientation="vertical" variant="middle" flexItem />
            <Grid item xs={1}>
              <>
                <IconButton edge="end" role="button" aria-label="Instagram">
                  <InstagramIcon />
                </IconButton>
                <IconButton edge="end" role="button" aria-label="GitHub">
                  <GitHubIcon />
                </IconButton>
                <IconButton edge="end" role="button" aria-label="Linkedin">
                  <LinkedInIcon />
                </IconButton>
              </>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default CardComponent;
