import { Button, Stack, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const GateCard = ({ admin = false, gateNumber = "{$number}" }) => {
  const socket = io("http://localhost:3000");

  const [reciveGateNumber, setreciveGateNumber] = useState("");
  const [flightNumber, setflightNumber] = useState("no value");
  const [destination, setdestination] = useState("");
  const [airLine, setairLine] = useState("");
  const [departureTime, setdepartureTime] = useState("");

  useEffect(() => {
    socket.on("message", (data) => {
      setreciveGateNumber(data.gateNumber);
      setflightNumber(data.flightNumber);
      setdestination(data.destination);
      setairLine(data.airLine);
      setdepartureTime(data.departureTime);
    });
  }, []);

  const gateValidation = () => {
    return !admin && reciveGateNumber === gateNumber;
  };
  return (
    <Stack marginX={"40%"} mb={5}>
      <Typography variant="h4" align="left">
        Gate {gateNumber}
      </Typography>
      <Stack gap={1}>
        <Typography>Numero de vuelo</Typography>
        <TextField
          disabled={!admin}
          value={gateValidation() ? flightNumber : undefined}
          onChange={(e) => setflightNumber(e.target.value)}
        ></TextField>
        <Typography>Destination</Typography>
        <TextField
          disabled={!admin}
          value={gateValidation() ? destination : undefined}
          onChange={(e) => setdestination(e.target.value)}
        ></TextField>
        <Typography>Airline</Typography>
        <TextField
          disabled={!admin}
          value={gateValidation() ? airLine : undefined}
          onChange={(e) => setairLine(e.target.value)}
        ></TextField>
        <Typography>Departure time </Typography>
        <TextField
          disabled={!admin}
          value={gateValidation() ? departureTime : undefined}
          onChange={(e) => setdepartureTime(e.target.value)}
        ></TextField>
      </Stack>
      {admin && (
        <Button
          id={`${gateNumber}`}
          variant="contained"
          sx={{ width: 100, marginLeft: "auto", marginTop: 2 }}
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
          {`${gateNumber}`}
        </Button>
      )}
    </Stack>
  );
};

export default GateCard;
