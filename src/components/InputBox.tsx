import React, { useState } from "react";
import { TextField, Grid, IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { v4 as uuidv4 } from "uuid";
import { Message } from "./Chat/chatTypes";
import { useAppDispatch } from "../redux/hooks";
import { addMessage, autoReply } from "./Chat/chatSlice";

export const InputBox = () => {
  const [inputValue, setInputValue] = useState("");

  const dispatch = useAppDispatch();

  const sendMessage = (): void => {
    const msg: Message = {
      id: uuidv4(),
      userId: 1,
      text: inputValue
    };

    dispatch(addMessage(msg));
    setInputValue("");

    setTimeout(() => {
      console.log("auto replying");
      dispatch(autoReply());
    }, 3000);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <Grid item container xs={12} alignItems="center">
        <Grid item xs={11}>
          <TextField
            value={inputValue}
            placeholder="Message"
            sx={{ width: "100%" }}
            multiline
            rows={2}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={1}>
          <IconButton onClick={sendMessage}>
            <SendIcon />
          </IconButton>
        </Grid>
      </Grid>
    </>
  );
};
