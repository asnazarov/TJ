import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import {Button, Divider, TextField} from "@mui/material";
import {FC} from "react";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {LoginFormSchema} from "../../../utils/shemas/loginValidation";


interface LoginFormProps {
  onOpenRegister: () => void
  onBack: () => void
}

const LoginForm: FC<LoginFormProps> = (props) => {

  // const form = useForm({
  //   resolver: yupResolver(LoginFormSchema)
  // });
  //
  // const onSubmit = (data: any) => console.log(data);

  return (
    <div>
      <p className={'d-flex align-center cu-p mb-10'} onClick={props.onBack}>
        <ArrowBackIosNewIcon fontSize={"small"}/>
        <span>К авторизации</span></p>
      <form>
        {/*<form onSubmit={form.handleSubmit(onSubmit)}>*/}
        <TextField
          className={"mb-20"}
          name="email"
          size={"small"}
          label={"Почта"}
          variant={"outlined"}
          fullWidth
          required
        />
        <TextField
          name="password"
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
        <Button onClick={props.onOpenRegister} color={"primary"} variant={"text"}>
          Регистрация
        </Button>
      </form>
    </div>
  )
}

export default LoginForm