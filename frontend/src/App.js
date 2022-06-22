import React from 'react';
import Todos from './Todos';
import { Paper, TextField } from "@material-ui/core";
import { Checkbox, Button } from "@material-ui/core";


import './App.css';




class App extends Todos {
  state = { todos: [], currentTodo: "" };

  render() {
      const { todos } = this.state;
      return (
          <div className="App flex">
              <Paper elevation={5} className="container">
                  <div className="heading">Todo App</div>
                  <form
                      onSubmit={this.handleSubmit}
                      className="flex"
                      style={{ margin: "45px 0" }}
                  >
                      <TextField
                          variant="outlined"
                          size="small"
                          style={{ width: "90%", marginRight:'20px'}}
                          value={this.state.currentTodo}
                          required={true}
                          onChange={this.handleChange}
                          placeholder="Add New Task"
                      />
                      <Button
                          style={{ height: "50px"}}
                          color="primary"
                          variant="contained"
                          type="submit"
                      >
                          Add todo
                      </Button>
                  </form>
                  <div>
                      {todos.map((todo) => (
                          <Paper
                              key={todo._id}
                              className="flex task_container"
                          >
                              <Checkbox
                                  checked={todo.completed}
                                  onClick={() => this.handleUpdate(todo._id)}
                                  color="primary"
                              />
                              <div
                                  className={
                                      todo.completed
                                          ? "todo line_through"
                                          : "todo"
                                  }
                              >
                                  {todo.todo}
                              </div>
                              <Button
                                  onClick={() => this.handleDelete(todo._id)}
                                  color="secondary"
                              >
                                  Remove
                              </Button>
                          </Paper>
                      ))}
                  </div>
              </Paper>
          </div>
      );
  }
}

export default App;


