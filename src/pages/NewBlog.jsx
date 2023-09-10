import React from 'react'
import { Card, CardContent, CardMedia, Typography, Chip, TextField, Button, FormControl, InputLabel, Select, MenuItem, FormHelperText, Box } from '@mui/material';
import { Form, Formik } from 'formik';
import useBlogCall from "../hooks/useBlogCall"

const NewBlog = () => {
  const { newBlog } = useBlogCall()
  return (
    <Box >
      <Formik
        initialValues={{ title: "", content: "", image: "",category: "",image: "",status:"" }}

        onSubmit={(values, action) => {
          console.log(values);
          // newBlog(values)
          console.log(values);
          action.resetForm()
          action.setSubmitting(false)
        }}
      >
      {({ handleChange, handleBlur, values, touched, errors }) => (
        <Form sx={{}}>
          <CardContent sx={{ width: "50%", margin: "auto"}}>
            <Typography variant="h5" component="div">
              Create New Blog
            </Typography>
            <TextField
              label="Title"
              fullWidth
              name="title"
              value={values.title}
              required
              onChange={handleChange}
              onBlur={handleBlur}
              autoFocus
              // onChange={(e) => setTitle(e.target.value)}
              sx={{ mt: 2 }}
            />
            <TextField
              label="Content"
              multiline
              fullWidth
              rows={5}
              name="content"
              value={values.content}
              required
              onChange={handleChange}
              onBlur={handleBlur}
              // onChange={(e) => setContent(e.target.value)}
              sx={{ mt: 2 }}
            />
            <TextField
              label="Image URL"
              fullWidth
              name="image"
              value={values.image}
              required
              onChange={handleChange}
              onBlur={handleBlur}
              // onChange={(e) => setImage(e.target.value)}
              sx={{ mt: 2 }}
            />
            <TextField
              label="Category"
              fullWidth
              name="category"
              value={values.category}
              required
              onChange={handleChange}
              onBlur={handleBlur}
              // onChange={(e) => setCategory(e.target.value)}
              sx={{ mt: 2 }}
            />

            <FormControl fullWidth sx={{ mt: 2 }}>
              {/* <FormHelperText>Status</FormHelperText> */}
              <InputLabel id="status" sx={{opacity:"0.4"}}>Status</InputLabel>
              <Select
                labelId='status'
                label="status"
                value={values.status || ""}
                name='status'
                onChange={handleChange}
              // onChange={(e) => setStatus(e.target.value)} 
              >
                {/* <MenuItem value="">Status</MenuItem> */}
                <MenuItem value="publish">Publish</MenuItem>
                <MenuItem value="draft">Draft</MenuItem>
              </Select>
            </FormControl>
            <Button variant="contained" color="primary" type="submit" sx={{ mt: 2, }}>
              Kaydet
            </Button>
          </CardContent>
        </Form>
      )}
    </Formik>
    </Box>
  )
}

export default NewBlog