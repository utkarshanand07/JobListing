import React from "react";
import {
  Box,
  Tab,
  Typography,
  Button,
  Paper,
  Container,
} from "@mui/material";
import { Link } from "react-router-dom";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Create from "./Create";

export default function Dashboard() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ padding: "2rem", borderRadius: "1rem" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 3,
          }}
        >
          <Typography variant="h4">Employer Dashboard</Typography>
          <Button variant="outlined" component={Link} to="/">
            Home
          </Button>
        </Box>

        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="dashboard tabs">
              <Tab label="Create Job Post" value="1" />
              {/* You can add more tabs here later */}
            </TabList>
          </Box>
          <TabPanel value="1">
            <Create />
          </TabPanel>
        </TabContext>
      </Paper>
    </Container>
  );
}