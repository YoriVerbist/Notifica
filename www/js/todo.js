let ToDo = function(){
    let _todos = [];

    let _setLocalStorage = function(){
        // Get all the todos that are already stored in local storage
        localStorage.setItem('todo', JSON.stringify(_todos));  // localStorage.setItem('key', 'value')
        _show();
    };

    let _show = function(){
        return false;
    };

    let addTask = function(){
        console.log("Taak toevoegen todo");

        // Taak ophalen
        let task = $('#task');


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