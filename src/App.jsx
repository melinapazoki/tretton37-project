import "./App.css";
import SearchResultList from "./components/SearchResultList";
import Grid from "@mui/material/Grid";
import { fetchCoworkerList } from "./services/api";
const App = () => {
  useEffect(() => {
    getCoworkerList();
  }, []);
  const [coworkers, setList] = useState([]);
  const [officeList, setofficeList] = useState([]);
  const getCoworkerList = async () => {
    const coworkers = await fetchCoworkerList();
    let officeList = [];
    coworkers.map((item) => {
      return !officeList.includes(item.office)
        ? officeList.push(item.office)
        : null;
    });
    setList(coworkers);
    setofficeList(officeList);
  };
  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        search bar part
      </Grid>

      <Grid item xs={12}>
        <SearchResultList coworkers={coworkers} />
      </Grid>
    </Grid>
  );
};

export default App;
