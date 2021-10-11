import React from "react";
import { makeStyles } from "@mui/styles";
import { Table, TableCell, TableBody, TableContainer, TableHead, TableRow } from "@mui/material";

const useStyles = makeStyles({});

const EmployeeTable = () => {
  const classes = useStyles();
  return (
    <TableContainer>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Salary</TableCell>
            <TableCell>Department</TableCell>
          </TableRow>
        </TableHead>
        <TableBody></TableBody>
      </Table>
    </TableContainer>
  );
};

export default EmployeeTable;
