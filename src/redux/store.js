import { configureStore } from "@reduxjs/toolkit";
import membersSlice from "./MembersReducers/Members";

const store = configureStore({
    reducer: {
        membersList: membersSlice.reducer
    }
})

export default store