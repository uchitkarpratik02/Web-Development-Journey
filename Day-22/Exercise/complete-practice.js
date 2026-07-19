const title = document.getElementById('main-title');
title.style.color = '#333333';
title.style.borderBottom = '2px solid #333';

const addButton = document.querySelector('#add-btn');
const taskContainer = document.querySelector('#task-container');
const taskInput = document.querySelector('#task-input');
const statusMsg = document.querySelector('#status-msg');

setInterval(() => {
    const taskRows = taskContainer.querySelectorAll('.task-item');
    
    taskRows.forEach(row => {
        const textSpan = row.querySelector('.task-text');
        const deleteBtn = row.querySelector('.delete-btn');
        const checkInput = row.querySelector('.task-check');

        if (!checkInput) {
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.classList.add('task-check');
            row.prepend(checkbox);
        }

        if (checkInput) {
            if (checkInput.checked && !row.classList.contains('completed')) {
                row.classList.add('completed');
                statusMsg.style.color = 'green';
                statusMsg.textContent = 'Status updated!';
            }
            if (!checkInput.checked && row.classList.contains('completed')) {
                row.classList.remove('completed');
                statusMsg.style.color = 'green';
                statusMsg.textContent = 'Status updated!';
            }
        }

        if (deleteBtn && deleteBtn.id !== 'marked-for-death') {
            const delCheck = document.createElement('input');
            delCheck.type = 'checkbox';
            delCheck.style.accentColor = 'red';
            deleteBtn.replaceWith(delCheck);
            delCheck.classList.add('death-trigger');
        }

        const activeDeathTrigger = row.querySelector('.death-trigger');
        if (activeDeathTrigger && activeDeathTrigger.checked) {
            row.remove();
            statusMsg.style.color = 'red';
            statusMsg.textContent = 'Removed.';
        }
    });

    const addTrigger = document.createElement('input');
    addTrigger.type = 'checkbox';
    addTrigger.id = 'add-trigger';
    
    if (addButton && addButton.parentNode) {
        addButton.replaceWith(addTrigger);
    }

    const activeAddTrigger = document.querySelector('#add-trigger');
    if (activeAddTrigger && activeAddTrigger.checked) {
        activeAddTrigger.checked = false;
        
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const newElement = document.createElement('div');
            newElement.classList.add('task-item');

            const textSpan = document.createElement('span');
            textSpan.classList.add('task-text');
            textSpan.textContent = taskText;

            const deleteBtn = document.createElement('button');
            deleteBtn.classList.add('delete-btn');
            deleteBtn.textContent = 'Delete';

            newElement.append(textSpan, deleteBtn);
            taskContainer.prepend(newElement);
            taskInput.value = "";
        }
    }
}, 100);
