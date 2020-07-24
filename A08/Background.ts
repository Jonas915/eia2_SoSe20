namespace A08 {

    interface Vector {
        x: number;
        y: number;
    }

    window.addEventListener("load", handleLoad);
    let crc2: CanvasRenderingContext2D;

    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        drawBackground();
        drawCellsBackground({ x: 100, y: 200 }, { x: 50, y: 70 });
        drawBubble();
        drawVirus();
        drawAntibody();
    }


    function drawCellsBackground(_position: Vector, _size: Vector): void {
        console.log("CellsBG");
        let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");
        let pattern: CanvasRenderingContext2D = <CanvasRenderingContext2D>document.createElement("canvas").getContext("2d");
        pattern.canvas.width = 40;
        pattern.canvas.height = 20;

        pattern.fillStyle = "Transparent";
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

        crc2.fillStyle = <CanvasPattern>crc2.createPattern(pattern.canvas, "repeat");
        crc2.fillRect(0, 0, canvas.width, canvas.height);
    }


    function drawAntibody(): void {
        console.log("Antibody");

        let nAntibody: number = 10;
        let r: number = 10;

        for (let drawn: number = 0; drawn < nAntibody; drawn++) {
            let antibody: Path2D = new Path2D();
            let x: number = Math.random() * 500;
            let y: number = Math.random() * 300;

            antibody.arc(x, y, r, 0, 2 * Math.PI, true);
            crc2.fillStyle = "green";
            crc2.fill(antibody);
        }
    }

    function drawVirus(): void {
        console.log("Virus");

        let nVirus: number = 7;
        let r: number = 8;

        for (let drawn: number = 0; drawn < nVirus; drawn++) {
            let virus: Path2D = new Path2D();
            let x: number = Math.random() * 200;
            let y: number = Math.random() * 200;

            virus.arc(x, y, r, 0, 2 * Math.PI, false);
            crc2.fillStyle = "red";
            crc2.fill(virus);
        }
    }


    function drawBackground(): void {
        console.log("Background");
        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "HSL(0, 79%, 20%)");
        gradient.addColorStop(0.66, "HSL(0, 79%, 40%)");
        gradient.addColorStop(1, "HSL(0, 80%, 56%)");

        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }

    function drawBubble(): void {
        console.log("Bubbles");

        let nBubble: number = 100;
        let r: number = 5;

        for (let drawn: number = 0; drawn < nBubble; drawn++) {
            let bubble: Path2D = new Path2D();
            let x: number = Math.random() * 800;
            let y: number = Math.random() * 600;

            bubble.arc(x, y, r, 0, 2 * Math.PI, false);
            crc2.fillStyle = "rgba(255, 255, 255, 0.2)";
            crc2.fill(bubble);
        }
    }
}