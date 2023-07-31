import { makeStyles } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
}));
const styles = () => {
  return <div>styles</div>;
};

export default useStyles;
