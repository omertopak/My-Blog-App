import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";


const Register = () => {


    return (
        
        <Grid container justifyContent="center" height="inherit" sx={{backgroundColor:"#DCDCDC"}}
         >
            <Grid item
                md={6}
                lg={7}
                xl={8}
                sx={{ display: 'flex', justifyContent:"center",
                alignItems:"center"}}
                >
            <img 
                width="350rem"
                margin="auto"
                src="https://static.vecteezy.com/system/resources/previews/024/488/978/original/ink-splash-ai-generative-free-png.png"></img>
            </Grid>
            <CssBaseline />
            <Grid
                item
                sm={8}
                md={6}
                lg={5}
                xl={4}
                >   
                <Box     
                    sx={{
                        my: 8,
                        mx: 4,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        marginRight:"5rem",
                    
                    }}
                >
                    <Typography  component="h1" variant="h5" >
                        Sign Up
                    </Typography>
                    <Box overflow="scroll"
                        component="form"
                        noValidate
                        // onSubmit={handleSubmit}
                        sx={{ mt: 1 }}
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
                          sx={{ mt: 4, mb: 1 }}
                        >
                            Sign Up
                        </Button>
                        <Grid container>
                            <Grid item xs>
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