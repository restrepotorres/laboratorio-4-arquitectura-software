import GateCard from "./GateCard";
import { Button, List, ListItem, Stack, Typography } from "@mui/material";
import { useState, useEffect } from "react";
const AdminScreen = ({ admin = false }) => {
  const [isAdmin, setisAdmin] = useState(admin);


  return (
    <>



      <Typography variant="h3" align="center">
        {isAdmin ? `admin` : "cliente"} screen
      </Typography>
      <Stack>
        <Button
          variant="contained"
          sx={{ marginLeft: "auto" }}
          onClick={() => setisAdmin(!isAdmin)}
        >
          Switch
        </Button>
        <List>
          <ListItem key={1}>
            <GateCard admin={isAdmin} />
            <Button id="buttontest" variant="contained">
                update adminscreen
              </Button>
          </ListItem>
        </List>
      </Stack>
    </>
  );
};

export default AdminScreen;
