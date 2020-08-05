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
        $('#boodschappenList').empty();

        for(let i = 0; i < _boodschappen.length; i++){
            if (_boodschappen.find((boodschap) => boodschap.id === _boodschappen[i].id)) {
                let boodschap = `<li class="collection-item avatar"> 
                    <div class="title" data-boodschap="${_boodschappen[i].id}">${_boodschappen[i].Datum}</div>
                    <i class="material-icons circle red" id="deleteBoodschap" data-boodschap="${_boodschappen[i].id}">delete_forever</i>
                    <input type="text" name="boodschap" id="${_boodschappen[i].id}">
                    <i class="material-icons circle green" id="addBoodschap" data-boodschap="${_boodschappen[i].id}">note_add</i>
                    </a></button></li>`;
                $('#boodschappenList').append(boodschap);
            }
        }
    };

    let addBoodschap = function(id){
        let item = $('#' + id).val();
        
        db.collection("Boodschappen").doc(id).update({
            items: [item]
        })
        .then(function() {
            console.log("Document successfully written!");
            _fireStore();
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
        });
    };

    let deleteBoodschap = function(id){

        let index = _boodschappen.findIndex((item) => item.id === id);
        db.collection("Boodschappen").doc(id).delete().then(function() {
            console.log("Document successfully deleted!");
            _boodschappen.splice(index, 1);
            _fireStore();
        }).catch(function(error) {
            console.error("Error removing document: ", error);
        });
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
        addBoodschap,
        deleteBoodschap
    };
}();