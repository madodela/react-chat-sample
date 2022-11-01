import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { Message } from "./chatTypes";

interface ChatState {
  isOpen: boolean;
  messages: Message[];
}

const initialState: ChatState = {
  isOpen: false,
  messages: []
};

export const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    openChat: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    },
    addMessage: (state, action: PayloadAction<Message>) => {
      state.messages = [...state.messages, action.payload];
    },
    autoReply: (state) => {
      const autoReplyMsg: Message = {
        id: uuidv4(),
        userId: 2,
        text: "Thanks for contacting us, someone will attend you soon"
      };
      state.messages = [...state.messages, autoReplyMsg];
    }
  }
});

export const { openChat, addMessage, autoReply } = chatSlice.actions;

export default chatSlice.reducer;
