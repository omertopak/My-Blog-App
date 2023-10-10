import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Form, Formik } from 'formik';
import useAuthCall from "../hooks/useAuthCall";
import { Link } from "react-router-dom"

const Login = () => {
    const { login } = useAuthCall()

    return (

        <Grid container height="100vh" width="100vw" justifyContent="center" sx={{ backgroundColor: "whitesmoke" }}>
            <Grid item
                xs={false}
                sm={false}
                md={6}
                lg={7}
                xl={8}
                sx={{
                    display: 'flex', justifyContent: "center",
                    alignItems: "center"
                }}>

                <img
                    width="350rem"
                    src="https://static.vecteezy.com/system/resources/previews/024/488/978/original/ink-splash-ai-generative-free-png.png"></img>
            </Grid>
            <CssBaseline />
            <Grid
                item
                xs={12}
                sm={12}
                md={6}
                lg={5}
                xl={4}
                p={1}
                sx={{ backgroundColor: "#F8F8F8" }}
            >
                <Box
                    sx={{
                        my: 8,
                        mx: 4,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        marginRight: "5rem",
                        marginTop: "7rem",

                    }}
                >
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>


                    <Formik
                        initialValues={{ username: "", email: "", password: "" }}

                        onSubmit={(values, action) => {
                            login(values)
                            // console.log(values);
                            action.resetForm()
                            action.setSubmitting(false)
                        }}
                    >

                        {({ handleChange, handleBlur, values, touched, errors }) => (
                            <Form>
                                
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="username"
                                        label="Username"
                                        name="username"
                                        autoComplete="username"
                                        onChange={handleChange}
                                        value={values.username}
                                        onBlur={handleBlur}
                                        error={touched.email && Boolean(errors.email)}
                                        autoFocus
                                        sx={{ mt: 1, }}
                                    />
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        name="email"
                                        label="Email Address"
                                        type="email"
                                        id="email"
                                        autoComplete="Email"
                                        
                                        onChange={handleChange}
                                        value={values.email}
                                        onBlur={handleBlur}
                                        error={touched.email && Boolean(errors.email)}
                                    />
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type="password"
                                        id="password"
                                        autoComplete="current-password"
                                        onChange={handleChange}
                                        value={values.password}
                                        onBlur={handleBlur}
                                        error={touched.email && Boolean(errors.email)}
                                    />

                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        sx={{ mt: 6, mb: 1 }}
                                    >
                                        Sign In
                                    </Button>
                                    <Grid container>
                                        <Grid item xs>
                                        
                                        </Grid>
                                        <Grid item>
                                            <Link to="/register" variant="body2">
                                                {"Don't have an account? Sign Up"}
                                            </Link>
                                        </Grid>
                                    </Grid>
                                
                            </Form>
                        )}
                    </Formik>


                </Box>
            </Grid>
        </Grid>
    );
}

export default Login