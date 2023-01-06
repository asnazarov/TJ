import {Typography, IconButton, MenuItem, Menu} from "@mui/material";
import {MoreHorizOutlined as MoreIcon} from "@mui/icons-material";
import styles from './Comment.module.scss'
import {FC, useState} from "react";
import ava from '../../assets/ava.png'


interface CommentPostProps {
  user: {
    fullname: string
  },
  text: string
}

const Comment: FC<CommentPostProps> = ({user, text}) => {

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
        <img src={ava.src} alt="ava"/>
        <b>Master Oogway</b>
        <span>5 часов</span>
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