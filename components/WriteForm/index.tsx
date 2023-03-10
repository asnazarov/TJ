import {FC, useEffect} from "react";
import {Button, Input} from "@mui/material";
import styles from './WriteForm.module.scss'
import dynamic from "next/dynamic";
import {TextsmsOutlined as MessageIcon} from "@mui/icons-material";
// import Editor from "../Editor";

// const Editor = dynamic(() => import('../Editor').then(m => m.Editor), {ssr: false})
const Editor = dynamic(() => import('../Editor').then(m => m.Editor), {ssr: false})


interface WriteFormProps {
  title?: string
}

const WriteForm: FC<WriteFormProps> = ({title}) => {

  return (
    <div>
      <Input classes={{root: styles.titleField}} placeholder={'Заголовок'} defaultValue={title}/>
      {/*<div className={styles.editor}>*/}
        <Editor/>
      {/*</div>*/}
      <Button style={{height: 42}} variant={"contained"} color={"primary"}>
        <MessageIcon className={"mr-10"}/>
        Опубликовать
      </Button>
    </div>
  )
}

export default WriteForm