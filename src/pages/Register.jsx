import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom"
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Formik, Form } from "formik";
import useAuthCall from "../hooks/useAuthCall";
const Register = () => {
    const { register } = useAuthCall()

    const registerSchema = object({
        email: string()
          .email("Lutfen valid bir email giriniz")
          .required("Bu alan zorunludur"),
        password: string()
          .required("Bu alan zorunludur")
          .min(8, "En az 8 karakter girilmelidir")
          .max(16, "En fazla 16 karakter girilmelidir")
          .matches(/\d+/, "En az bir rakam içermelidir.")
      })

    return (

        <Grid container justifyContent="center" sx={{ backgroundColor: "whitesmoke" }}>
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
                        marginTop: "2rem"
                    }}
                >
                    <Typography component="h1" variant="h5">
                        Sign Up
                    </Typography>
                    <Formik
                        initialValues={{ username: "", first_name: "", last_name: "", email: "", image: "", bio: "", password: "", password2: "" }}
                        validate={registerSchema}
                        onSubmit={(values, action) => {
                            console.log(values);
                            register(values)
                            console.log(values);
                            action.resetForm()
                            action.setSubmitting(false)
                        }}
                    >
                        {({ handleChange, handleBlur, values, touched, errors }) => (
                            <Form
                                sx={{ mt: 5 }}
                            >
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="username"
                                    label="Username"
                                    name="username"
                                    autoComplete="username"
                                    autoFocus
                                    onChange={handleChange}
                                    value={values.username}
                                    onBlur={handleBlur}
                                    error={touched.email && Boolean(errors.email)}

                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="first_name"
                                    label="First Name"
                                    type="first_name"
                                    id="first_name"
                                    autoComplete="first_name"
                                    onChange={handleChange}
                                    value={values.first_name}
                                    onBlur={handleBlur}
                                    error={touched.email && Boolean(errors.email)}
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="last_name"
                                    label="Last Name"
                                    name="last_name"
                                    autoComplete="last_name"
                                    autoFocus
                                    onChange={handleChange}
                                    value={values.last_name}
                                    onBlur={handleBlur}
                                    error={touched.email && Boolean(errors.email)}

                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="e-mail"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                    onChange={handleChange}
                                    value={values.email}
                                    onBlur={handleBlur}
                                    error={touched.email && Boolean(errors.email)}

                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="image"
                                    label="Image"
                                    name="image"
                                    autoComplete="image"
                                    autoFocus
                                    onChange={handleChange}
                                    value={values.image}
                                    onBlur={handleBlur}
                                    error={touched.email && Boolean(errors.email)}
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="bio"
                                    label="Bio"
                                    name="bio"
                                    autoComplete="bio"
                                    autoFocus
                                    onChange={handleChange}
                                    value={values.bio}
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
                                    autoComplete="password"
                                    onChange={handleChange}
                                    value={values.password}
                                    onBlur={handleBlur}
                                    error={touched.email && Boolean(errors.email)}
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password2"
                                    label="Password2 "
                                    type="password"
                                    id="password2"
                                    autoComplete="password2"
                                    onChange={handleChange}
                                    value={values.password2}
                                    onBlur={handleBlur}
                                    error={touched.email && Boolean(errors.email)}
                                />
                                
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 1 }}
                                >
                                    Sign Up
                                </Button>
                                <Grid container>
                                    <Grid item xs>

                                    </Grid>
                                    <Grid item>

                                        <Link to="/" variant="body2">
                                            {"Have an account? Log in"}
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

export default Register