import { Grid, List } from "@mui/material";
import { useAppSelector } from "../redux/hooks";
import { Message } from "./Chat/chatTypes";
import { InputBox } from "./InputBox";
import { ChatMessage } from "./ChatMessage";

export const Conversation = () => {
  const messages = useAppSelector((state) => state.chat.messages);
  const user = useAppSelector((state) => state.users.user);
  return (
    <>
      <Grid
        container
        wrap="wrap"
        alignContent="space-between"
        sx={{ height: "100%", margin: "8px", width: "auto" }}
      >
        <Grid item xs={12} sx={{ height: "calc(100% - 56pxpx)" }}>
          {messages.length ? (
            <List
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end"
              }}
            >
              {messages.map((msg: Message, index) => (
                <ChatMessage
                  key={index}
                  message={msg}
                  currentUserId={user.id}
                />
              ))}
            </List>
          ) : (
            "no hay mensajes"
          )}
        </Grid>
        <Grid container item xs={12}>
          <InputBox />
        </Grid>
      </Grid>
    </>
  );
};
