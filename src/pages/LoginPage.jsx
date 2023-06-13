import { useState, useEffect } from "react";
import { useUserAuth } from "../context/UserAuthContext";
import { Link, useNavigate } from "react-router-dom";
import { handleGoogleLogin, handleLogin } from "../functions/authFunctions";
import {
  Typography,
  TextField,
  Button,
  Grid,
  Container,
  IconButton,
} from "@mui/material";
import { Google } from "@mui/icons-material";

const LoginPage = () => {
  const { isLoggedIn } = useUserAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await handleLogin(email, password);
      navigate("/");
    } catch (error) {
      let errorMessage = "";

      switch (error.code) {
        case "auth/user-not-found":
          errorMessage = "User not found";
          break;
        case "auth/wrong-password":
          errorMessage = "Incorrect credentials";
          break;
        case "auth/invalid-email":
          errorMessage = "Invalid email format";
          break;
        case "auth/timeout":
          errorMessage = "Timeout occurred";
          break;
        case "auth/network-request-failed":
          errorMessage = "Network error";
          break;
        default:
          errorMessage = error.message;
          break;
      }

      setError(errorMessage);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await handleGoogleLogin();
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Container
      maxWidth="sm"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Grid container justifyContent="center" spacing={2} direction="column">
        <Grid item>
          <Typography variant="h1">Login</Typography>
          {error && <Typography color="error">{error}</Typography>}
        </Grid>
        <Grid item>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2} direction="column">
              <Grid item>
                <TextField
                  type="email"
                  label="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  fullWidth
                />
              </Grid>
              <Grid item>
                <TextField
                  type="password"
                  label="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  fullWidth
                />
              </Grid>
              <Grid item>
                <Button variant="contained" type="submit" fullWidth>
                  Login
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            onClick={handleGoogleSignIn}
            startIcon={<Google />}
            fullWidth
          >
            Sign in with Google
          </Button>
        </Grid>
        <Grid item>
          <Typography align="center">
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default LoginPage;