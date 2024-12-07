// Класс GameSaving описывает структуру сохранения игры.
export default class GameSaving {
  constructor(id, created, userInfo) {
    this.id = id; // ID сохранения "id": <number>
    this.created = created; // Timestamp создания "created": <timestamp>,
    this.userInfo = userInfo; // Информация о пользователе: userInfo - вложенный объект {
                                             // "id": <number>, // user id
                                             // "name": <string>, // user name
                                             // "level": <number>, // user level
                                             // "points": <number> // user points
                                             // }
  }
}
