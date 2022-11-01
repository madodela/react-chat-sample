import { ListItem, ListItemProps, ListItemText, styled } from "@mui/material";
import { Message } from "./Chat/chatTypes";

type ChatMessageProps = {
  message: Message;
  currentUserId: number;
};

interface ChatBubbleProps extends ListItemProps {
  isOwner?: boolean;
}

const ChatBubble = styled(ListItem)<ChatBubbleProps>(({ isOwner }) => ({
  "&.MuiListItem-root": {
    width: "60%",
    borderRadius: "16px",
    background: isOwner ? "#f3cbcb" : "#00adff",
    alignSelf: isOwner ? "flex-end" : "flex-start",
    boxShadow: "2px 2px #0d0d0d0f",
    marginBottom: "8px"
  }
}));

export const ChatMessage = ({
  message,
  currentUserId
}: ChatMessageProps): JSX.Element => {
  return (
    <ChatBubble isOwner={message.userId === currentUserId}>
      <ListItemText primary={message.text} />
    </ChatBubble>
  );
};
