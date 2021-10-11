import react from "react";
import HeaderTitle from "Components/HeaderTitle";
import EmployeeTable from "./EmployeeTable";
import EmployeeInput from "./EmployeeInput.js";
import { Container } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  btn: {
    height: 55,
    width: 90,
  },
});
const Employees = () => {
  const classes = useStyles();
  return (
    <Container className={classes.root} style={{ display: "grid" }}>
      <HeaderTitle>Employees Module</HeaderTitle>
      <EmployeeInput />
      <EmployeeTable />
    </Container>
  );
};
export default Employees;
