import {Paper, Button, Typography} from "@mui/material";
import ava from '../../assets/ava.png'
import {
  TextsmsOutlined as MessageIcon,
  PersonAddOutlined as UserAddIcon,
} from "@mui/icons-material";

import styles from './FullPost.module.scss'
import PostAction from "../PostAction";

const FullPost = () => {

  return (
    <Paper elevation={0} className={styles.paper}>
      <div style={{margin: '0 auto', width: 680}}>
        <Typography variant={"h4"} className={styles.title}>
          Российская шахматистка Костенюк будет выступать под флагом Швейцарии
        </Typography>
        <div>
          <Typography>
            Москва. 3 января. INTERFAX.RU - Российский гроссмейстер Александра Костенюк с 2024 года будет выступать под
            флагом Швейцарии, сообщается на сайте Швейцарской федерации шахмат (FSE).
          </Typography>
          <Typography>
            Десять лет назад Костенюк получила паспорт Швейцарии, выйдя замуж за гражданина этой страны. В данный момент
            она выступает под флагом Международной шахматной федерации (ФИДЕ) из-за санкций, введенных в отношении
            российских шахматистов.
          </Typography>
          <Typography>
            Причина, по которой Костенюк будет выступать за Швейцарию не с 2023 года, носит финансовый характер. Если бы
            она сменила федерацию сейчас, FSE пришлось бы заплатить Российской шахматной федерации 10 тысяч долларов.
          </Typography>
          <Typography>
            В Швейцарии допускают, что россиянка сможет выступать и за мужскую сборную страны.
          </Typography>
          <div style={{width: 250, marginLeft: -14}}>
            <PostAction/>
          </div>
          <div className={"d-flex justify-between align-center mt-30 mb-30"}>
            <div className={styles.userInfo}>
              <img src={ava.src} alt="ava"/>
              <b>Donie Darco</b>
              <span>+1685</span>
            </div>
            <div>
              <Button variant={"contained"} className={'mr-15'}>
                <MessageIcon/>
              </Button>
              <Button variant={'contained'}>
                <UserAddIcon/>
              </Button>
              <b className={'ml-10'}>Подписаться</b>
            </div>
          </div>
        </div>
      </div>
    </Paper>
  )
}

export default FullPost