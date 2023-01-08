import React, {FC, useState} from "react";
import styles from "./SideComments.module.scss";
import ava from "../../assets/ava.png";
import {CommentType} from "./index";


interface CommentsItemsProps {
  item: CommentType
}

const CommentItem: FC<CommentsItemsProps> = ({item}) => {

  return (
    <div className={styles.commentItem}>
      <div className={styles.userInfo}>
        <img src={ava.src} alt=""/>
        <a href="#">
          <b>{item.user.fullname}</b>
        </a>
      </div>
      <p className={styles.text}>{item.text}</p>
      <a href="#">
        <span className={styles.postTitle}>{item.post.title}</span>
      </a>
    </div>
  )
}

export default CommentItem