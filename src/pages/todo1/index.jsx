import React from 'react';
// Configuration
import CONFIG from '../../global/CONFIG';

// Global Component
import Alert from '../../global/components/Alert';

// Page Component
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

// Data Handler
import Todo from '../../data/Todo';

// Exceptions
import ClientError from '../../exceptions/ClientError';

class Todos extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
      errorMessage: null,
    };

    this.updateList = this.updateList.bind(this);
    this.setErrorMessage = this.setErrorMessage.bind(this);
  }

  componentDidMount() {
    try {
      this.updateList();
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

  setErrorMessage(message) {
    this.setState((prevState) => ({
      ...prevState,
      errorMessage: message,
    }));
  }

  updateList() {
    this.setState((prevState) => ({
      ...prevState,
      list: Todo.getTodoList(),
    }));
  }

  render() {
    return (
      <div className="flex flex-col items-center px-4">
        <h1 className="text-4xl font-bold mt-6 mb-8">To Do List</h1>

        <TodoList list={this.state.list} updateList={this.updateList} />

        <AddTodo
          updateList={this.updateList}
        />

        <Alert
          title={CONFIG.DEFAULT_ERROR_TITLE}
          message={this.state.errorMessage}
          setMessage={this.setErrorMessage}
        />
      </div>
    );
  }
}

export default Todos;
