import {Button} from "@mui/material";
import {
  CheckOutlined as CheckIcon,
  AddOutlined as AddIcon,
} from "@mui/icons-material";
import styles from './FollowButton.module.scss'
import {useState} from "react";

const FollowButton = () => {
  const [followed, setFollowed] = useState(false)

  return (
    <Button
      onClick={() => setFollowed(!followed)}
      variant={"contained"}
      style={{minWidth: 30, width: 35, height: 30}}
      {...!followed ? <AddIcon/> : <CheckIcon style={{fontSize: 20, color: '#2ea83a'}}/>}
    >

    </Button>
  )
}

export default FollowButton