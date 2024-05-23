import { Button, Stack, TextField, Typography } from "@mui/material";
import React from "react";

const GateCard = ({ admin = false, number = "{$number}" }) => {
  return (
    <Stack
      marginX={"40%"}
      mb={5}
    >
      <Typography variant="h4" align="left">
        Gate {number}
      </Typography>
      <Stack gap={1}>
        <Typography>Flight number:</Typography>
        <TextField disabled={!admin}></TextField>
        <Typography>Destination</Typography>
        <TextField disabled={!admin}></TextField>
        <Typography>Airline</Typography>
        <TextField disabled={!admin}></TextField>
        <Typography>Departure time </Typography>
        <TextField disabled={!admin}></TextField>
      </Stack>
      {/* {admin && (
        <Button
          variant="contained"
          sx={{ width: 100, marginLeft: "auto", marginTop: 2 }}
        >
          Update
        </Button>
      )} */}
    </Stack>
  );
};

export default GateCard;
