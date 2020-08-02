namespace Jonas_EIA2 {
    export let canvas: HTMLCanvasElement;
    export let canvasRender: CanvasRenderingContext2D;
    let canvasWidth: HTMLInputElement;
    let canvasHeight: HTMLInputElement;

    export let background: string;
    export let backgroundColor: HTMLInputElement;
    let backgroundColorWrapper: HTMLElement;
    let backgroundImage: ImageData;

    export let savedPictures: HTMLInputElement;
    let save: HTMLButtonElement;

    export let formList: Form[] = [];
    let allForms: HTMLDivElement;
   
    let form: HTMLFormElement;
    let animations: HTMLDivElement;
    let forms: HTMLDivElement;
    

    window.addEventListener("load", handleLoad);

    function handleLoad(): void {
        canvas = <HTMLCanvasElement>document.querySelector("canvas");
        canvasRender = <CanvasRenderingContext2D>canvas.getContext("2d");

        canvasWidth = <HTMLInputElement>document.getElementById("canvasWidth");
        canvasHeight = <HTMLInputElement>document.getElementById("canvasHeight");

        canvasWidth.style.display = "inline";
        canvasHeight.style.display = "inline";

        canvasHeight.addEventListener("change", setCanvasHeight);
        canvasWidth.addEventListener("change", setCanvasWidth);

        canvas = <HTMLCanvasElement>document.querySelector("canvas");
        canvas.addEventListener("click", setPosition);

        canvas.width = 500;
        canvas.height = 500;

        backgroundColorWrapper = <HTMLDivElement>document.getElementById("backgroundColorWrapper");
        backgroundColorWrapper.style.display = "inline";

        backgroundColor = <HTMLInputElement>document.getElementById("backgroundColor");
        backgroundColor.addEventListener("change", function (): void {
            createBackground();
        });

        form = <HTMLFormElement>document.querySelector("form");

        animations = <HTMLDivElement>document.getElementById("animations");
        animations.addEventListener("click", setAnimation);
        animations.addEventListener("change", handleFormInput);

        forms = <HTMLDivElement>document.getElementById("forms");
        forms.addEventListener("click", createForm);

        save = <HTMLButtonElement>document.getElementById("save");
        //save.addEventListener("click", getName);

        savedPictures = <HTMLInputElement>document.getElementById("savedPictures");
       // savedPictures.addEventListener("change", loadPicture);
        
        allForms = <HTMLDivElement>document.getElementById("allForms");

        //loadPicture()
        createBackground();
        window.setInterval(animate, 25);
    }

    function createForm(_event: MouseEvent): void {
        let target: HTMLElement = <HTMLElement>_event.target;
        let id: string = target.id;
        for (let figure of formList) {
            figure.active = false;
        }
        switch (id) {
            case "circle": {
                let circle: Circle = new Circle();
                circle.draw();
                formList.push(circle);
                break;
            }
            case "square": {
                let square: Square = new Square();
                square.draw();
                formList.push(square);
                break;
            }
            case "triangle": {
                let triangle: Triangle = new Triangle();
                triangle.draw();
                formList.push(triangle);
                break;
            }
            default: {
                break;
            }
        }
        updateFormList();
    }

    export function updateFormList(): void {
        while (allForms.firstChild) {         //Schleife, weil Elemente im nächsten Schritt überschrieben/geupdatet werden
            allForms.removeChild(allForms.firstChild);
        }
        let title: HTMLSpanElement = document.createElement("span");
        title.innerText = "Übersicht";
        allForms.appendChild(title);
        for (let entry of formList) {
            let list: HTMLSpanElement = document.createElement("span");
            list.setAttribute("id", formList.indexOf(entry).toString());
            list.innerText = entry.type + "  Farbcode: " + entry.color;
            list.addEventListener("click", setActive);
            allForms.appendChild(list);
        }
    }

    function setCanvasHeight(): void {
        let newHeight: number = parseInt(canvasHeight.value);
        canvas.height = newHeight;
        createBackground();
    }

    function setCanvasWidth(): void {
        let newWidth: number = parseInt(canvasWidth.value);
        canvas.width = newWidth;
        createBackground();
    }

    export function createBackground(_color?: string): void {
        if (_color) {
            canvasRender.fillStyle = _color;
        }
        else {
            canvasRender.fillStyle = backgroundColor.value;
        }
        canvasRender.fillRect(0, 0, canvas.width, canvas.height);
        backgroundImage = canvasRender.getImageData(0, 0, canvas.width, canvas.height);
    }

    function animate(): void {
        canvasRender.putImageData(backgroundImage, 0, 0);
        for (let figure of formList) {
            figure.move(0.5);
            figure.draw();
        }
    }

    function handleFormInput(_event: Event): void {
        let target: HTMLElement = <HTMLElement>_event.target;
        let id: string = target.id;
        switch (id) {
            case "colorPicker": {
                let colorPicker: HTMLInputElement = <HTMLInputElement>document.getElementById("colorPicker");
                for (let figure of formList) {
                    if (figure.active == true) {
                        figure.changeColor(colorPicker.value);
                    }
                    updateFormList();
                }
                break;
            }
            case "scale": {
                let scaleValue: HTMLInputElement = <HTMLInputElement>document.getElementById("scale");
                for (let figure of formList) {
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

    function setAnimation(_event: MouseEvent): void {
        let target: HTMLElement = <HTMLElement>_event.target;
        let id: string = target.id;
        for (let figure of formList) {
            if (figure.active == true) {
                switch (id) {
                   
                    case "rotate": {
                        figure.moveType = FORM_MOVE.ROTATE;
                        break;
                    }
                    case "move": {
                        figure.moveType = FORM_MOVE.MOVE;
                        break;
                    }
                    default: {
                        break;
                    }
                }
            }
        }
    }

    function setPosition(_event: MouseEvent): void {
        let y: number = _event.clientY;
        let x: number = _event.clientX;

        for (let figure of formList) {
            if (figure.active == true) {
                figure.position.x = x;
                figure.position.y = y;
            }
        }
    }


    export function deleteElement(_event: KeyboardEvent): void {
        let keyCode: number = _event.keyCode;
        if (keyCode == 46) {
            for (let i: number = 0; i < formList.length; i++) {
                if (formList[i].active == true) {
                    formList.splice(i, 1);
                }

            }
            updateFormList();
        }
    }

    /*function getName(): void {
        let pictureName = prompt("Gib einen Namen für dein Bild");
        if (pictureName == null || pictureName == "") {
            alert("Bitte gib einen Namen ein, um das Bild zu speichern.");
        }
        else
            savePicture(pictureName);
    }*/

    function setActive(_event: MouseEvent): void {
        for (let entry of formList) {
            entry.active = false;
        }
        let target: HTMLElement = <HTMLElement>_event.target;
        let num: number = parseInt(target.id);
        formList[num].active = true;
    }
}