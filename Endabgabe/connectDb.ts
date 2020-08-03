namespace Jonas_EIA2 {

    let link: string = "https://zauberbildserver.herokuapp.com/";

    export function savePicture(): void {
        alert("Gib einen Namen für dein Bild ein.");
        let query: string = "command=insert";
        query += "&width=" + canvas.width;
        query += "&height=" + canvas.height;
        query += "&background=" + background;

        for (let i: number = 0; i < formList.length; i++) {
            query += "&color=" + formList[i].color;
            query += "&moveType=" + formList[i].moveType;
            query += "&type=" + formList[i].type;
        }
        sendRequest(query, handleInsertResponse);
    }

    function handleInsertResponse(_event: ProgressEvent): void {
        let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            alert(xhr.response);
        }

        function sendRequest(_query: string, _callback: EventListener): void {
            let xhr: XMLHttpRequest = new XMLHttpRequest();
            xhr.open("GET", serverAdress + "?" + _query, true);
            xhr.addEventListener("readystatechange", _callback);
            xhr.send();
        }
    }
}