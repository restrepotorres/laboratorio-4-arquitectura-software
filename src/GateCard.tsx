import { Button, Stack, TextField, Typography } from "@mui/material";
import { useEffect } from "react";

const GateCard = ({ admin = false, gateNumber = "{$number}" }) => {
  useEffect(() => {
    const script = document.createElement("script");
    admin ? (script.src = "./admin.js") : (script.src = "./client.js");

    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <Stack marginX={"40%"} mb={5}>
      <Typography variant="h4" align="left">
        Gate {gateNumber}
      </Typography>
      <Stack gap={1}>
        <TextField disabled={!admin}></TextField>
        <Typography>Destination</Typography>
        <TextField disabled={!admin}></TextField>
        <Typography>Airline</Typography>
        <TextField disabled={!admin}></TextField>
        <Typography>Departure time </Typography>
        <TextField disabled={!admin}></TextField>
      </Stack>
      {admin && (
        <Button
          className="updateButton"
          id={`${gateNumber}`}
          variant="contained"
          sx={{ width: 100, marginLeft: "auto", marginTop: 2 }}
        >
          Update
        </Button>
      )}
    </Stack>
  );
};

export default GateCard;
