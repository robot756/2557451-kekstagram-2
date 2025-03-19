const massive = [];

const names = [
  'Алексей', 'Борис', 'Владимир', 'Григорий', 'Дмитрий',
  'Евгений', 'Жанна', 'Зоя', 'Иван', 'Кирилл',
  'Лариса', 'Марина', 'Наталья', 'Олег', 'Павел',
  'Роман', 'Светлана', 'Татьяна', 'Ульяна', 'Фёдор',
  'Харитон', 'Цезарь', 'Чеслав', 'Эльвира', 'Юрий'
];

const textMessage = [
  'Всё отлично!',
  'В целом всё неплохо.Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают.Как можно было поймать такой неудачный момент ? !'
];

const val = function () {
  let counter = 0;
  const randomIdComment = [];
  for (let k = 23; k <= 150; k++) {
    randomIdComment.push(k);
  }

  return function closure () {
    const start = randomIdComment[counter];
    counter++;
    return start;
  };
};

const randomVal = val();

function abs() {
  for (let i = 0; i < 25; i++) {
    const randomAvatar = Math.round(Math.random() * (6 - 1) + 1);
    const randomValue = Math.round(Math.random() * (200 - 15) + 15);
    const obj = {};

    obj['id'] = i + 1;
    obj['url'] = `photos/${i + 1}.jpg`;
    obj['description'] = 'New photo today!';
    obj['likes'] = randomValue;

    const objInfo = {
      id: randomVal(),
      avatar: `img/avatar-${randomAvatar}.svg`
    };

    const randomName = names[Math.floor(Math.random() * 25)];
    const randomMessage = textMessage[Math.floor(Math.random() * textMessage.length)];

    objInfo['name'] = randomName;
    objInfo['message'] = randomMessage;
    obj['message'] = objInfo;

    massive.push(obj);
  }

  return massive;
}
