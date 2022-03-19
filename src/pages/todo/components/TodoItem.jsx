import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

const ToDoItem = ({ item: { title, completed } }) => (
  <Card>
    <CardContent className="flex items-center justify-between">
      <div className="flex items-center max-w-xs lg:max-w-240px">
        <Checkbox checked={completed} />
        <p className={`break-words ${completed ? 'line-through' : ''}`}>{title}</p>
      </div>

      <Button sx={{ color: 'black', padding: 0, minWidth: 0 }}>
        <DeleteIcon />
      </Button>
    </CardContent>
  </Card>
);

export default ToDoItem;
