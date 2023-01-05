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

const menu = [
  {text: 'Лента', icon: <FireIcon/>, path: '/'},
  {text: 'Сообщения', icon: <MessageIcon/>, path: '/'},
  {text: 'Рейтинг TJ', icon: <TrendingIcon/>, path: '/'},
  {text: 'Подписки', icon: <ListIcon/>, path: '/'},
]

const LeftMenu: FC = () => {

  return (
    <div className={styles.menu}>
      Left Menu
      <ul>
        {
          menu.map((obj) => (
            <li key={obj.path}>
              <Link href={obj.path}>
                <Button>
                  {obj.icon}
                  {obj.text}
                </Button>
              </Link>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default LeftMenu