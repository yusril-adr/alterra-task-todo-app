import { useState } from 'react';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Alert from '@mui/material/Alert';
import ClientError from '../../../exceptions/ClientError';
import CONFIG from '../../../global/CONFIG';
import Todo from '../../../data/Todo';

const AddTodo = ({ updateList }) => {
  const [open, setOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState(null);
  const [title, setTitle] = useState('');

  const toggleDialog = () => {
    setOpen(!open);
  };

  const submitDialog = () => {
    try {
      Todo.addTodo(title);

      setTitle('');
      setAlertMessage(null);
      toggleDialog();
      updateList();
    } catch (error) {
      if (error instanceof ClientError) {
        setAlertMessage(error.message);
        return;
      }

      // eslint-disable-next-line no-console
      console.log(error);
      setAlertMessage(CONFIG.DEFAULT_ERROR_MESSAGE);
    }
  };

  return (
    <div className="absolute right-4 bottom-4">
      <Container
        maxWidth="xl"
        sx={{
          display: 'flex', justifyContent: 'end', alignItems: 'end', height: '100%',
        }}
      >
        <Fab color="warning" aria-label="add" onClick={toggleDialog}>
          <AddIcon />
        </Fab>
      </Container>

      <Dialog open={open} onClose={toggleDialog}>
        <DialogTitle>New Item</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="title"
            label="Title"
            type="text"
            fullWidth
            variant="standard"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
          {alertMessage && (
            <DialogContentText>
              <Alert severity="error">{alertMessage}</Alert>
            </DialogContentText>
          )}
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setTitle('');
              setAlertMessage(null);
              toggleDialog();
            }}
          >
            Cancel
          </Button>
          <Button onClick={submitDialog}>Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddTodo;
