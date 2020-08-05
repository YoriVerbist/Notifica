let Boodschappen = function(){
    let _boodschappen = [];

    let _fireStore = function(){
        db.collection("Boodschappen").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                console.log(`${doc.id} => ${doc.data()}`);
            });
        });
    };

    let _show = function(){
        $('#boodschappen').empty();

        for(let i = 0; i < _boodschappen.length; i++){
            let boodschap = `<li class="collection-item avatar"> 
            <div class="title" data-task="${i}">${_boodschappen[i]}</div>
            <i class="material-icons circle red" id="deleteTask" data-task="${i}">delete_forever</i>
            </li>`;

            $('#boodschappenList').append(boodschap);
        }
    };

    let addBoodschap = function(){
        let item = $('#')
    };

    let makeList = function(){
        let date = $('#date').val();

        db.collection("Boodschappen").add({
            Datum: date
        })
        .then(function() {
            console.log("Document successfully written!");
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
        });
    };

    let init = function(){
        console.log('de boodschappen app start op...');
    };

    return {
        init,
        makeList,
        addBoodschap
    };
}();