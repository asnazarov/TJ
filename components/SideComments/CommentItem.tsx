import React, {FC, useState} from "react";
import styles from "./SideComments.module.scss";
import ava from "../../assets/ava.png";
import {CommentType} from "./index";
import Link from "next/link";


interface CommentsItemsProps {
  item: CommentType
}

const CommentItem: FC<CommentsItemsProps> = ({item}) => {

  return (
    <div className={styles.commentItem}>
      <div className={styles.userInfo}>
        <img src={ava.src} alt="ava"/>
        <Link href={`/profile/${item.user.id}`}>
          <b>{item.user.fullname}</b>
        </Link>
      </div>
      <p className={styles.text}>{item.text}</p>
      <Link href={`/news/${item.user.id}`}>
        <span className={styles.postTitle}>{item.post.title}</span>
      </Link>
    </div>
  )
}

export default CommentItem