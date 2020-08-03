$(function(){
    document.addEventListener("deviceready", onDeviceReady, false);

    $('.sidenav').sidenav();	/* https://materializecss.com/sidenav.html */

    $('.sidenav a').click(function () {
        $('.spa').hide();                           // Hides all div's when nav-bar is opened
        $('#' + $(this).data('show')).show();       // Looks for what id is clicked and only shows that div
        $('.sidenav').sidenav('close');             // Closes side-nav
    });

    $('#addTask').click(function(){
        ToDo.addTask();
    });

    $('#deleteTask').click(function(){
        console.log("Taak wissen");
        let id = $(this.data('task'));
        console.log(id);
        ToDo.deleteTask(id);
    });
});

function onDeviceReady() {
    console.log('Device is ready');
    ToDo.init();
}