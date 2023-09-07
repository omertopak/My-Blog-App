import {createSlice} from "@reduxjs/toolkit"

const authSlice = createSlice({
    name:"auth",

    initialState:{
        currentUser:null,
        loading:false,
        error:false,
        token:null,
        userId:null,
    },

    reducers:{
        fetchStart:(state)=>{
            state.loading = true;
            state.error = false;
        },
        getAuthSuccess:(state,{payload})=>{
            state.loading = false;
            state.currentUser = payload.user.username;
            state.token = payload.key;
            state.userId=payload.user.id;
            // console.log("Token",payload.key);
            // console.log("id",payload.user.id);
            // console.log(payload);
        },
        logoutSuccess:(state)=>{
            state.loading = false;
            state.currentUser = null;
            state.token = null;
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
    logoutSuccess,
    
  } = authSlice.actions;
  export default authSlice.reducer;