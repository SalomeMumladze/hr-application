import React from "react";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const Text = (props) => {
  const classes = useStyles({
    color: props.color,
    padding: props.padding,
  });
  const { children } = props;
  return (
    <Typography variant="h5" className={classes.root}>
      {children}
    </Typography>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "30px 0px",
    padding: (props) => props.padding || "30px 0px",
    color: (props) => props.color || "#1a237e",
  },
}));

export default Text;
