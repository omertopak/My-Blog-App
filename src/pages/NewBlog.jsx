import React from 'react'
import { Card, CardContent, CardMedia, Typography, Chip, TextField, Button, FormControl, InputLabel, Select, MenuItem,FormHelperText } from '@mui/material';
const NewBlog = () => {
  return (
    <Card >
      <CardContent sx={{width:"50%",margin:"auto"}}>
        <Typography variant="h5" component="div">
          Create New Blog
        </Typography>
        <TextField
          label="Title"
          fullWidth
          value={"title"}
          // onChange={(e) => setTitle(e.target.value)}
          sx={{ mt: 2 }}
        />
        <TextField
          label="Content"
          multiline
          fullWidth
          rows={5}
          value={"content"}
          // onChange={(e) => setContent(e.target.value)}
          sx={{ mt: 2 }}
        />
        <TextField
          label="Image URL"
          fullWidth
          value={"image"}
          // onChange={(e) => setImage(e.target.value)}
          sx={{ mt: 2 }}
        />
        <TextField
          label="Category"
          fullWidth
          value={"category"}
          // onChange={(e) => setCategory(e.target.value)}
          sx={{ mt: 2 }}
        />
        
        <FormControl fullWidth sx={{ mt: 2 }}>
          <FormHelperText>Select a statu</FormHelperText>
          <Select
            value={"status"}
            // onChange={(e) => setStatus(e.target.value)} 
            > 
          {/* <MenuItem value="">Status</MenuItem> */}
            <MenuItem value="publish">Publish</MenuItem>
            <MenuItem value="draft">Draft</MenuItem>
          </Select>
        </FormControl>
        <Button variant="contained" color="primary"  sx={{ mt: 2,  }}>
          Kaydet
        </Button>
      </CardContent>
    </Card>
  )
}

export default NewBlog