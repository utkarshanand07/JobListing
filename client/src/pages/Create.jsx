import React, { useState } from "react";
import {
  Typography,
  TextField,
  Button,
  Paper,
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const initial = { profile: "", exp: 0, techs: [], desc: "" };

const skillSet = ["JavaScript", "Java", "Python", "Django", "Rust"];

const Create = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState(initial);

  const handleChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setForm((prev) => ({ ...prev, techs: [...prev.techs, value] }));
    } else {
      setForm((prev) => ({
        ...prev,
        techs: prev.techs.filter((tech) => tech !== value),
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:8080/post", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .then((data) => console.log("Success:", data))
      .catch((err) => console.error("Error:", err));

    navigate("/employee/feed");
  };

  return (
    <Paper
      elevation={3}
      sx={{
        padding: "2rem",
        maxWidth: "800px",
        margin: "2rem auto",
        borderRadius: "1rem",
      }}
    >
      <Typography variant="h4" align="center" gutterBottom>
        Create New Job Post
      </Typography>
      <Box component="form" onSubmit={handleSubmit} noValidate autoComplete="off">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              required
              label="Job Profile"
              variant="outlined"
              value={form.profile}
              onChange={(e) => setForm({ ...form, profile: e.target.value })}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              required
              label="Years of Experience"
              type="number"
              inputProps={{ min: 0 }}
              variant="outlined"
              value={form.exp}
              onChange={(e) => setForm({ ...form, exp: e.target.value })}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              required
              multiline
              rows={4}
              label="Job Description"
              variant="outlined"
              value={form.desc}
              onChange={(e) => setForm({ ...form, desc: e.target.value })}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>
              Select Required Skills
            </Typography>
            <FormGroup row>
              {skillSet.map((skill, index) => (
                <FormControlLabel
                  key={index}
                  control={
                    <Checkbox
                      value={skill}
                      checked={form.techs.includes(skill)}
                      onChange={handleChange}
                    />
                  }
                  label={skill}
                />
              ))}
            </FormGroup>
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" size="large" fullWidth>
              Submit Post
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};

export default Create;
