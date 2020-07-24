"use strict";
var A09;
(function (A09) {
    class Body {
        constructor(_size) {
            let bodyPositionMin = new A09.Vector(0, 0);
            let bodyPositionMax = new A09.Vector(350, 550);
            let X = Math.random() * (bodyPositionMax.x - bodyPositionMin.x) + bodyPositionMin.x;
            let Y = Math.random() * (bodyPositionMax.y - bodyPositionMin.y) + bodyPositionMin.y;
            this.position = new A09.Vector(X, Y);
            this.position = new A09.Vector(X, Y);
            this.size = _size;
        }
        draw() {
            A09.crc2.strokeStyle = "black";
            A09.crc2.fillStyle = "pink";
            A09.crc2.save();
            A09.crc2.translate(this.position.x, this.position.y);
            A09.crc2.beginPath();
            A09.crc2.arc(0, 0, this.size, 0, 5 * Math.PI);
            A09.crc2.closePath();
            A09.crc2.fill();
            A09.crc2.stroke();
            A09.crc2.restore();
        }
        move() {
            console.log("Hier muss etwas stehen, damit lint nicht meckert :D");
        }
    }
    A09.Body = Body;
})(A09 || (A09 = {}));
//# sourceMappingURL=body.js.map