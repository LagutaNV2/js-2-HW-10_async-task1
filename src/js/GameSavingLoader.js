import read from './reader.js';
import json from './parser.js';
import GameSaving from './GameSaving.js';

export default class GameSavingLoader {
  // Метод load загружает данные, парсит их и возвращает объект GameSaving.
  static load() {
    return read()
      .then((data) => json(data)) // Парсим ArrayBuffer в JSON-строку
      .then((parsedData) => {
        const parsedObject = JSON.parse(parsedData); // Конвертируем строку в объект
        // Создаем экземпляр GameSaving на основе распарсенных данных
        return new GameSaving(
          parsedObject.id,
          parsedObject.created,
          parsedObject.userInfo
        );
      });
  }
}
