import {Button, Dialog, DialogContent, DialogContentText, Divider, TextField, Typography} from "@mui/material";
import styles from './AuthDialog.module.scss'
import {FC, useState} from "react";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Login from "./forms/Login";
import Register from "./forms/Register";
import Main from "./forms/Main";
import LoginForm from "./forms/Login";
import RegisterForm from "./forms/Register";
import MainForm from "./forms/Main";

interface AuthDialogType {
  onClose: () => void
  visible: boolean
}

const AuthDialog: FC<AuthDialogType> = ({onClose, visible}) => {
  const [formType, setFormType] = useState<'main' | 'login' | 'register'>('main')

  return (
    <Dialog
      open={visible}
      onClose={onClose}
      aria-labelledby="responsive-dialog-title"
      maxWidth={'xs'}
      fullWidth
    >
      <DialogContent style={{padding: '20px 60px'}}>
        <DialogContentText>
          <Typography variant={'h4'}
                      className={'mb-20'}>{formType === "main" ? 'Вход в TJ' : 'Вход через почту'}</Typography>
          {formType === "main" && <MainForm onOpenLogin={() => setFormType("login")}/>}
          {formType === "login" &&
            <LoginForm onOpenRegister={() => setFormType("register")} onBack={() => setFormType("main")}/>}
          {formType === "register" && <RegisterForm onBack={() => setFormType("login")}/>}
        </DialogContentText>
      </DialogContent>
    </Dialog>
  )
}

export default AuthDialog