"use strict";
var A09;
(function (A09) {
    class Corona {
        constructor(_size) {
            this.check = true;
            let coronaPositionMin = new A09.Vector(150, 0);
            let coronaPositionMax = new A09.Vector(350, 300);
            let X = Math.random() * (coronaPositionMax.x - coronaPositionMin.x) + coronaPositionMin.x;
            let Y = Math.random() * (coronaPositionMax.y - coronaPositionMin.y) + coronaPositionMin.y;
            this.position = new A09.Vector(X, Y);
            this.size = _size;
            this.target = A09.bodyCells[Math.floor(Math.random() * (A09.bodyCells.length - 0) + 0)];
            X = (this.target.position.x - this.position.x) / 150;
            Y = (this.target.position.y - this.position.y) / 150;
            this.velocity = new A09.Vector(X, Y);
        }
        draw() {
            A09.crc2.strokeStyle = "white";
            A09.crc2.lineWidth = 3;
            A09.crc2.save();
            A09.crc2.translate(this.position.x, this.position.y);
            A09.crc2.beginPath();
            A09.crc2.moveTo(0, 0);
            A09.crc2.lineTo(40, 25);
            A09.crc2.moveTo(0, 0);
            A09.crc2.lineTo(-40, -25);
            A09.crc2.moveTo(0, 0);
            A09.crc2.lineTo(-25, 40);
            A09.crc2.moveTo(0, 0);
            A09.crc2.lineTo(25, -40);
            A09.crc2.stroke();
            A09.crc2.closePath();
            A09.crc2.restore();
            A09.crc2.strokeStyle = "black";
            A09.crc2.fillStyle = "darkred";
            A09.crc2.save();
            A09.crc2.translate(this.position.x, this.position.y);
            A09.crc2.beginPath();
            A09.crc2.arc(0, 0, this.size, 0, 2 * Math.PI);
            A09.crc2.closePath();
            A09.crc2.fill();
            A09.crc2.stroke();
            A09.crc2.restore();
        }
        move() {
            if (this.check) {
                this.position.x += this.velocity.x;
                this.position.y += this.velocity.y;
                if (this.position.x < 0) {
                    this.position.x += A09.canvas.width;
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
                this.hitBody();
            }
        }
        hitBody() {
            let X = this.position.x;
            let Y = this.position.y;
            let xBody = this.target.position.x;
            let yBody = this.target.position.y;
            let radius = (this.target.size / 2);
            if ((X - xBody) * (X - xBody) + (Y - yBody) * (Y - yBody) <= (radius * 4)) {
                console.log("hit");
                this.check = false;
                let that = this;
                setTimeout(function () {
                    that.check = true;
                    that.target = A09.bodyCells[Math.floor(Math.random() * (A09.bodyCells.length - 0) + 0)];
                    X = (that.target.position.x - that.position.x) / 200;
                    Y = (that.target.position.y - that.position.y) / 200;
                    that.velocity = new A09.Vector(X, Y);
                }, 1000);
            }
        }
    }
    A09.Corona = Corona;
})(A09 || (A09 = {}));
//# sourceMappingURL=corona.js.map