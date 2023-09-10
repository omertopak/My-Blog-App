import Button from "@mui/material/Button";

import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import { Form, Formik } from 'formik';
import useAuthCall from "../hooks/useAuthCall";
import { shadow2 } from "../style/theme";


const Password = () => {
    const { changePass } = useAuthCall()

    return (

        <Box style={{width:"80%"}}>
            <Grid
            >
                <Box
                >
                    <Formik
                        initialValues={{ new_password1: "",
                        new_password2: "" }}

                        onSubmit={(values, action) => {
                            changePass(values)
                            action.resetForm()
                            action.setSubmitting(false)
                        }}
                    >

                        {({ handleChange, handleBlur, values, touched, errors }) => (
                            <Form >
                                
                                    <TextField
                                        variant="filled"
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="new pass"
                                        label="New Password"
                                        name="password"
                                        autoComplete="password"
                                        onChange={handleChange}
                                        value={values.new_password1}
                                        onBlur={handleBlur}
                                        error={touched.email && Boolean(errors.email)}
                                        autoFocus
                                        sx={{ mt: 1, }}
                                    />
                                     <TextField
                                        variant="filled"
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="new pass2"
                                        label="New Password"
                                        name="password 2"
                                        autoComplete="password2"
                                        onChange={handleChange}
                                        value={values.new_password2}
                                        onBlur={handleBlur}
                                        error={touched.email && Boolean(errors.email)}
                                        
                                        sx={{ mt: 1, }}
                                    />
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        sx={[{ mt: 6, mb: 1 },shadow2]}
                                    >
                                      CHANGE PASSWORD
                                    </Button>
                                    
                            </Form>
                        )}
                    </Formik>


                </Box>
            </Grid>
        </Box>
    );
}

export default Password