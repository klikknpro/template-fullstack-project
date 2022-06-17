import { React, useState, useContext, useEffect } from "react";
import { TextField, Button } from "@mui/material";

const Register = () => {
  const [username, setUsername] = useState(null);

  const register = () => {
    //
  };

  return (
    <div>
      Register
      <TextField variant="filled" onChange={(e) => setUsername(e.target.value)} />
      <Button onClick={register} variant="contained" size="small">
        Register
      </Button>
    </div>
  );
};

export default Register;
