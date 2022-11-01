import { useEffect } from "react";
import Button from "@mui/material/Button";
import "./styles.css";
import { Chat } from "./components/Chat/Chat";
import { useAppSelector, useAppDispatch } from "./redux/hooks";
import { RootState } from "./redux/store";
import { openChat } from "./components/Chat/chatSlice";
import { User } from "./models/User";
import { setUser } from "./redux/usersSlice";

export default function App(): JSX.Element {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state: RootState) => state.chat.isOpen);

  const handleClick = (state: boolean): void => {
    dispatch(openChat(state));
  };

  useEffect(() => {
    const user = new User({ id: 1, name: "Loli Delgado" });
    dispatch(setUser(user));
  }, []);

  return (
    <div className="App">
      <h1>Chat app sample</h1>
      <Button variant="contained" onClick={() => handleClick(true)}>
        Open chat
      </Button>
      <Chat isOpen={isOpen} handleClose={handleClick} />
    </div>
  );
}
