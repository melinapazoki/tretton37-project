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
  ];
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={4}
    >
      {alphabetList.map((a) => {
        return (
          <span className="alphabetStyle" key={a} onClick={onAlphabetSearch}>
            {a.toUpperCase()}
          </span>
        );
      })}
    </Grid>
  );
};
export default AlphabetFilter;
