import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.scss'
import MainLayout from "../layouts/MainLayout";
import Post from "../components/Post";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <MainLayout>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </MainLayout>
    </>
  )
}
