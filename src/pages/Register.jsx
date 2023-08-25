import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const Register = () => {
  

    return (
        
        <Grid container   justifyContent="center"  sx={{backgroundColor:"whitesmoke"}}>
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
                        marginTop:"2rem"
                    }}
                >
                    <Typography  component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Box
                        component="form"
                        noValidate
                        // onSubmit={handleSubmit}
                        sx={{ mt: 5 }}
                    >
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            
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
                        />
                         <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="image"
                            label="Avatar Address"
                            name="image"
                            autoComplete="image"
                            autoFocus
                            
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="bio"
                            label="Bio"
                            name="bio"
                            autoComplete="email"
                            autoFocus
                            
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Password"
                            name="password"
                            autoComplete="email"
                            autoFocus
                            
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Verify Your Password"
                            name="Password"
                            autoComplete="email"
                            autoFocus
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
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    {"Have an account? Log in"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
}

export default Register