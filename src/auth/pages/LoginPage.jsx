import { Box, Button, Grid, TextField } from "@mui/material";

import brandLogo from "../../assets/brandLogo2.png";
import { useForm } from "../hooks/useForm";

export const LoginPage = () => {
  const [form, handleInputChange, reset] = useForm({ email: "", password: "" });
  const { email, password } = form;

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(form);
    reset();
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingX: 4,
        }}
      >
        <Grid
          container
          sx={{
            backgroundColor: "#333",
            paddingY: 10,
            paddingX: {
              sm: 7,
              xs: 3,
            },
            maxWidth: 700,
            borderRadius: 4,
            boxShadow: 20,
          }}
        >
          <Grid item xs={12} sm={8} marginBottom={3} margin="auto">
            <img src={brandLogo} alt="brand logo" />
          </Grid>
          <Grid item xs={12} marginBottom={3}>
            <TextField
              sx={{ backgroundColor: "white", borderRadius: 1 }}
              fullWidth
              variant="filled"
              color="secondary"
              label="email"
              name="email"
              type="email"
              onChange={handleInputChange}
              value={email}
            />
          </Grid>
          <Grid item xs={12} marginBottom={6}>
            <TextField
              fullWidth
              variant="filled"
              label="contraseña"
              name="password"
              type="password"
              color="secondary"
              sx={{ backgroundColor: "white", borderRadius: 1 }}
              onChange={handleInputChange}
              value={password}
            />
          </Grid>
          <Grid container justifyContent="center">
            <Grid item xs={12} sm={5} marginBottom={2}>
              <Button
                variant="contained"
                fullWidth
                color="secondary"
                type="submit"
              >
                Ingresar
              </Button>
            </Grid>
            <Grid item xs={0} sm={1} />
            <Grid item xs={12} sm={5} marginBottom={2}>
              <Button variant="contained" fullWidth color="secondary">
                Crear cuenta
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </form>
  );
};
