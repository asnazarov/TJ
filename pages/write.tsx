import {FC} from "react";
import {NextPage} from "next";
import {TextField} from '@mui/material';
import MainLayout from "../layouts/MainLayout";
import WriteForm from "../components/WriteForm";

interface WritePageProps {

}

const WritePage: NextPage = () => {

  return (
    <MainLayout className={'main-layout-white'} hideComments hideMenu>
      <WriteForm />
    </MainLayout>
  )
}

export default WritePage