import {Paper, Typography} from "@mui/material";
import cat from '../../assets/cat.png'

import styles from './Post.module.scss'
import Link from "next/link";
import Image from "next/image";
import PostAction from "../PostAction";

const Post = () => {

  return (
    <Paper elevation={0} className={"p-20"} classes={{root: styles.paper}}>
      <Typography variant={'h5'} className={styles.title}>
        <Link href={'news/test-123'}>
          <a>
            Кот прилег отдохнуть в английском парке миниатюр - и стал героем шуток и фотожаб о "гигантском пушистом
            захватчике"
          </a>
        </Link>
      </Typography>
      <Typography className={"mt-10 mb-15"}>
        Пока одни не могли соотнести размеры животного и окружения, другие начали создавать апокалиптические сюжеты с
        котом в главной роли.
      </Typography>
      <Image src={cat} alt={'cat'} height={500} width={600}/>
      <PostAction/>
    </Paper>
  )
}

export default Post