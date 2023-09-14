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
                        initialValues={{ new_password1:"", new_password2:""}}

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
                                        id="new_password1"
                                        label="New Password"
                                        name="new_password1"
                                        type="password"
                                        autoComplete="new_password1"
                                        onChange={handleChange}
                                        value={values.new_password1 || ""}
                                        onBlur={handleBlur}
                                        error={touched.new_password1 && Boolean(errors.new_password1)}
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
                                        name="new_password2"
                                        label="New Password"
                                        type="password"
                                        id="new_password2"
                                        autoComplete="new_password2"
                                        onChange={handleChange}
                                        value={values.new_password2}
                                        onBlur={handleBlur}
                                        error={touched.new_password2 && Boolean(errors.new_password2)}
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