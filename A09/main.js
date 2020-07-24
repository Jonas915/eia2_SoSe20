"use strict";
var A09;
(function (A09) {
    let updateObjects = [];
    A09.bodyCells = [];
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        A09.canvas = document.querySelector("canvas");
        A09.crc2 = A09.canvas.getContext("2d");
        drawBackground();
        for (let i = 0; i < 4; i++) {
            let body = new A09.Body(40);
            body.draw();
            updateObjects.push(body);
            A09.bodyCells.push(body);
        }
        for (let i = 0; i < 10; i++) {
            let corona = new A09.Corona(30);
            corona.draw();
            updateObjects.push(corona);
        }
        for (let i = 0; i < 5; i++) {
            let killer = new A09.Killer(30);
            killer.draw();
            updateObjects.push(killer);
        }
        for (let i = 0; i < 20; i++) {
            let blood = new A09.Blood(7);
            blood.draw();
            updateObjects.push(blood);
        }
        window.requestAnimationFrame(update);
    }
    function drawBackground() {
        let pattern = document.createElement("canvas").getContext("2d");
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
        A09.crc2.fillStyle = A09.crc2.createPattern(pattern.canvas, "repeat");
        A09.crc2.fillRect(0, 0, A09.canvas.width, A09.canvas.height);
    }
    function update() {
        A09.crc2.clearRect(0, 0, A09.canvas.width, A09.canvas.height);
        A09.crc2.globalAlpha = 1;
        drawBackground();
        for (let i = 0; i < updateObjects.length; i++) {
            updateObjects[i].move();
            updateObjects[i].draw();
        }
        window.requestAnimationFrame(update);
    }
})(A09 || (A09 = {}));
//# sourceMappingURL=main.js.map