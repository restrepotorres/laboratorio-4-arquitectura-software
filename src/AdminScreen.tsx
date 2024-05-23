import React from "react";
import GateCard from "./GateCard";
import { Stack, Typography } from "@mui/material";

const AdminScreen = () => {
  return (
    <>
      <Typography variant="h3" align="center">
        Admin screen
      </Typography>
      <Stack gap={3}>
        <GateCard admin={true} />
      </Stack>
    </>
  );
};

export default AdminScreen;
