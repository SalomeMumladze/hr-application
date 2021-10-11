import React from "react";
import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";

const ButtonText = (props) => {
  const classes = useStyles({
    padding: props.padding,
  });
  const { children } = props;
  return (
    <Button variant="contained" size="large" className={classes.root}>
      {children}
    </Button>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    padding: (props) => props.padding || "30px 0px",
  },
}));

export default ButtonText;
