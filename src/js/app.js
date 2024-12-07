// TODO: write your code here
// реализованы функции-заглушки:    эмулируют чтение файла и преобразование прочитанного в json.
// задача - реализовать класс GameSavingLoader с методом load, который загружает данные (с помощью функции read),
// парсит их (с помощью функции json()) и создаёт объект типа GameSaving

import GameSavingLoader from './GameSavingLoader.js';

GameSavingLoader.load()
  .then((saving) => {
    console.log('Game saving loaded:', saving);
  })
  .catch((error) => {
    console.error('Error loading game saving:', error);
  });
