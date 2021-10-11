import React from "react";
import Department from "Department/Department";
import Employees from "Employees";
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
      <Employees />
    </div>
  );
};

export default Home;
