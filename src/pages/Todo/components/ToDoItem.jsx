import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Checkbox from '@mui/material/Checkbox';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Alert from '../../../global/components/Alert';
import ClientError from '../../../exceptions/ClientError';
import CONFIG from '../../../global/CONFIG';
import Todo from '../../../data/Todo';

const TodoItem = ({ item: { id, title, completed }, updateList }) => {
  const [errorMessage, setErrorMessage] = useState(null);

  const toggleCompleteStatus = () => {
    try {
      Todo.editTodo(id, { title, completed: !completed });
      updateList();
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
      Todo.deleteTodo(id);
      updateList();
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
