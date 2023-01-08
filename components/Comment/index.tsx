import {Typography, IconButton, MenuItem, Menu} from "@mui/material";
import {MoreHorizOutlined as MoreIcon} from "@mui/icons-material";
import styles from './Comment.module.scss'
import {FC, useState} from "react";
import {CommentType} from "../SideComments";


interface CommentPostProps {
  item: CommentType
}

const Comment: FC<CommentPostProps> = ({item}) => {

  const [anchorlEL, setAnchorlEl] = useState(null)

  const handleClick = (event: any) => {
    setAnchorlEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorlEl(null)
  }

  return (
    <div className={styles.comment}>
      <div className={styles.commentInfo}>
        <img src={item.user.avatarUrl} alt="ava"/>
        <b>{item.user.fullname}</b>
        {/*<span>{item.createdAt}</span>*/}
      </div>
      <Typography className={styles.text}>
        Суперджет это ад адский, два раза летела и два раза прощалась с жизнью. Трясет хуже чем в копейке по разъебаной
        дороге.
      </Typography>
      <span className={styles.replyBtn}>Ответить</span>
      <IconButton onClick={handleClick}>
        <MoreIcon/>
      </IconButton>
      <Menu
        anchorEl={anchorlEL}
        elevation={2}
        open={Boolean(anchorlEL)}
        onClose={handleClose}
        keepMounted
      >
        <MenuItem onClick={handleClose}>Удалить</MenuItem>
        <MenuItem onClick={handleClose}>Редактировать</MenuItem>
      </Menu>
    </div>
  )
}

export default Comment