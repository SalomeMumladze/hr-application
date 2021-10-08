import React from "react";
import Department from "../Department/Department";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  conatiner: {
    paddingTop: 40,
  },
});

const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.conatiner}>
      <Department />
    </div>
  );
};

export default Home;
