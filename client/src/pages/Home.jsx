import React from "react";
import {
  Typography,
  Button,
  Container,
  Box,
  Paper,
  Stack,
} from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 8 }}>
      <Paper elevation={4} sx={{ padding: 5, borderRadius: 4, textAlign: "center" }}>
        <Typography variant="h3" gutterBottom>
          Get Hired or Hire People for Free!
        </Typography>

        <Box mt={5}>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={4} justifyContent="center">
            <Button
              variant="contained"
              size="large"
              component={Link}
              to="/employer/dashboard"
            >
              Hire Talent
            </Button>
            <Button
              variant="outlined"
              size="large"
              component={Link}
              to="/employee/feed"
            >
              Get a Job Now
            </Button>
          </Stack>
        </Box>
      </Paper>
    </Container>
  );
};

export default Home;
