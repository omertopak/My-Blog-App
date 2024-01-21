import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Form, Formik } from 'formik';
import useAuthCall from "../hooks/useAuthCall";
import { inputLabelClasses } from "@mui/material/InputLabel";
const Login = () => {
    const { changePass } = useAuthCall()

    return (

        <Grid >
            <Grid
                item
                xs={12}
                sm={12}
                md={6}
                lg={5}
                xl={4}
                p={1}
               
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
                    <Formik
                        initialValues={{ password1:"", password2:""}}

                        onSubmit={(values, action) => {
                            console.log(values);
                            changePass(values)
                            // console.log(values);
                            action.resetForm()
                            action.setSubmitting(false)
                        }}
                    >

                        {({ handleChange, handleBlur, values, touched, errors }) => (
                            <Form>
                                
                                    <TextField
                                    // variant=""
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="password1"
                                        label="New Password"
                                        name="password1"
                                        type="password"
                                        autoComplete="password1"
                                        onChange={handleChange}
                                        value={values.password1 || ""}
                                        onBlur={handleBlur}
                                        error={touched.password1 && Boolean(errors.password1)}
                                        autoFocus
                                        sx={{ mt: 1, }}
                                        InputLabelProps={{
                                            sx: {
                                            // set the color of the label when not shrinked
                                            color: "grey",
                                            [`&.${inputLabelClasses.shrink}`]: {
                                                // set the color of the label when shrinked (usually when the TextField is focused)
                                                color: "orange"
                                            }
                                            }
  }}
                                    />
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        name="password2"
                                        label="New Password 2"
                                        type="password"
                                        id="password2"
                                        autoComplete="password2"
                                        onChange={handleChange}
                                        value={values.password2}
                                        onBlur={handleBlur}
                                        error={touched.password2 && Boolean(errors.password2)}
                                        InputLabelProps={{
                                            sx: {
                                            // set the color of the label when not shrinked
                                            color: "grey",
                                            [`&.${inputLabelClasses.shrink}`]: {
                                                // set the color of the label when shrinked (usually when the TextField is focused)
                                                color: "orange"
                                            }
                                            }
  }}
                                    />

                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        sx={{ mt: 6, mb: 1 }}
                                    >
                                        Change Password
                                    </Button>
                                    <Grid container>
                                        <Grid item xs>
                                        
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