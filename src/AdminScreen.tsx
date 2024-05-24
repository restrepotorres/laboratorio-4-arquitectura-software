import GateCard from "./GateCard";
import { List, ListItem, Stack, Typography } from "@mui/material";
const AdminScreen = ({ admin = false }) => {
  return (
    <>
      <script defer src="./client.js"></script>
      <Typography variant="h3" align="center">
        {admin ? `admin` : "cliente"} screen
      </Typography>
      <Stack>
        <GateCard admin={admin} gateNumber={"1"} />
        <GateCard admin={admin} gateNumber={"2"} />
      </Stack>
    </>
  );
};
export default AdminScreen;
