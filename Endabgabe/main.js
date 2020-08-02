var Jonas_EIA2;
(function (Jonas_EIA2) {
    let canvasWidth;
    let canvasHeight;
    let backgroundColorWrapper;
    let backgroundImage;
    let save;
    Jonas_EIA2.formList = [];
    let allForms;
    let form;
    let animations;
    let forms;
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        Jonas_EIA2.canvas = document.querySelector("canvas");
        Jonas_EIA2.canvasRender = Jonas_EIA2.canvas.getContext("2d");
        canvasWidth = document.getElementById("canvasWidth");
        canvasHeight = document.getElementById("canvasHeight");
        canvasWidth.style.display = "inline";
        canvasHeight.style.display = "inline";
        canvasHeight.addEventListener("change", setCanvasHeight);
        canvasWidth.addEventListener("change", setCanvasWidth);
        Jonas_EIA2.canvas = document.querySelector("canvas");
        Jonas_EIA2.canvas.addEventListener("click", setPosition);
        Jonas_EIA2.canvas.width = 500;
        Jonas_EIA2.canvas.height = 500;
        backgroundColorWrapper = document.getElementById("backgroundColorWrapper");
        backgroundColorWrapper.style.display = "inline";
        Jonas_EIA2.backgroundColor = document.getElementById("backgroundColor");
        Jonas_EIA2.backgroundColor.addEventListener("change", function () {
            createBackground();
        });
        form = document.querySelector("form");
        animations = document.getElementById("animations");
        animations.addEventListener("click", setAnimation);
        animations.addEventListener("change", handleFormInput);
        forms = document.getElementById("forms");
        forms.addEventListener("click", createForm);
        save = document.getElementById("save");
        //save.addEventListener("click", getName);
        Jonas_EIA2.savedPictures = document.getElementById("savedPictures");
        // savedPictures.addEventListener("change", loadPicture);
        allForms = document.getElementById("allForms");
        //loadPicture()
        createBackground();
        window.setInterval(animate, 25);
    }
    function createForm(_event) {
        let target = _event.target;
        let id = target.id;
        for (let figure of Jonas_EIA2.formList) {
            figure.active = false;
        }
        switch (id) {
            case "circle": {
                let circle = new Jonas_EIA2.Circle();
                circle.draw();
                Jonas_EIA2.formList.push(circle);
                break;
            }
            case "square": {
                let square = new Jonas_EIA2.Square();
                square.draw();
                Jonas_EIA2.formList.push(square);
                break;
            }
            case "triangle": {
                let triangle = new Jonas_EIA2.Triangle();
                triangle.draw();
                Jonas_EIA2.formList.push(triangle);
                break;
            }
            default: {
                break;
            }
        }
        updateFormList();
    }
    function updateFormList() {
        while (allForms.firstChild) {
            allForms.removeChild(allForms.firstChild);
        }
        let title = document.createElement("span");
        title.innerText = "Übersicht";
        allForms.appendChild(title);
        for (let entry of Jonas_EIA2.formList) {
            let list = document.createElement("span");
            list.setAttribute("id", Jonas_EIA2.formList.indexOf(entry).toString());
            list.innerText = entry.type + "  Farbcode: " + entry.color;
            list.addEventListener("click", setActive);
            allForms.appendChild(list);
        }
    }
    Jonas_EIA2.updateFormList = updateFormList;
    function setCanvasHeight() {
        let newHeight = parseInt(canvasHeight.value);
        Jonas_EIA2.canvas.height = newHeight;
        createBackground();
    }
    function setCanvasWidth() {
        let newWidth = parseInt(canvasWidth.value);
        Jonas_EIA2.canvas.width = newWidth;
        createBackground();
    }
    function createBackground(_color) {
        if (_color) {
            Jonas_EIA2.canvasRender.fillStyle = _color;
        }
        else {
            Jonas_EIA2.canvasRender.fillStyle = Jonas_EIA2.backgroundColor.value;
        }
        Jonas_EIA2.canvasRender.fillRect(0, 0, Jonas_EIA2.canvas.width, Jonas_EIA2.canvas.height);
        backgroundImage = Jonas_EIA2.canvasRender.getImageData(0, 0, Jonas_EIA2.canvas.width, Jonas_EIA2.canvas.height);
    }
    Jonas_EIA2.createBackground = createBackground;
    function animate() {
        Jonas_EIA2.canvasRender.putImageData(backgroundImage, 0, 0);
        for (let figure of Jonas_EIA2.formList) {
            figure.move(0.5);
            figure.draw();
        }
    }
    function handleFormInput(_event) {
        let target = _event.target;
        let id = target.id;
        switch (id) {
            case "colorPicker": {
                let colorPicker = document.getElementById("colorPicker");
                for (let figure of Jonas_EIA2.formList) {
                    if (figure.active == true) {
                        figure.changeColor(colorPicker.value);
                    }
                    updateFormList();
                }
                break;
            }
            case "scale": {
                let scaleValue = document.getElementById("scale");
                for (let figure of Jonas_EIA2.formList) {
                    if (figure.active == true) {
                        figure.scale(parseFloat(scaleValue.value));
                    }
                }
            }
            default: {
                break;
            }
        }
    }
    function setAnimation(_event) {
        let target = _event.target;
        let id = target.id;
        for (let figure of Jonas_EIA2.formList) {
            if (figure.active == true) {
                switch (id) {
                    case "rotate": {
                        figure.moveType = Jonas_EIA2.FORM_MOVE.ROTATE;
                        break;
                    }
                    case "move": {
                        figure.moveType = Jonas_EIA2.FORM_MOVE.MOVE;
                        break;
                    }
                    default: {
                        break;
                    }
                }
            }
        }
    }
    function setPosition(_event) {
        let y = _event.clientY;
        let x = _event.clientX;
        for (let figure of Jonas_EIA2.formList) {
            if (figure.active == true) {
                figure.position.x = x;
                figure.position.y = y;
            }
        }
    }
    function deleteElement(_event) {
        let keyCode = _event.keyCode;
        if (keyCode == 46) {
            for (let i = 0; i < Jonas_EIA2.formList.length; i++) {
                if (Jonas_EIA2.formList[i].active == true) {
                    Jonas_EIA2.formList.splice(i, 1);
                }
            }
            updateFormList();
        }
    }
    Jonas_EIA2.deleteElement = deleteElement;
    /*function getName(): void {
        let pictureName = prompt("Gib einen Namen für dein Bild");
        if (pictureName == null || pictureName == "") {
            alert("Bitte gib einen Namen ein, um das Bild zu speichern.");
        }
        else
            savePicture(pictureName);
    }*/
    function setActive(_event) {
        for (let entry of Jonas_EIA2.formList) {
            entry.active = false;
        }
        let target = _event.target;
        let num = parseInt(target.id);
        Jonas_EIA2.formList[num].active = true;
    }
})(Jonas_EIA2 || (Jonas_EIA2 = {}));
//# sourceMappingURL=main.js.map