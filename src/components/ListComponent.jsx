import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Typography from "@mui/material/Typography";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import IconButton from "@mui/material/IconButton";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const ListComponent = ({ coworker }) => {
  const MAX_LENGTH = 50;
  return (
    <List className="listStyle">
      <ListItem
        className="listItemStyle"
        secondaryAction={
          <>
            <IconButton role="button" aria-label="Instagram">
              <InstagramIcon />
            </IconButton>
            <IconButton role="button" aria-label="GitHub">
              <GitHubIcon />
            </IconButton>
            <IconButton role="button" aria-label="GitHub">
              <LinkedInIcon />
            </IconButton>
          </>
        }
      >
        <ListItemAvatar>
          <Avatar src={coworker.imagePortraitUrl} alt={coworker.name}></Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={coworker.name}
          secondary={
            <>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                <LocationOnIcon className="main_color" />
                {coworker.office}
              </Typography>
              -
              {`${
                coworker.mainText
                  ? coworker.mainText.substring(0, MAX_LENGTH)
                  : "---"
              }...`}
            </>
          }
        />
      </ListItem>
    </List>
  );
};
export default ListComponent;
