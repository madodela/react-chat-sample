import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../models/User";

interface UsersState {
  user: User;
}

const initialState: UsersState = {
  user: new User()
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    }
  }
});

export const { setUser } = usersSlice.actions;
export default usersSlice.reducer;
