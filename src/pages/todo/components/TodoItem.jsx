import { useState } from 'react';
import { useDispatch } from 'react-redux';

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

// Actions
import { editTodo, deleteTodo } from '../../../data/services/redux/slices/TodoSlice';

// Exceptions
import ClientError from '../../../exceptions/ClientError';

const TodoItem = ({ item: { id, title, completed } }) => {
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const toggleCompleteStatus = () => {
    try {
      dispatch(editTodo({ id, title, completed: !completed }));
    } catch (error) {
      if (error instanceof ClientError) {
        setErrorMessage(error.message);
        return;
      }

      // eslint-disable-next-line no-console
      console.log(error);
      setErrorMessage(CONFIG.DEFAULT_ERROR_MESSAGE);
    }
  };

  const deleteHandler = () => {
    try {
      dispatch(deleteTodo(id));
    } catch (error) {
      if (error instanceof ClientError) {
        setErrorMessage(error.message);
        return;
      }

      // eslint-disable-next-line no-console
      console.log(error);
      setErrorMessage(CONFIG.DEFAULT_ERROR_MESSAGE);
    }
  };

  return (
    <Card>
      <CardContent className="flex items-center justify-between">
        <div className="flex items-center max-w-xs lg:max-w-240px">
          <Checkbox checked={completed} onClick={toggleCompleteStatus} />
          <p className={`break-words ${completed ? 'line-through' : ''}`}>{title}</p>
        </div>

        <Tooltip title="Delete">
          <Button sx={{ color: 'black', padding: 0, minWidth: 0 }} onClick={deleteHandler}>
            <DeleteIcon />
          </Button>
        </Tooltip>
      </CardContent>

      <Alert
        title={CONFIG.DEFAULT_ERROR_TITLE}
        message={errorMessage}
        setMessage={setErrorMessage}
      />
    </Card>
  );
};

export default TodoItem;
