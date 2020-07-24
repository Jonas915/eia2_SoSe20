namespace A09 {

    export class Killer {

        position: Vector;
        velocity: Vector;
        size: number;

        constructor(_size: number) {

            let killerPositionMin: Vector = new Vector(60, 250);
            let killerPositionMax: Vector = new Vector(300, 600);
            let X: number = Math.random() * (killerPositionMax.x - killerPositionMin.x) + killerPositionMin.x;
            let Y: number = Math.random() * (killerPositionMax.y - killerPositionMin.y) + killerPositionMin.y;
            this.position = new Vector(X, Y);
            this.velocity = new Vector(Math.random() * (2 - (-2)) + (-2), Math.random() * (2 - (-2)) + (-2));
            this.size = _size;
        }

        draw(): void {

            crc2.strokeStyle = "black";
            crc2.lineWidth = 5;

            crc2.strokeStyle = "lightgreen";
            crc2.fillStyle = "green";
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.beginPath();
            crc2.arc(0, 0, this.size, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
            crc2.restore();

            crc2.fillStyle = "#000000";
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.beginPath();
            crc2.arc(0, 0, this.size / 2, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
            crc2.restore();
        }

        move(): void {
             
            if (this.position.x < 0) {
                this.position.x = canvas.width;
            }
            if (this.position.y < 0) {
                this.position.y += canvas.height;
            }

            if (this.position.x > canvas.width) {
                this.position.x += -canvas.width;
            }
            if (this.position.y > canvas.height) {
                this.position.y += -canvas.height;
            }
            this.position.x += this.velocity.x;
            this.position.y += this.velocity.y;
        }
    }
}