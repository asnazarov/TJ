import {Button} from "@mui/material";
import {FC} from "react";


interface MainFormProps {
  onOpenLogin: () => void
}

const MainForm: FC<MainFormProps> = (props) => {


  return (
    <>
      <div>
        <Button className={'mb-15'} variant={"outlined"} fullWidth>В контакте</Button>
        <Button className={'mb-15'} variant={"outlined"} fullWidth>Google</Button>
        <Button onClick={props.onOpenLogin} className={'mb-15'} variant={"outlined"} fullWidth>Через
          почту</Button>
      </div>
      <div className={'d-flex justify-between'} style={{width: '100%'}}>
        <Button className={'mb-15 mr-10'} variant={"outlined"} fullWidth>Facebook</Button>
        <Button className={'mb-15 mr-10'} variant={"outlined"} fullWidth>Twitter</Button>
        <Button className={'mb-15'} variant={"outlined"} fullWidth>Apple</Button>
      </div>
    </>
  )
}

export default MainForm