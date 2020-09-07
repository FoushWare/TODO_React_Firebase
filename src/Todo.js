import React, { useState } from 'react'
import { List, ListItem, ListItemText, ListItemAvatar, Avatar, Modal,FormControl,Input,InputLabel } from '@material-ui/core';
import "./Todo.css";
import { makeStyles } from '@material-ui/core/styles';
import EditIcon from '@material-ui/icons/Edit';

import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import db from './firebase';


const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        textAlign:'center',
        width: "700px",
    margin: "100px auto",

    },
}));


function Todo({ todo: { todo, id } }) {
    const classes = useStyles();
    const [open, setOpen] = useState(false)
    const [input, setInput] = useState(todo);
    const handleOpen = () => {
        setOpen(true);
    };
    const updateTodo = () => {
        //UPDATE THE TODO WITH THE NEW INPUT TEXT 
        db.collection('todos').doc(id).set({
            todo:input
        },{merge:true})
        setOpen(false);
    }


    return (
        <>
            <Modal open={open} onClose={e => setOpen(false)}>
                <div className={classes.paper}>
                    <h1>I am a modal</h1>
                    <FormControl>
                        <InputLabel >✍  Edit The Todo</InputLabel>
                        <Input type="text" value={input} onChange={e => setInput(e.target.value)} />

                    </FormControl>
                    <Button variant="contained"
                        color="primary" onClick={updateTodo}>Update ToDo</Button>
                </div>
            </Modal>
            <List className="todo__list" key={id}>
                <ListItem>
                    {/* <ListItemAvatar> */}
                    {/* <Avatar> */}
                    {/* <ImageIcon/> */}
                    {/* </Avatar> */}

                    {/* </ListItemAvatar> */}
                    <ListItemText primary={todo} secondary="Dummy Deadline ⏲ " />
                    <Button
                        variant="contained"
                        style={{
                            background: "#00e676",
                            color: "rgb(136 121 123)"
                        }

                        }
                        className={classes.button}
                        startIcon={<EditIcon />}
                        onClick={e => setOpen(true)}>Edit Me</Button>
                    <Button
                        variant="contained"
                        color="secondary"
                        className={classes.button}
                        startIcon={<DeleteIcon />}
                        onClick={e => db.collection('todos').doc(id).delete()}
                    >
                        Delete ❌
   </Button>


                </ListItem>
                {/* <li key={index}>{text}</li> */}
                <hr></hr>
            </List>
        </>

    )
}

export default Todo
