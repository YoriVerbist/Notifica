let Boodschappen = function(){
    let _boodschappen = [];

    let _fireStore = function(){
        db.collection("Boodschappen").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                if (!_boodschappen.find((boodschap) => boodschap.id === doc.id)){
                    _boodschappen.push({...doc.data(), id: doc.id});
                }
            });

            _show();
        });

        console.log(_boodschappen);
    };

    let _show = function(){
        $('#boodschappen').empty();

        for(let i = 0; i < _boodschappen.length; i++){
            if (_boodschappen.find((boodschap) => boodschap.id === _boodschappen[i].id)) {
                let boodschap = `<li class="collection-item avatar"> 
                    <div class="title" data-task="${i}">${_boodschappen[i].Datum}</div>
                    <i class="material-icons circle red" id="deleteBoodschap" data-task="${i}">delete_forever</i>
                    </li>`;
                    console.log(_boodschappen[i].Datum);
                $('#boodschappenList').append(boodschap);
            }
        }
    };

    let addBoodschap = function(){
        let item = $('#')
    };

    let deletaBoodschap = function(){
        
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

        _fireStore();
    };

    let init = function(){
        console.log('de boodschappen app start op...');
        _fireStore();
    };

    return {
        init,
        makeList,
        addBoodschap
    };
}();