import {Paper, Button, IconButton, Avatar,} from "@mui/material";
import logo from '../../assets/logo.png'
import ava from '../../assets/ava.png'
import {
  SearchOutlined as SearchIcon,
  CreateOutlined as PenIcon,
  SmsOutlined as MessageIcon,
  Menu as MenuIcon,
  ExpandMoreOutlined as ArrowButton,
  NotificationsNoneOutlined as NotificationIcon
} from "@mui/icons-material";

import styles from './Header.module.scss'
import {FC} from "react";
import Link from "next/link";
import Image from "next/image";

const Header: FC = () => {

  return (
    <Paper classes={{root: styles.root}} elevation={0}>
      <div className={"d-flex align-center"}>
        <IconButton>
          <MenuIcon/>
        </IconButton>
        <Link href={'/'}>
          <a>
            <Image src={logo} alt={'logo'} height={30} width={30}/>
          </a>
        </Link>
        <div className={styles.searchBlock}>
          <SearchIcon/>
          <input placeholder={'Поиск...'}/>
        </div>
        <Button variant={"contained"} className={styles.penButton}>
          Новая запись
        </Button>
      </div>

      <div className={'d-flex align-center'}>
        <IconButton>
          <MessageIcon/>
        </IconButton>
        <IconButton>
          <NotificationIcon/>
        </IconButton>
        <Link href={'/profile/1'}>
          <a className={'d-flex align-center'}>
            <Avatar
              className={styles.avatar}
              alt={'logo'}
              src={ava.src}
            />
            <ArrowButton/>
          </a>
        </Link>
      </div>

    </Paper>
  )
}

export default Header