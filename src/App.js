import React, { Component } from 'react';
import './App.css';
//material ui
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
//components
import ToDoList from './toDoList';

const styles = theme =>({
  root:{

  },
  button:{
    marginTop: '20px'
  }
});

class App extends Component {
  state={
    todo: [],
    item: ''
  }
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleAddItem = (newItem) =>{
    this.state.todo.push(newItem);
    this.setState({todo: this.state.todo});
    this.state.item = '';
  }

  render() {
    const {classes} = this.props;
    const {todo, item} = this.state;

    return (
      <div className="App">
        <Typography component="h2" variant="h1" gutterBottom>
          To Do List.
        </Typography>
        <TextField
          id="add-todo"
          label="Item"
          className={classes.textField}
          value={item}
          onChange={this.handleChange('item')}
          margin="normal"
        />

        <Button onClick={() => this.handleAddItem(item)} type="submit"variant="contained" color="primary" className={classes.button}>
          Add
        </Button>
        <ToDoList List={todo}/>
      </div>
    );
  }
}


export default withStyles(styles)(App);
