import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    visible: true,
}
  
const headerSlice = createSlice({
    name: 'header',
    initialState,
    reducers: {
        displayHeader: (state) => {
            state.visible = true;
            console.log("displayHeader");
        },
        hideHeader: (state) => {
            state.visible = false;
            console.log("hideHeader");
        }
    }
})

export const {displayHeader, hideHeader} = headerSlice.actions

export default headerSlice.reducer