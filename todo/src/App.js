import './App.css';
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button,TextField,Checkbox } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
// const useStyles = makeStyles((theme) => ({
//   // root: {
//   //   '& > *': {
//   //     margin: theme.spacing(1),
//   //     width: '25ch',
//   //   },
//   // },
// }));
function App() {
  const [todoData,setTodoData] = useState();
  const [todoList,setTodoList] = useState([]);
  const [checked, setChecked] = React.useState(true);

  const handleChangeCheckbox = (event) => {
    setChecked(event.target.checked);
  };
  // const classes = useStyles();
const handleOnChange = (e) => {
  let name = e.target.name;
  let value = e.target.value;
  console.log(name,value);
 setTodoData(e.target.value);
  console.log(todoData);
}
const handleOnSubmit = (e) => {
  e.preventDefault();

  setTodoList([...todoList,todoData]);}

  const handleDelete = (index) => {
    let newTodoList = [...todoList];
    newTodoList.splice(index,1);
    setTodoList(newTodoList);
  }
  return (
   
    <>
    <div >
    <TextField id="outlined-basic" label="Outlined" name="todoData" value={todoData} variant="outlined" onChange={handleOnChange} />
    <Button variant="contained" color="secondary" onClick={handleOnSubmit}>ADD</Button>
    </div>
    <div>
    {todoList.map((item,index)=>{
      return (<div>
        <Checkbox
        checked={checked}
        onChange={handleChangeCheckbox}
        inputProps={{ 'aria-label': 'primary checkbox' }}
      /> <div key={index}>{item}</div> <CloseIcon onClick={(index)=>handleDelete(index)}/></div>
      )
    } 
    )}
    </div>
    </>
  );
}

export default App;
