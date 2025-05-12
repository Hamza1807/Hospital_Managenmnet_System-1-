import React, { useState } from "react";
import { Collapse, List, ListItem, ListItemText } from "@mui/material";

const AppointmentDropdown = () => {
  const [open, setOpen] = useState(false);

  const toggleDropdown = () => {
    setOpen(!open);
  };

  return (
    <>
      <ListItem button onClick={toggleDropdown}>
        <ListItemText primary="Appointments" />
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button component="a" href="/add-appointment">
            <ListItemText primary="Add Appointment" />
          </ListItem>
          <ListItem button component="a" href="/delete-appointment">
            <ListItemText primary="Delete Appointment" />
          </ListItem>
          <ListItem button component="a" href="/update-appointment">
            <ListItemText primary="Update Appointment" />
          </ListItem>
          <ListItem button component="a" href="/view-appointments">
            <ListItemText primary="View Appointments" />
          </ListItem>
        </List>
      </Collapse>
    </>
  );
};

export default AppointmentDropdown;
