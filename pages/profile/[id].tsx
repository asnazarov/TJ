import MainLayout from "../../layouts/MainLayout";
import {Avatar, Button, Paper, Tab, Tabs, Typography} from "@mui/material";
import img from '../../assets/img.png'
import Link from "next/link";
import {
  SettingsOutlined as SettingsIcon,
  TextsmsOutlined as MessageIcon
} from "@mui/icons-material";
import Post from "../../components/Post";

export default function Profile() {

  return (
    <MainLayout contentFullWidth hideComments>
      <Paper className={"pl-20 pr-20 pt-20 mb-30x"}>
        <div className={"d-flex justify-between"}>
          <div>
            <Avatar
              style={{width: 120, height: 120, borderRadius: 6}}
              src={img.src}
            />
            <Typography className={"mt-10"} variant={"h4"} style={{fontWeight: "bold"}}>
              Amon Bower
            </Typography>
          </div>
          <div>
            <Link href={"profile/settings"}>
              <Button>
                <SettingsIcon/>
              </Button>
            </Link>
            <Button style={{height: 42}} variant={"contained"} color={"primary"}>
              <MessageIcon className={"mr-10"}/>
              Написать
            </Button>
          </div>
        </div>
        <div className={"d-flex mb-10 mt-10"}>
          <Typography style={{fontWeight: "bold", color: '#35AB66'}} className={"mr-15"}>
            +208
          </Typography>
          <Typography>2 подписчика</Typography>
        </div>
        <Typography>На проекте с 15 сен 2016</Typography>

        <Tabs className={"mt-20"} value={0} indicatorColor={"primary"} textColor={"primary"}>
          <Tab label={"Статьи"}/>
          <Tab label={"Комментарии"}/>
          <Tab label={"Закладки"}/>
        </Tabs>
      </Paper>
      <div className={"d-flex align-start"}>
        <div className={"mr-20 flex"}>
          <Post/>
        </div>
        <Paper style={{width: 300}} className={"p-20 mb-20"} elevation={0}>
          <b>Подписчики</b>
          <div className={"d-flex mt-15"}>
            <Avatar
              className={"mr-10"}
              src={img.src}
            />
            <Avatar
              className={"mr-10"}
              src={img.src}
            />
          </div>
        </Paper>

      </div>
    </MainLayout>
  )
}