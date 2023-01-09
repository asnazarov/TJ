import {Button, Dialog, DialogContent, DialogContentText, Divider, TextField, Typography} from "@mui/material";
import styles from './AuthDialog.module.scss'
import {FC, useState} from "react";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

interface AuthDialogType {
  onClose: () => void
  visible: boolean
}

const AuthDialog: FC<AuthDialogType> = ({onClose, visible}) => {
  const [formType, setFormType] = useState<'main' | 'email'>('main')

  return (
    <Dialog
      // fullScreen={fullScreen}
      open={visible}
      onClose={onClose}
      aria-labelledby="responsive-dialog-title"
      maxWidth={'xs'}
      fullWidth
    >
      <DialogContent style={{padding: '20px 60px'}}>
        <DialogContentText>
          <Typography variant={'h4'} className={'mb-20'}>{formType === "main" ? 'Вход в TJ' : 'Вход через почту'}</Typography>
          {formType === "main" && <>
              <div>
                <Button className={'mb-15'} variant={"outlined"} fullWidth>В контакте</Button>
                <Button className={'mb-15'} variant={"outlined"} fullWidth>Google</Button>
                <Button onClick={() => setFormType('email')} className={'mb-15'} variant={"outlined"} fullWidth>Через почту</Button>
              </div>
              <div className={'d-flex justify-between'} style={{width: '100%'}}>
                <Button className={'mb-15 mr-10'} variant={"outlined"} fullWidth>Facebook</Button>
                <Button className={'mb-15 mr-10'} variant={"outlined"} fullWidth>Twitter</Button>
                <Button className={'mb-15'} variant={"outlined"} fullWidth>Apple</Button>
              </div>
            </>}
          {formType === "email" && <div>
            <p
              className={'d-flex align-center cu-p mb-10'}
              onClick={() => setFormType("main")}
            >
              <ArrowBackIosNewIcon fontSize={"small"}/>
              <span>Назад</span></p>
            <form>
              <TextField
                className={"mb-20"}
                size={"small"}
                label={"Почта"}
                variant={"outlined"}
                fullWidth
                required
              />
              <TextField
                size={"small"}
                label={"Пароль"}
                variant={"outlined"}
                fullWidth
                required
              />
              <Divider className={"mt-30 mb-20"}/>
              <Button color={"primary"} variant={"contained"}>
                Войти
              </Button>
            </form>
          </div>}

        </DialogContentText>
      </DialogContent>
    </Dialog>
  )
}

export default AuthDialog