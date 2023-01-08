import {Button, Input} from "@mui/material";
import styles from './AddCommentForm.module.scss'
import {useState} from "react";
import {TextsmsOutlined as MessageIcon} from "@mui/icons-material";

interface AddCommentFormProps {

}

const AddCommentForm = () => {

  const [clicked, setClicked] = useState(false)
  const [text, setText] = useState('')

  const onAddComment = () => {
    setClicked(false)
    setText('')
  }

  return (
    <div className={styles.form}>
      <Input onChange={(e) => setText(e.target.value)} value={text} onFocus={() => setClicked(true)} classes={{root: styles.fieldRoot}} minRows={clicked ? 4 : 1}
             placeholder={'Написать комментарий'} fullWidth multiline/>
      {
        clicked && <Button onClick={onAddComment} className={styles.addButton} style={{height: 42}} variant={"contained"} color={"primary"}>
          <MessageIcon className={"mr-10"}/>
          Опубликовать
        </Button>
      }

    </div>
  )
}

export default AddCommentForm