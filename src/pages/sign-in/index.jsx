import React, { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Link,
  Typography,
  Container,
} from "@mui/material";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = (e) => {
    e.preventDefault();
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          border: 1,
          p: 6,
          color:  '#0d47a1',
          borderRadius: 3
        }}
      >
        <Typography component="h1" variant="h5" sx={{fontSize: 30}}>
          Sign in
        </Typography>
        <Box
          component="form"
          onSubmit={handleSignIn}
          sx={{ mt: 2, width: "100%" }}
        >
          <TextField 
                  type="text"
                  required
                  id="email"
                  variant="outlined"
                  onChange={(e) => setEmail(e.target.value)}
                  label="Email Address"
                  className="form-control my-2"
                  value={email}
                  placeholder="email"
                  name="email"
                  multiline
                />
          <TextField
                  type="password"
                  required
                  id="password"
                  label="Password"
                  fullWidth
                  placeholder="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  sx={{ mt: 2, mb: 2  }}
                />
          <Link href="/sign-up">Register here</Link>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, p: 1.5, fontSize: 16 }}
          >
            Sign In
          </Button>
          <Typography variant="body2">
           
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default SignIn;
