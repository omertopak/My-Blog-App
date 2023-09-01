import {createSlice} from "@reduxjs/toolkit"

const dataSlice = createSlice({
    name:"data",

    initialState:{
        loading:false,
        error:false,
        token:null,
        id:null,
        title:null,
        content:null,
        // image
        // publish_date
        // author
        // status
        // slug
        // comments
        // category_name
        // likes
        // post_views
        // comment_count
        // likes_n
    },

    reducers:{
        fetchStart:(state)=>{
            state.loading = true;
            state.error = false;
        },
        getdataSuccess:(state,{payload})=>{
            state.title=payload?.title
        },
        // logoutSuccess:()=>{
            
        // },
        fetchFail:(state)=>{
            state.loading = false;
            state.error = true;
        }
    }
})

export const {
    
  } = dataSlice.actions;
  export default dataSlice.reducer;