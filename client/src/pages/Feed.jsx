import React, { useEffect, useState } from "react";
import {
  Box,
  Card,
  Grid,
  TextField,
  Typography,
  InputAdornment,
  Button,
  Container,
  Stack,
  Chip,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import { Link } from "react-router-dom";

const Feed = () => {
  const [query, setQuery] = useState("");
  const [post, setPost] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get(`http://localhost:8080/posts/${query}`);
      setPost(response.data);
    };
    const fetchInitialPosts = async () => {
      const response = await axios.get(`http://localhost:8080/allPosts`);
      setPost(response.data);
    };

    if (query.length === 0) fetchInitialPosts();
    if (query.length > 2) fetchPosts();
  }, [query]);

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h4">Employee Feed</Typography>
        <Button variant="outlined" component={Link} to="/">
          Home
        </Button>
      </Box>

      <Box mb={4}>
        <TextField
          fullWidth
          placeholder="Search by skill or profile..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      <Grid container spacing={3}>
        {post &&
          post.map((p) => (
            <Grid key={p.id} item xs={12} sm={6} md={4}>
              <Card sx={{ padding: 3, borderRadius: 3, height: "100%" }}>
                <Stack spacing={2}>
                  <Typography variant="h5" fontWeight={600}>
                    {p.profile}
                  </Typography>

                  <Typography variant="body2" color="text.secondary">
                    {p.desc}
                  </Typography>

                  <Typography variant="body1" fontWeight={500}>
                    Experience Required: {p.exp} year{p.exp > 1 ? "s" : ""}
                  </Typography>

                  <Box>
                    <Typography variant="body2" fontWeight={600} gutterBottom>
                      Skills:
                    </Typography>
                    <Box display="flex" flexWrap="wrap" gap={1}>
                      {p.techs.map((skill, i) => (
                        <Chip key={i} label={skill} variant="outlined" />
                      ))}
                    </Box>
                  </Box>
                </Stack>
              </Card>
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};

export default Feed;
