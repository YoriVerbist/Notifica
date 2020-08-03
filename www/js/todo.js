let ToDo = function(){
    let _todos = [];

    let _setLocalStorage = function(){
        // Get all the todos that are already stored in local storage
        localStorage.setItem('todo', JSON.stringify(_todos));
        _show();
    };

    let _show = function(){
        $('#todos').empty();

        for(let i = 0; i < _todos.length; i++) {
            let task = `<li class="collection-item avatar"> 
			<i class="material-icons circle red deleteTask" data-task="${i}">delete_forever</i>
			<div class="title" data-task="${i}" contenteditable>${_todos[i]}</div>
            </li>`;
        
            $('#todos').append(task);
        }
    };

    let addTask = function(){
        console.log("Taak toevoegen todo");

        // Taak ophalen
        let task = $('#task').val();


        _todos.push(task);
        _setLocalStorage();
    };

    let init = function(){
        console.log('de todo app start op...');
    };

    return {
        init: init,
        addTask: addTask,
        // deleteTask : deleteTask,
        // editTask : editTask
    };
}();