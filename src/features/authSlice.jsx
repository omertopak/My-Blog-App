import {createSlice} from "@reduxjs/toolkit"

const authSlice = createSlice({
    name:"auth",

    initialState:{
        currentUser:null,
        loading:false,
        error:false,
        token:null,
    },

    reducers:{
        fetchStart:(state)=>{
            state.loading = true;
            state.error = false;
        },
        getAuthSuccess:(state,{payload})=>{
            state.loading = false;
            state.currentUser = payload.XXX;
            state.token = payload.XXX;
        },
        fetchFail:(state)=>{
            state.loading = false;
            state.error = true;
        }
    }
})

export const {
    fetchStart,
    getAuthSuccess,
    fetchFail,
  } = authSlice.actions;
  export default authSlice.reducer;