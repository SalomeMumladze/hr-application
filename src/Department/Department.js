import React from "react";
import { Container } from "@mui/material";
import InputModule from "./InputModule.js";
import Table from "./Table";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    gap: "40px",
  },
});

const Department = () => {
  const classes = useStyles();
  return (
    <Container className={classes.root} style={{ display: "grid" }}>
      <InputModule />
      <Table />
    </Container>
  );
};

export default Department;
