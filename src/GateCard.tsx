import { Stack, TextField, Typography } from "@mui/material";
import React from "react";

const GateCard = ({ admin = false, number = "{$number}" }) => {
  return (
    <>
      <Typography variant="h4" align="center">
        Gate {number}
      </Typography>
      <Stack
        sx={{
          display: "grid",
          gridTemplateColumns: "auto auto",
          maxWidth: "50%",
        }}
      >
        <Typography>Flight number:</Typography>
        <TextField label="flightnumber" disabled={!admin}></TextField>
        <Typography>Destination</Typography>
        <TextField label="destination" disabled={!admin}></TextField>
        <Typography>Airline</Typography>
        <TextField label="Airline" disabled={!admin}></TextField>
        <Typography>Departure time </Typography>
        <TextField label="Departure time" disabled={!admin}></TextField>
      </Stack>
    </>
  );
};

export default GateCard;
