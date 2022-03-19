import React from 'react';

// Package Components
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

// Configuration
import CONFIG from '../../../global/CONFIG';

// Data Handler
import Todo from '../../../data/Todo';

// Exceptions
import ClientError from '../../../exceptions/ClientError';

class AddTodo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      alertMessage: null,
      title: '',
    };

    this.toggleDialog = this.toggleDialog.bind(this);
    this.submitDialog = this.submitDialog.bind(this);
    this.setAlertMessage = this.setAlertMessage.bind(this);
  }

  setAlertMessage(message) {
    this.setState((prevState) => ({
      ...prevState,
      alertMessage: message,
    }));
  }

  toggleDialog() {
    this.setState((prevState) => ({
      ...prevState,
      open: !prevState.open,
    }));
  }

  submitDialog() {
    try {
      Todo.addTodo(this.state.title);

      this.setState((prevState) => ({
        ...prevState,
        title: '',
        alertMessage: null,
      }));

      this.toggleDialog();
      this.props.updateList();
    } catch (error) {
      if (error instanceof ClientError) {
        this.setAlertMessage(error.message);
        return;
      }

      // eslint-disable-next-line no-console
      console.log(error);
      this.setAlertMessage(CONFIG.DEFAULT_ERROR_MESSAGE);
    }
  }

  render() {
    return (
      <div className="absolute right-4 bottom-4">
        <Container
          maxWidth="xl"
          sx={{
            display: 'flex', justifyContent: 'end', alignItems: 'end', height: '100%',
          }}
        >
          <Fab color="warning" aria-label="add" onClick={this.toggleDialog}>
            <AddIcon />
          </Fab>
        </Container>

        <Dialog open={this.state.open} onClose={this.toggleDialog}>
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
              value={this.state.title}
              onChange={(event) => {
                this.setState((prevState) => ({
                  ...prevState,
                  title: event.target.value,
                }));
              }}
            />
            {this.state.alertMessage && (
              <DialogContentText>
                <Alert severity="error">{this.state.alertMessage}</Alert>
              </DialogContentText>
            )}
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => {
                this.setState((prevState) => ({
                  ...prevState,
                  title: '',
                  alertMessage: null,
                }));

                this.toggleDialog();
              }}
            >
              Cancel
            </Button>
            <Button onClick={this.submitDialog}>Add</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default AddTodo;
