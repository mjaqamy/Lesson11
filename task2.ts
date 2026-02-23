// Написать функцию, которая отправляет запрос и выводит результат в консоль, в случае ошибки возвратить null
// Нужны только данные с completed === true
// Добавить логи по этапам
// Добавить искусственную задержку в две секунду
// https://jsonplaceholder.typicode.com/todos
const timer = (time: number) => {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(1);
    }, time * 1000),
  );
};

type ToDos = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}[];
const getToDos = async () => {
  console.log("start fetch...");
  await timer(2);
  const data = await fetch("https://jsonplaceholder.typicode.com/todos");
  if (data.ok) {
    console.log("start getdata...");
    await timer(2);
    const result: ToDos = await data.json();
    return result.filter((value) => value.completed);
  }
  return null;
};

getToDos()
  .then((res) => {
    console.log(res);
  })
  .catch((error) => console.log(error));
