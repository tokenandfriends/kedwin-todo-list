import React from 'react';
//material ui
import { withStyles } from '@material-ui/core/styles';


const styles = theme =>({
  root:{

  }
});

const ToDoList = (props) =>(
  <div>
    {
      props.List.map((item, key) =>
        <li key={key}>
          {item}
        </li>
      )
    }
  </div>
)


export default withStyles(styles)(ToDoList);
