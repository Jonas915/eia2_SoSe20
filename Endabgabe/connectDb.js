var Jonas_EIA2;
(function (Jonas_EIA2) {
    let link = "https://zauberbildserver.herokuapp.com/";
    function savePicture() {
        alert("Gib einen Namen für dein Bild ein.");
        let query = "command=insert";
        query += "&width=" + Jonas_EIA2.canvas.width;
        query += "&height=" + Jonas_EIA2.canvas.height;
        query += "&background=" + Jonas_EIA2.background;
        for (let i = 0; i < Jonas_EIA2.formList.length; i++) {
            query += "&color=" + Jonas_EIA2.formList[i].color;
            query += "&moveType=" + Jonas_EIA2.formList[i].moveType;
            query += "&type=" + Jonas_EIA2.formList[i].type;
        }
        sendRequest(query, handleInsertResponse);
    }
    Jonas_EIA2.savePicture = savePicture;
    function handleInsertResponse(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            alert(xhr.response);
        }
        function sendRequest(_query, _callback) {
            let xhr = new XMLHttpRequest();
            xhr.open("GET", serverAdress + "?" + _query, true);
            xhr.addEventListener("readystatechange", _callback);
            xhr.send();
        }
    }
})(Jonas_EIA2 || (Jonas_EIA2 = {}));
//# sourceMappingURL=connectDb.js.map