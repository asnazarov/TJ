import ava from "./assets/ava.png";

module.exports = {
  "comments": {
    "popular": [
      {
        id: 1,
        user: {
          id: 1,
          fullname: 'Вася Пупкин',
          avatarUrl: "https://cs6.pikabu.ru/avatars/605/v605155.jpg?472147551"
        },
        text: 'Теперь, каждое утро, после кровати, я перекладываюсь туда спать еще на часок. Ну и...',
        post: {
          id: 1,
          title: 'Какая у вас дома ванна?',
        },
        createdAt: new Date().toString(),
      },
      {
        id: 2,
        user: {
          id: 1,
          fullname: 'Вася Пупкин',
          avatarUrl: "https://cs6.pikabu.ru/avatars/605/v605155.jpg?472147551"
        },
        text: 'Теперь, каждое утро, после кровати, я перекладываюсь туда спать еще на часок. Ну и...',
        post: {
          id: 1,
          title: 'Какая у вас дома ванна?',
        },
        createdAt: new Date().toString(),
      },
    ],
    "new": [
      {
        id: 3,
        user: {
          id: 2,
          fullname: 'Вася Непупкин',
          avatarUrl: "https://cs6.pikabu.ru/avatars/605/v605155.jpg?472147551"
        },
        text: 'Теперь, каждое утро, после кровати, я перекладываюсь туда спать еще на часок. Ну и...',
        post: {
          id: 1,
          title: 'Какая у вас дома ванна?',
        },
        createdAt: new Date().toString(),
      },
    ]
  }
}

// export default comments
