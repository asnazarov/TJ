import styles from './SideComments.module.scss'
import {ArrowRightOutlined} from "@mui/icons-material";
import {FC} from "react";
import ava from '../../assets/ava.png'


const items = [
  {
    user: {
      fullName: 'Вася Пупкин'
    },
    text: 'Теперь, каждое утро, после кровати, я перекладываюсь туда спать еще на часок. Ну и...',
    post: {
      title: 'Какая у вас дома ванна?',
    }
  },
  {
    user: {
      fullName: 'Вася Пупкин'
    },
    text: 'Теперь, каждое утро, после кровати, я перекладываюсь туда спать еще на часок. Ну и...',
    post: {
      title: 'Какая у вас дома ванна?',
    }
  },
  {
    user: {
      fullName: 'Вася Пупкин'
    },
    text: 'Теперь, каждое утро, после кровати, я перекладываюсь туда спать еще на часок. Ну и...',
    post: {
      title: 'Какая у вас дома ванна?',
    }
  },
]


interface CommentsItemsProps {
  user: {
    fullName: string
  },
  text: string,
  post: {
    title: string
  }
}

const CommentItem: FC<CommentsItemsProps> = ({user, text, post}) => {

  return (
    <div className={styles.commentItem}>
      <div className={styles.userInfo}>
        <img src={ava.src} alt=""/>
        <a href="#">
          <b>{user.fullName}</b>
        </a>
      </div>
      <p className={styles.text}>{text}</p>
      <a href="#">
        <span className={styles.postTitle}>{post.title}</span>
      </a>
    </div>
  )
}


const SideComments = () => {

  return (
    <div className={styles.root}>
      <h3>
        Комментарии <ArrowRightOutlined/>
      </h3>
      {
        items.map(obj => (
          <CommentItem {...obj} />
        ))
      }
    </div>
  )
}


export default SideComments