import React from "react";
import { makeStyles } from "@mui/styles";
import { Table, TableCell, TableBody, TableContainer, TableHead, TableRow } from "@mui/material";

const useStyles = makeStyles({});

const TableModule = () => {
  const classes = useStyles();
  return (
    <TableContainer>
      <Table sx={{ maxWidth: 850 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Manager Mail</TableCell>
            <TableCell>Numbers of emploee</TableCell>
          </TableRow>
        </TableHead>
        <TableBody></TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableModule;
