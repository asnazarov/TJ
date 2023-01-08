import {Divider, Paper, Tab, Tabs, Typography} from "@mui/material";
import Comments from "../Comment";
import {FC, useState} from "react";
import {CommentType} from "../SideComments";
import AddCommentForm from "../AddCommentForm";
//@ts-ignore
import data from '../../data'

const PostComments: FC = () => {
  const [activeTab, setActiveTab] = useState(0)
const comments = data.comments[activeTab ? 'new' : 'popular']

  return (
    <Paper elevation={0} className={"mt-40 p-30"}>
      <div className={'container'}>
        <Typography variant={"h6"} className={"mb-20"}>
          42 комментария
        </Typography>
        <Tabs onChange={(_, newValue) => setActiveTab(newValue)} className={"mt-20"} value={activeTab}
              indicatorColor={"primary"} textColor={"primary"}>
          <Tab label={"Популярные"}/>
          <Tab label={"По порядку"}/>
        </Tabs>
        <Divider/>
        <AddCommentForm/>
        <div className={"mb-20"}/>
        {
          comments?.map((obj: CommentType) =>
            <Comments key={obj.id} item={obj}/>)
        }
      </div>
    </Paper>
  )
}

export default PostComments