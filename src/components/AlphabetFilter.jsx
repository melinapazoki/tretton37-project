import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

const AlphabetFilter = ({ onAlphabetSearch }) => {
  const alphabetList = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "all",
  ];
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={4}
    >
      {alphabetList.map((a, index) => {
        return (
          <Button
            variant="text"
            role="button"
            key={index}
            onClick={onAlphabetSearch}
          >
            {a.toUpperCase()}
          </Button>
        );
      })}
    </Grid>
  );
};
export default AlphabetFilter;
