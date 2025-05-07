const todolist = [{
  name :'add',
  dueDate: '2024-05-03'}];

function renderTodoList() {
  let todolisthtml = '';
  for (let i = 0; i < todolist.length; i++) {
    const todoObject = todolist[i];
    const{name,dueDate}=todoObject;
   // const name = todoObject.name;
   // const dueDate = todoObject.dueDate;
    const html = 
    `<div>${name}</div>
      <div>${dueDate}</div>
      <button onclick="
      todolist.splice(${i},1);
      renderTodoList();
      ">Delete</button>
      `;
    todolisthtml += html;
  }
  document.querySelector('.js-todo-list').innerHTML = todolisthtml;
}

renderTodoList();

function addtodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;
  const dateinputElement=document.querySelector('.js-due-date');
  const dueDate=dateinputElement.value;
    todolist.push({
      name:name,
      dueDate:dueDate
});
    inputElement.value = '';
    renderTodoList();
  }

