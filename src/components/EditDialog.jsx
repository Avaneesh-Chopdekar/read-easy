import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const EditDialog = ({ openDialog, setOpenDialog, text, setText }) => {
  return (
    <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
      <DialogTitle>Edit Text</DialogTitle>
      <DialogContent>
        <TextField
          multiline
          placeholder="Type Something..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setText("")}>Clear</Button>
        <Button onClick={() => setOpenDialog(false)} autoFocus>
          Done
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditDialog;
