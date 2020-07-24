"use strict";
var A09;
(function (A09) {
    class Killer {
        constructor(_size) {
            let killerPositionMin = new A09.Vector(60, 250);
            let killerPositionMax = new A09.Vector(300, 600);
            let X = Math.random() * (killerPositionMax.x - killerPositionMin.x) + killerPositionMin.x;
            let Y = Math.random() * (killerPositionMax.y - killerPositionMin.y) + killerPositionMin.y;
            this.position = new A09.Vector(X, Y);
            this.velocity = new A09.Vector(Math.random() * (2 - (-2)) + (-2), Math.random() * (2 - (-2)) + (-2));
            this.size = _size;
        }
        draw() {
            A09.crc2.strokeStyle = "black";
            A09.crc2.lineWidth = 5;
            A09.crc2.strokeStyle = "lightgreen";
            A09.crc2.fillStyle = "green";
            A09.crc2.save();
            A09.crc2.translate(this.position.x, this.position.y);
            A09.crc2.beginPath();
            A09.crc2.arc(0, 0, this.size, 0, 2 * Math.PI);
            A09.crc2.closePath();
            A09.crc2.fill();
            A09.crc2.stroke();
            A09.crc2.restore();
            A09.crc2.fillStyle = "#000000";
            A09.crc2.save();
            A09.crc2.translate(this.position.x, this.position.y);
            A09.crc2.beginPath();
            A09.crc2.arc(0, 0, this.size / 2, 0, 2 * Math.PI);
            A09.crc2.closePath();
            A09.crc2.fill();
            A09.crc2.stroke();
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
    A09.Killer = Killer;
})(A09 || (A09 = {}));
//# sourceMappingURL=killer.js.map