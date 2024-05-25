import GateCard from "./GateCard";
import { List, ListItem, Stack, Typography } from "@mui/material";
const GatePanel = ({ admin = false }) => {
  return (
    <>
      <Typography
        variant="h2"
        align="center"
        mb={4}
        sx={{ backgroundColor: "#76ABAE", maxWidth: "35%", marginTop: 2 }}
        marginX={"auto"}
        borderRadius={10}
      >
        {admin ? `Admin` : "Client"} screen
      </Typography>
      <Stack
        display={"grid"}
        gridTemplateColumns={"auto auto auto"}
        gap={3}
        marginTop={2}
      >
        <GateCard admin={admin} gateNumber={"1"} />
        <GateCard admin={admin} gateNumber={"2"} />
        <GateCard admin={admin} gateNumber={"3"} />

        <GateCard admin={admin} gateNumber={"4"} />
        <GateCard admin={admin} gateNumber={"5"} />
        <GateCard admin={admin} gateNumber={"6"} />
      </Stack>
    </>
  );
};
export default GatePanel;
