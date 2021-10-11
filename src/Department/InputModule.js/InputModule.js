import React from "react";
import { TextField} from "@mui/material";
import { makeStyles } from "@mui/styles";
import ButtonText from "Components/ButtonText";

const useStyles = makeStyles({
  btn: {
    height: 55,
    width: 90,
  },
  root: {
    display: "flex",
    gridGap: "30px",
  },
});

const handleSubmit = (event) => {
  event.preventDefault();
};

const InputModule = () => {
  const classes = useStyles();
  return (
    <div>
      <form onSubmit={handleSubmit} className={classes.root}>
        <TextField id="outlined-basic" type="number" label="Enter Id" variant="outlined" />
        <TextField id="outlined-basic" type="text" label="Name" variant="outlined" />
        <TextField id="outlined-basic" type="email" label="Manager Email" variant="outlined" />
        <ButtonText>Add</ButtonText>
      </form>
    </div>
  );
};

export default InputModule;
