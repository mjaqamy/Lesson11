// Написать функции loadTodos, которая принимает массив todo и возвращает массив id, если же запрос упал, тогда возвращает null

// Написать функции loadTodos, которая принимает массив todo и возвращает массив id, если же запрос упал, тогда возвращает null
interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
// Функция для загрузки одного todo по id
async function loadTodo(num: number): Promise<Todo | null> {
  const data = await fetch(`https://jsonplaceholder.typicode.com/todos/${num}`);

  if (data.ok) {
    console.log(`start todo with id=${num}`);
    const result: Todo = await data.json();
    return result; // возвращаем объект Todo
  }
  return null; // если запрос не удался
}

// Функция для загрузки нескольких todo
async function loadTodos(num: number[]): Promise<(number | null)[]> {
  // Преобразуем массив чисел в массив промисов, вызывая loadTodo для каждого числа
  const Promises = num.map((id) => loadTodo(id));
  // Ждём, пока все промисы завершатся
  const results = await Promise.all(Promises);
  // Преобразуем массив объектов Todo (или null) в массив id (или null)
  const ids = results.map((todo) => (todo ? todo.id : null)); // если объект есть, берём id, если объекта нет - null
  return ids; // Возвращаем массив id
}

loadTodos([1, 2, 3]).then((result) => console.log(result)); // [1, 2, 3] или [1, null, 3]
