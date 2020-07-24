namespace A09 {

    export class Blood {

        position: Vector;
        velocity: Vector;
        size: number;

        constructor(_size: number) {

            let cellsPositionMin: Vector = new Vector(0, 0);
            let cellsPositionMax: Vector = new Vector(350, 600);
            let X: number = Math.random() * (cellsPositionMax.x - cellsPositionMin.x) + cellsPositionMin.x;
            let Y: number = Math.random() * (cellsPositionMax.y - cellsPositionMin.y) + cellsPositionMin.y;
            this.position = new Vector(X, Y);
            this.velocity = new Vector(-1, 1);
            this.size = _size;
        }

        draw(): void {

            crc2.globalAlpha = 0.4;
            crc2.fillStyle = "white";

            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.beginPath();
            crc2.arc(0, 0, this.size, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
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