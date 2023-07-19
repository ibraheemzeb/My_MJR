import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    visible: true,
}
  
const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        displayWeather: (state) => {
            state.visible = true;
            console.log("displayHeader");
        },
        hideWeather: (state) => {
            state.visible = false;
            console.log("hideHeader");
        }
    }
})

export const { displayWeather, hideWeather} = weatherSlice.actions

export default weatherSlice.reducer