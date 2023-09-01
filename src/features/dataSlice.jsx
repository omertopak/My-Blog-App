import {createSlice} from "@reduxjs/toolkit"

const dataSlice = createSlice({
    name:"blog",

    initialState:{
        loading:false,
        error:false,
        token:null,
        blogs:[],
    },

    reducers:{
        fetchStart:(state)=>{
            state.loading = true;
            state.error = false;
        },
        getDataSuccess:(state,{payload})=>{
            //console.log("payload.data",payload.url);
            state[payload.url]=payload?.data;
            state.loading = false;
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
    fetchStart,
    getDataSuccess,
    fetchFail,
  } = dataSlice.actions;
  export default dataSlice.reducer;