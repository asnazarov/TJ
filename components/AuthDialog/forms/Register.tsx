import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import {Button, Divider, TextField} from "@mui/material";
import {FC} from "react";

interface RegisterFormProps {
  onBack: () => void
}


const RegisterForm: FC<RegisterFormProps> = (props) => {

  return (
    <div>
      <p className={'d-flex align-center cu-p mb-10'} onClick={props.onBack}>
        <ArrowBackIosNewIcon fontSize={"small"}/>
        <span>К авторизации</span></p>
      <form>
        <TextField
          className={"mb-20"}
          size={"small"}
          label={"Имя и фамилия"}
          variant={"outlined"}
          fullWidth
          required
        />
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
          Зарегистрироваться
        </Button>
        <Button onClick={props.onBack} color={"primary"} variant={"text"}>
          Войти
        </Button>
      </form>
    </div>
  )
}

export default RegisterForm