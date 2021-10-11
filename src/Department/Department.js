import React from "react";
import { Container } from "@mui/material";
import InputModule from "./InputModule.js";
import Table from "./Table";
import { makeStyles } from "@mui/styles";
import HeaderTitle from "../Components/HeaderTitle/index.js";

const useStyles = makeStyles({
  root: {
    gap: "3s0px",
  },
});

const Department = () => {
  const classes = useStyles();
  return (
    <Container className={classes.root} style={{ display: "grid" }}>
      <HeaderTitle>Department Module</HeaderTitle>
      <InputModule />
      <Table />
    </Container>
  );
};

export default Department;
