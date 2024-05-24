import GateCard from "./GateCard";
import { List, ListItem, Stack, Typography } from "@mui/material";
const AdminScreen = ({ admin = false }) => {
  return (
    <>

      <Typography variant="h3" align="center" mb={4}>
        {admin ? `admin` : "client"} screen
      </Typography>
      <Stack display={"grid"} gridTemplateColumns={"auto auto auto"}>
        <GateCard admin={admin} gateNumber={"1"} />
        <GateCard admin={admin} gateNumber={"2"} />
        <GateCard admin={admin} gateNumber={"3"} />
      </Stack>
    </>
  );
};
export default AdminScreen;
