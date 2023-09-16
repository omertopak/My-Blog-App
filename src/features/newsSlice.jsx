import {createSlice} from "@reduxjs/toolkit"

const newsSlice = createSlice({
    name:"news",

    initialState:{
        loading:false,
        error:false,
        news:[]
    },

    reducers:{
        fetchStart:(state)=>{
            state.loading = true;
            state.error = false;
        },
        getDataSuccess:(state,{payload})=>{
            
            state[payload?.url]=payload?.data;
            state.loading = false;
        }, 
        fetchFail:(state)=>{
            state.loading = false;
            state.error = true;
        }
    }
})

export const {
    fetchStart,
    getDataSuccess,
    fetchFail,
  } = newsSlice.actions;
  export default newsSlice.reducer;