import react, { useState } from "react";
import ButtonText from "Components/ButtonText";
import { TextField, MenuItem, FormControl, Select, InputLabel } from "@mui/material";
import { makeStyles } from "@mui/styles";
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
const EmployeeInput = () => {
  const classes = useStyles();
  const [dep, setDep] = useState("");

  const handleChange = (event) => {
    setDep(event.target.value);
  };
  return (
    <div>
      <form className={classes.root}>
        <TextField id="outlined-basic" type="number" label="Enter Id" variant="outlined" />
        <TextField id="outlined-basic" type="text" label="Name" variant="outlined" />
        <TextField id="outlined-basic" type="email" label="Email" variant="outlined" />
        <TextField id="outlined-basic" type="number" label="salary" variant="outlined" />
        <FormControl sx={{ minWidth: 220 }}>
          <InputLabel id="demo-simple-select-label">Department</InputLabel>
          <Select labelId="demo-simple-select-label" id="demo-simple-select" value={dep} label="dep" onChange={handleChange}>
            <MenuItem value={dep}>department</MenuItem>
          </Select>
        </FormControl>
        <ButtonText>Add</ButtonText>
      </form>
    </div>
  );
};

export default EmployeeInput;
