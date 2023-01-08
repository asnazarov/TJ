import styles from './SideComments.module.scss'
import {ArrowRightOutlined} from "@mui/icons-material";
import {FC, useState} from "react";
import React from 'react';
import ava from '../../assets/ava.png'
// @ts-ignore
import data from '../../data'
import CommentItem from "./CommentItem";
import clsx from "clsx";

export type CommentType = {
  id: number,
  user: {
    fullname: string,
    avatarUrl: string,
  },
  text: string,
  post: {
    title: string
  }
  createdAt: string
}

interface CommentsItemsProps {
  item: CommentType
}


const SideComments = () => {
  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    setVisible(!visible)
  }

  return (
    <div className={clsx(styles.root, !visible && styles.rotated) }>
      <h3 onClick={toggleVisible}>Комментарии <ArrowRightOutlined/></h3>

      {
       visible && data.comments.new?.map((obj: CommentType) =>
          <CommentItem key={obj.id} item={obj}/>)
      }
    </div>
  )
}


export default SideComments