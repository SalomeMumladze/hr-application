import React, { useState } from "react";
import { TextField, Button, Stack } from "@mui/material";
import HeaderTitle from "../../Components/HeaderTitle";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  btn: {
    height: 55,
    width: 90,
  },
});

const handleSubmit = (event) => {
  event.preventDefault();
};

const InputModule = () => {
  const classes = useStyles();
  return (
    <div>
      <HeaderTitle>Department Module</HeaderTitle>
      <form onSubmit={handleSubmit}>
        <TextField id="outlined-basic" type="number" label="Enter Id" variant="outlined" />
        <TextField id="outlined-basic" type="text" label="Name" variant="outlined" />
        <TextField id="outlined-basic" type="email" label="Manager Mail" variant="outlined" />
        <Button variant="contained" size="large" className={classes.btn}>
          Add
        </Button>
      </form>
    </div>
  );
};

export default InputModule;
