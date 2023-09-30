import React from 'react'
import { Card, CardContent, CardMedia, Typography, Chip, TextField, Button, FormControl, InputLabel, Select, MenuItem, FormHelperText, Box } from '@mui/material';
import { Form, Formik } from 'formik';
import useBlogCall from "../hooks/useBlogCall"
import { number } from 'yup';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const NewBlog = () => {
  const { newBlog } = useBlogCall()
  const { getData } = useBlogCall()
  useEffect(() => {
    getData("categories")
  }, [])
  
  const {categories} = useSelector((state)=>state.blog)

  return (
    <Box >
      <Formik
        initialValues={{ title: "", content: "", image: "",category:"",slug:"",status:"" }}

        onSubmit={(values, action) => {
          newBlog(values)
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
             
              sx={{ mt: 2, }}
              // inputProps={{ style: { fontFamily: 'nunito', color: 'purple' } }}
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
              sx={{ mt: 2}}
            />
            

            <FormControl fullWidth sx={{ mt: 2 }}>
              {/* <FormHelperText>Status</FormHelperText> */}
              <InputLabel id="category" >Categories</InputLabel>
              <Select
                labelId='category'
                label="Category"
                value={values.category || ""}
                name='category'
                onChange={handleChange}
                required
              >
                {categories.map((item)=>
                  <MenuItem key={item.id} value={item.id}>{item.name}</MenuItem>
                  )}
                
                
              </Select>
            </FormControl>
            <FormControl fullWidth sx={{ mt: 2 }}>
              {/* <FormHelperText>Status</FormHelperText> */}
              <InputLabel id="status" >Status</InputLabel>
              <Select
                labelId='status'
                label="status"
                value={values.status || ""}
                name='status'
                onChange={handleChange}
              >
                {/* <MenuItem value="">Status</MenuItem> */}
                <MenuItem value="p">Publish</MenuItem>
                <MenuItem value="d">Draft</MenuItem>
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