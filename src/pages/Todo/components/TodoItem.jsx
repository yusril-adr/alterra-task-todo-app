import React from 'react';

// Package Components
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Checkbox from '@mui/material/Checkbox';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

// Global Components
import Alert from '../../../global/components/Alert';

// Configuration
import CONFIG from '../../../global/CONFIG';

// Data Handler
import Todo from '../../../data/Todo';

// Exceptions
import ClientError from '../../../exceptions/ClientError';

class TodoItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = { errorMessage: null };

    this.setErrorMessage = this.setErrorMessage.bind(this);
    this.deleteHandler = this.deleteHandler.bind(this);
    this.toggleCompleteStatus = this.toggleCompleteStatus.bind(this);
  }

  setErrorMessage(message) {
    this.setState(() => ({
      errorMessage: message,
    }));
  }

  deleteHandler() {
    try {
      Todo.deleteTodo(this.props.item.id);
      this.props.updateList();
    } catch (error) {
      if (error instanceof ClientError) {
        this.setErrorMessage(error.message);
        return;
      }

      // eslint-disable-next-line no-console
      console.log(error);
      this.setErrorMessage(CONFIG.DEFAULT_ERROR_MESSAGE);
    }
  }

  toggleCompleteStatus() {
    try {
      Todo.editTodo(
        this.props.item.id,
        {
          title: this.props.item.title,
          completed: !this.props.item.completed,
        },
      );
      this.props.updateList();
    } catch (error) {
      if (error instanceof ClientError) {
        this.setErrorMessage(error.message);
        return;
      }

      // eslint-disable-next-line no-console
      console.log(error);
      this.setErrorMessage(CONFIG.DEFAULT_ERROR_MESSAGE);
    }
  }

  render() {
    return (
      <Card>
        <CardContent className="flex items-center justify-between">
          <div className="flex items-center max-w-xs lg:max-w-240px">
            <Checkbox checked={this.props.item.completed} onClick={this.toggleCompleteStatus} />
            <p className={`break-words ${this.props.item.completed ? 'line-through' : ''}`}>{this.props.item.title}</p>
          </div>

          <Tooltip title="Delete">
            <Button sx={{ color: 'black', padding: 0, minWidth: 0 }} onClick={this.deleteHandler}>
              <DeleteIcon />
            </Button>
          </Tooltip>
        </CardContent>

        <Alert
          title={CONFIG.DEFAULT_ERROR_TITLE}
          message={this.state.errorMessage}
          setMessage={this.setErrorMessage}
        />
      </Card>
    );
  }
}

export default TodoItem;
