import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import {Form, Formik } from 'formik';
import useAuthCall from "../hooks/useAuthCall";


const Login = () => {
    const {login} = useAuthCall

    return (
        
        <Grid container height="100vh" width="100vw"  justifyContent="center" sx={{backgroundColor:"whitesmoke"}}>
            <Grid item
                xs={false}
                sm={false}
                md={6}
                lg={7}
                xl={8}
                sx={{ display: 'flex', justifyContent:"center",
                alignItems:"center"}}>
                    
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
                sx={{backgroundColor:"#F8F8F8"}}
                >   
                <Box     
                    sx={{
                        my: 8,
                        mx: 4,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        marginRight:"5rem",
                        marginTop:"7rem",
                        
                    }}
                >
                    <Typography  component="h1" variant="h5">
                        Sign in
                    </Typography>


                    <Formik
                    initialValues={{username:"", email: "", password: "" }}
                    
                    onSubmit={(values, action) => {
                      login(values)
                      action.resetForm()
                      action.setSubmitting(false)
                    }}
                    >

                    {({ handleChange, values, }) => (   
                    <Form>
                    <Box
                        component="form"
                        noValidate
                        sx={{ mt: 5 }}
                    >

                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="username"
                            label="Usernaem"
                            name="username"
                            autoComplete="username"
                            onChange={handleChange}
                            value={values.username}
                            autoFocus
                            sx={{ mt: 1, mb: 6 }}
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
                        />
                        {/* <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                /> */}
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
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                    </Form>
                    )}
                    </Formik>


                </Box>
            </Grid>
        </Grid>
    );
}

export default Login