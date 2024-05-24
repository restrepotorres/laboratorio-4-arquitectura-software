import { Button, Stack, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const GateCard = ({ admin = false, gateNumber = "{$number}" }) => {
  const socket = io("http://localhost:3000");

  const [reciveGateNumber, setreciveGateNumber] = useState("");
  const [testTypo, settestTypo] = useState("no value");

  useEffect(() => {
    socket.on("message", (data) => {
      setreciveGateNumber(data.gateNumber);
      settestTypo(data.envio);
    });
  }, []);

  const gateValidation = () => {
    console.log(reciveGateNumber);
    console.log(gateNumber);
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
          value={gateValidation() ? testTypo : undefined}
          onChange={(e) => settestTypo(e.target.value)}
        ></TextField>
        <Typography>Destination</Typography>
        <TextField disabled={!admin}></TextField>
        <Typography>Airline</Typography>
        <TextField disabled={!admin}></TextField>
        <Typography>Departure time </Typography>
        <TextField disabled={!admin}></TextField>
      </Stack>
      {admin && (
        <Button
          className="updateButtonx"
          id={`${gateNumber}`}
          variant="contained"
          sx={{ width: 100, marginLeft: "auto", marginTop: 2 }}
          onClick={() => {
            socket.send({ gateNumber: gateNumber, envio: testTypo });
          }}
        >
          {`el number es ${gateNumber}`}
        </Button>
      )}
    </Stack>
  );
};

export default GateCard;
