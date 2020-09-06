import React from 'react'
import { List,ListItem,ListItemText,ListItemAvatar,Avatar } from '@material-ui/core';
import  "./Todo.css";


function Todo({index,text}) {
    return (
        <List className="todo__list">
            <ListItem>
                <ListItemAvatar>
                    {/* <Avatar> */}
                        {/* <ImageIcon/> */}
                    {/* </Avatar> */}

                </ListItemAvatar>
                <ListItemText primary={text} secondary="Dummy Deadline ⏲ "/> 
            </ListItem>
            {/* <li key={index}>{text}</li> */}
        </List>
    )
}

export default Todo
