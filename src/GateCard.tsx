import { Button, Stack, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const GateCard = ({ admin = false, gateNumber = "{$number}" }) => {
  const socket = io("http://localhost:3000");
  const [flightNumber, setflightNumber] = useState("");
  const [destination, setdestination] = useState("");
  const [airLine, setairLine] = useState("");
  const [departureTime, setdepartureTime] = useState("");

  useEffect(() => {
    socket.emit("new gate listener", gateNumber, (response) => {
      setflightNumber(response.flightNumber);
      setdestination(response.destination);
      setairLine(response.airLine);
      setdepartureTime(response.departureTime);
    });
    socket.on("message", (data) => {
      if (data.gateNumber === gateNumber) {
        setflightNumber(data.flightNumber);
        setdestination(data.destination);
        setairLine(data.airLine);
        setdepartureTime(data.departureTime);
      }
    });
  }, []);

  return (
    <Stack
      marginX={3}
      sx={{ backgroundColor: "#0B1219" }}
      padding={3}
      borderRadius={4}
    >
      <Typography variant="h4" align="left">
        Gate {gateNumber}
      </Typography>
      <Stack gap={1}>
        <Typography>Numero de vuelo</Typography>
        <TextField
          disabled={!admin}
          value={!admin ? flightNumber : undefined}
          onChange={(e) => setflightNumber(e.target.value)}
        ></TextField>
        <Typography>Destination</Typography>
        <TextField
          disabled={!admin}
          value={!admin ? destination : undefined}
          onChange={(e) => setdestination(e.target.value)}
        ></TextField>
        <Typography>Airline</Typography>
        <TextField
          disabled={!admin}
          value={!admin ? airLine : undefined}
          onChange={(e) => setairLine(e.target.value)}
        ></TextField>
        <Typography>Departure time </Typography>
        <TextField
          disabled={!admin}
          value={!admin ? departureTime : undefined}
          onChange={(e) => setdepartureTime(e.target.value)}
        ></TextField>
      </Stack>
      {admin && (
        <Button
          variant="contained"
          sx={{ marginLeft: "auto", marginTop: 2 }}
          onClick={() => {
            socket.send({
              gateNumber: gateNumber,
              flightNumber: flightNumber,
              destination: destination,
              airLine: airLine,
              departureTime: departureTime,
            });
          }}
        >
          {`update gate: ${gateNumber}`}
        </Button>
      )}
    </Stack>
  );
};
export default GateCard;
