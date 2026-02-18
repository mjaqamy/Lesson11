/* eslint-disable @typescript-eslint/no-unused-vars */
// Написать функцию, которая отправляет запрос и выводит результат в консоль, в случае ошибки возвратить null
// Нужны только данные с completed === true
// Добавить логи по этапам
// Добавить искусственную задержку в две секунду
// https://jsonplaceholder.typicode.com/todos

type Data = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}[];
