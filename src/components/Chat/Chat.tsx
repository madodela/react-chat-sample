import { Drawer, styled } from "@mui/material";
import { Conversation } from "../Conversation";

type ChatProps = {
  isOpen: boolean;
  handleClose: (state: boolean) => void;
};

const StyledDrawer = styled(Drawer)(() => ({
  "& .MuiDrawer-paperAnchorRight": {
    maxWidth: "40%"
  }
}));

export const Chat = ({ isOpen, handleClose }: ChatProps): JSX.Element => {
  return (
    <>
      <StyledDrawer
        anchor={"right"}
        open={isOpen}
        onClose={() => handleClose(false)}
      >
        <Conversation />
      </StyledDrawer>
    </>
  );
};
