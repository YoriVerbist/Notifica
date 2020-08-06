$(function () {
    document.addEventListener("deviceready", onDeviceReady, false)


        $('.sidenav').sidenav(); /* https://materializecss.com/sidenav.html */

        $('.sidenav a').click(function () {
            $('.spa').hide(); // Hides all div's when nav-bar is opened
            $('#' + $(this).data('show')).show(); // Looks for what id is clicked and only shows that div
            $('.sidenav').sidenav('close'); // Closes side-nav
        });

        $('#addTask').click(function () {
            ToDo.addTask();
        });

        $('#todos').on('click', '#deleteTask', function () {
            console.log("Taak wissen");
            let id = $(this).data('task');
            ToDo.deleteTask(id);
        });

        $('#makeList').click(function () {
            Boodschappen.makeList();
            Calendar.addCalendar();
            navigator.vibrate(500);
        });

        $('#boodschappenList').on('click', '#deleteBoodschap', function() {
            console.log("Boodschap wissen");
            let id = $(this).data('boodschap');
            console.log(id);
            Boodschappen.deleteBoodschap(id);
        });

        $('#boodschappenList').on('click', '#addBoodschap', function() {
            let id = $(this).data('boodschap');
            console.log(id);
            Boodschappen.addBoodschap(id);
        });
});

function onDeviceReady() {
    console.log('Device is ready');
    ToDo.init();
    Boodschappen.init();
}