import MainLayout from "../../layouts/MainLayout";
import FullPost from "../../components/FullPost";
import {Divider, Paper, Tab, Tabs, Typography} from "@mui/material";
import Comments from "../../components/Comments";

export default function News() {

  return (
    <MainLayout className="mb-50" contentFullWidth>
      <FullPost/>
      <Paper elevation={0} className={"mt-40 p-30"}>
        <Typography variant={"h6"} className={"mb-20"}>
          42 комментария
        </Typography>
        <Tabs className={"mt-20"} value={0} indicatorColor={"primary"} textColor={"primary"}>
          <Tab label={"Популярные"}/>
          <Tab label={"По порядку"}/>
        </Tabs>
        <Divider/>
        <div className={"mb-20"}>
          <Comments/>
          <Comments/>
          <Comments/>
        </div>
      </Paper>
    </MainLayout>
  )
}