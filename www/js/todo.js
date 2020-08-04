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
            <div class="title" data-task="${i}">${_todos[i]}</div>
            <i class="material-icons circle red" id="deleteTask" data-task="${i}">delete_forever</i>
            </li>`;
        
            $('#todos').append(task);
        }
    };

    let addTask = function(){
        // Taak ophalen
        let task = $('#task').val();


        _todos.push(task);
        _setLocalStorage();
    };

    let deleteTask = function(id){
        _todos.splice(id, 1);
        _setLocalStorage();
    };

    let init = function(){
        console.log('de todo app start op...');
    };

    return {
        init: init,
        addTask: addTask,
        deleteTask : deleteTask,
        // editTask : editTask
    };
}();