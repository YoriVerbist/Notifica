let Calendar = function(){
    let init = function(){
        console.log("Calendar is geladen");
    };

    let addCalendar = function(){
        const date = $('#date').val();
        const startDate = new Date(date + "T00:00:00");
        const endDate = _addDays(date, 1);
        let title = "Boodschappen";
        let eventLocation = "Winkel";
        let notes = "Boodschappen";
        let success = function(message) { alert("Success: " + JSON.stringify(message)); };
        let error = function(message) { alert("Error: " + message); };
        console.log(startDate);
        
        window.plugins.calendar.createEvent(title, eventLocation, notes, startDate, endDate, success, error);
    };

    let _addDays = function(date, days){
        let result = new Date(date + "T00:00:00");
        result.setDate(result.getDate() + days);
        return result;
    };

    return {
        init,
        addCalendar
    };
}();