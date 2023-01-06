import {IconButton, Menu, MenuItem, Paper, Typography} from "@mui/material";
import {MoreVert as MoreVertIcon} from "@mui/icons-material";
import styles from './CommentPost.module.scss'
import {FC, useState} from "react";

interface CommentPostProps {
  user: {
    fullname: string
  },
  text: string,
  post: {
    title: string
  }
}

const CommentPost: FC<CommentPostProps> = ({user, post, text}) => {

  const [anchorlEL, setAnchorlEl] = useState(null)

  const handleClick = (event: any) => {
    setAnchorlEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorlEl(null)
  }


  return (
    <Paper elevation={0} className={'p-20'} classes={{root: styles.paper}}>
      <Typography variant={'h6'} className={styles.title}>
        <a href="#">{post.title}</a>
        <IconButton onClick={handleClick}>
          <MoreVertIcon/>
        </IconButton>
      </Typography>
      <Typography className={'mt-10 mb-15'}>{text}</Typography>

      <Menu
        id="simple-menu"
        anchorEl={anchorlEL}
        elevation={3}
        keepMounted
        open={Boolean(anchorlEL)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Удалить</MenuItem>
        <MenuItem onClick={handleClose}>Редактировать</MenuItem>
      </Menu>
    </Paper>
  )
}

export default CommentPost