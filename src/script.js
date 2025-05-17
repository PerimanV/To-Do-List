const form = document.getElementById('form');
const input = document.getElementById('input'); 
const list = document.getElementById('list');


form.addEventListener('submit', (e) => {
    e.preventDefault();

    const todo = input.value;

    if (todo) {
        const todoElement = document.createElement('li');
        todoElement.innerText = todo;
        list.appendChild(todoElement);

        input.value = '';

        todoElement.addEventListener('click', () => {
            todoElement.classList.toggle('completed');
        });

        todoElement.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            todoElement.remove();
        });

    }
    
});