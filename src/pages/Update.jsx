import React from 'react'
import { Card, CardContent, CardMedia, Typography, Chip, TextField, Button, FormControl, InputLabel, Select, MenuItem, FormHelperText, Box } from '@mui/material';
import { Form, Formik } from 'formik';
import useBlogCall from "../hooks/useBlogCall"
import { number } from 'yup';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
const Update = () => {
    const params = useParams()
    // console.log("params",params);
    const id = params.id
    const {userId} = useSelector((state)=>state.auth)
    const { updateBlog } = useBlogCall()
    const { getData } = useBlogCall()
    const { myBlog } = useBlogCall()
    
    useEffect(() => {
        getData("categories")
        myBlog(userId,"myblogs")  
    }, [])
    
    const {categories} = useSelector((state)=>state.blog)
    // console.log(categories);
    const {myblogs} = useSelector((state)=>state?.blog)
    // console.log(myblogs);
    const updates = myblogs?.filter((item)=>item?.id==id)
    console.log(updates);
    // blogData = myblogs.filter
    
    // window.addEventListener('beforeunload', (event) => {
    //   // Cancel the event as stated by the standard.
    //   event.preventDefault();
    //   // Chrome requires returnValue to be set.
    //   event.returnValue = '';
    // });

  return (
    <Box >
      <Formik
        initialValues={{ title: updates[0]?.title , content: updates[0]?.content, image: updates[0]?.image ,category:updates[0]?.category ,slug:"",status:updates[0]?.status }}
        onSubmit={(values, action) => {
          updateBlog(values,id)
          console.log(values,id);
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
              value={values.title }
              required
              onChange={handleChange}
              onBlur={handleBlur}
              autoFocus
              // onChange={(e) => setTitle(e.target.value)}
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
              // onChange={(e) => setStatus(e.target.value)} 
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
              // onChange={(e) => setStatus(e.target.value)} 
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

export default Update