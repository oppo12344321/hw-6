let users = [];

function addUser() {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    users.push({ name, age });
    renderUsers();
    document.getElementById('name').value = '';
    document.getElementById('age').value = '';
}

function renderUsers() {
    const userList = document.getElementById('userList');
    userList.innerHTML = '';
    users.forEach(user => {
        const listItem = document.createElement('li');
        listItem.textContent = `Name: ${user.name}, Age: ${user.age}`;
        userList.appendChild(listItem);
    });
}
