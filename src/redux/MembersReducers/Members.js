import { createSlice } from "@reduxjs/toolkit";

const membersSlice = createSlice({
    name: 'membersList',
    initialState: {
        membersList: []
    },
    reducers: {
        setMembersList: (state, action) => {
            state.membersList = action.payload
        }
    }
})

export const {setMembersList} = membersSlice.actions
export default membersSlice