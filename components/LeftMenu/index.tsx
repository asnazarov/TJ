import {Button} from "@mui/material";
import {
  WhatshotOutlined as FireIcon,
  SmsOutlined as MessageIcon,
  TrendingUpOutlined as TrendingIcon,
  FormatListBulletedOutlined as ListIcon
} from "@mui/icons-material";

import styles from './LeftMenu.module.scss'
import {FC} from "react";
import Link from "next/link";
import {useRouter} from "next/router";

const menu = [
  {text: 'Лента', icon: <FireIcon/>, path: '/'},
  {text: 'Сообщения', icon: <MessageIcon/>, path: '/messages'},
  {text: 'Рейтинг TJ', icon: <TrendingIcon/>, path: '/rating'},
  {text: 'Подписки', icon: <ListIcon/>, path: '/follows'},
]

const LeftMenu: FC = () => {

  const router = useRouter()
  console.log(router)

  return (
    <nav className={styles.menu}>
      <ul>
        {
          menu.map((obj, index) => (
            <li key={index}>
              <Link href={obj.path}>
                <Button variant={ obj.path === router.asPath ? "contained" : "text"}>
                  {obj.icon}
                  {obj.text}
                </Button>
              </Link>
            </li>
          ))
        }
      </ul>
    </nav>
  )
}

export default LeftMenu