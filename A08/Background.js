"use strict";
var A08;
(function (A08) {
    window.addEventListener("load", handleLoad);
    let crc2;
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = canvas.getContext("2d");
        drawBackground();
        drawCellsBackground({ x: 100, y: 200 }, { x: 50, y: 70 });
        drawBubble();
        drawVirus();
        drawAntibody();
    }
    function drawCellsBackground(_position, _size) {
        console.log("CellsBG");
        let canvas = document.querySelector("canvas");
        let pattern = document.createElement("canvas").getContext("2d");
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
        crc2.fillStyle = crc2.createPattern(pattern.canvas, "repeat");
        crc2.fillRect(0, 0, canvas.width, canvas.height);
    }
    function drawAntibody() {
        console.log("Antibody");
        let nAntibody = 10;
        let r = 10;
        for (let drawn = 0; drawn < nAntibody; drawn++) {
            let antibody = new Path2D();
            let x = Math.random() * 500;
            let y = Math.random() * 300;
            antibody.arc(x, y, r, 0, 2 * Math.PI, true);
            crc2.fillStyle = "green";
            crc2.fill(antibody);
        }
    }
    function drawVirus() {
        console.log("Virus");
        let nVirus = 7;
        let r = 8;
        for (let drawn = 0; drawn < nVirus; drawn++) {
            let virus = new Path2D();
            let x = Math.random() * 200;
            let y = Math.random() * 200;
            virus.arc(x, y, r, 0, 2 * Math.PI, false);
            crc2.fillStyle = "red";
            crc2.fill(virus);
        }
    }
    function drawBackground() {
        console.log("Background");
        let gradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "HSL(0, 79%, 20%)");
        gradient.addColorStop(0.66, "HSL(0, 79%, 40%)");
        gradient.addColorStop(1, "HSL(0, 80%, 56%)");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }
    function drawBubble() {
        console.log("Bubbles");
        let nBubble = 100;
        let r = 5;
        for (let drawn = 0; drawn < nBubble; drawn++) {
            let bubble = new Path2D();
            let x = Math.random() * 800;
            let y = Math.random() * 600;
            bubble.arc(x, y, r, 0, 2 * Math.PI, false);
            crc2.fillStyle = "rgba(255, 255, 255, 0.2)";
            crc2.fill(bubble);
        }
    }
})(A08 || (A08 = {}));
//# sourceMappingURL=Background.js.map