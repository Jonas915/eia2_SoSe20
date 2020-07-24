"use strict";
var A09;
(function (A09) {
    class Blood {
        constructor(_size) {
            let cellsPositionMin = new A09.Vector(0, 0);
            let cellsPositionMax = new A09.Vector(350, 600);
            let X = Math.random() * (cellsPositionMax.x - cellsPositionMin.x) + cellsPositionMin.x;
            let Y = Math.random() * (cellsPositionMax.y - cellsPositionMin.y) + cellsPositionMin.y;
            this.position = new A09.Vector(X, Y);
            this.velocity = new A09.Vector(-1, 1);
            this.size = _size;
        }
        draw() {
            A09.crc2.globalAlpha = 0.4;
            A09.crc2.fillStyle = "white";
            A09.crc2.save();
            A09.crc2.translate(this.position.x, this.position.y);
            A09.crc2.beginPath();
            A09.crc2.arc(0, 0, this.size, 0, 2 * Math.PI);
            A09.crc2.closePath();
            A09.crc2.fill();
            A09.crc2.restore();
        }
        move() {
            if (this.position.x < 0) {
                this.position.x = A09.canvas.width;
            }
            if (this.position.y < 0) {
                this.position.y += A09.canvas.height;
            }
            if (this.position.x > A09.canvas.width) {
                this.position.x += -A09.canvas.width;
            }
            if (this.position.y > A09.canvas.height) {
                this.position.y += -A09.canvas.height;
            }
            this.position.x += this.velocity.x;
            this.position.y += this.velocity.y;
        }
    }
    A09.Blood = Blood;
})(A09 || (A09 = {}));
//# sourceMappingURL=blood.js.map