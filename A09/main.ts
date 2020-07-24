namespace A09 {

    let updateObjects: any = [];
    export let bodyCells: Body[] = [];

    window.addEventListener("load", handleLoad);

    export let crc2: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement;

    function handleLoad(_event: Event): void {
        canvas = <HTMLCanvasElement>document.querySelector("canvas");
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        drawBackground();

        for (let i: number = 0; i < 4; i++) {
            let body: Body = new Body(40);
            body.draw();
            updateObjects.push(body);
            bodyCells.push(body);
        }

        for (let i: number = 0; i < 10; i++) {
            let corona: Corona = new Corona(30);
            corona.draw();
            updateObjects.push(corona);
        }

        for (let i: number = 0; i < 5; i++) {
            let killer: Killer = new Killer(30);
            killer.draw();
            updateObjects.push(killer);
        }


        for (let i: number = 0; i < 20; i++) {
            let blood: Blood = new Blood(7);
            blood.draw();
            updateObjects.push(blood);
        }

        window.requestAnimationFrame(update);
    }


    function drawBackground(): void {
        let pattern: CanvasRenderingContext2D = <CanvasRenderingContext2D>document.createElement("canvas").getContext("2d");
        pattern.canvas.width = 40;
        pattern.canvas.height = 20;

        pattern.fillStyle = "red";
        pattern.fillRect(0, 0, pattern.canvas.width, pattern.canvas.height);
        pattern.moveTo(0, 10);
        pattern.lineTo(10, 10);
        pattern.lineTo(20, 0);
        pattern.lineTo(30, 0);
        pattern.lineTo(40, 10);
        pattern.lineTo(30, 20);
        pattern.lineTo(20, 20);
        pattern.lineTo(10, 10);
        pattern.stroke();
        crc2.fillStyle = crc2.createPattern(pattern.canvas, "repeat");
        crc2.fillRect(0, 0, canvas.width, canvas.height);
    }

    function update(): void {
        crc2.clearRect(0, 0, canvas.width, canvas.height);
        crc2.globalAlpha = 1;

        drawBackground();

        for (let i: number = 0; i < updateObjects.length; i++) {

            updateObjects[i].move();
            updateObjects[i].draw();
        }
        window.requestAnimationFrame(update);
    }
}