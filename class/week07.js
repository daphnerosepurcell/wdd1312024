// add event listener on enter keypess to #todoinput

document.getElementById('todoInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        const newListItem = document.createElement('li');
        newListItem.innerHTML = document.getElementById('todoInput').value;
        document.getElementById('todoInput').value = '';
        // newListItem.classList.add('beautifulListItem);
        document.getElementById('myTodos').appendChild(newListItem);
    }
});
