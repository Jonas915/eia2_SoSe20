namespace A09 {

    export class Body {

        position: Vector;
        size: number;

        constructor(_size: number) {

            let bodyPositionMin: Vector = new Vector(0, 0);
            let bodyPositionMax: Vector = new Vector(350, 550);
            let X: number = Math.random() * (bodyPositionMax.x - bodyPositionMin.x) + bodyPositionMin.x;
            let Y: number = Math.random() * (bodyPositionMax.y - bodyPositionMin.y) + bodyPositionMin.y; this.position = new Vector(X, Y);
            this.position = new Vector(X, Y);
            this.size = _size;
        }

        draw(): void {

            crc2.strokeStyle = "black";
            crc2.fillStyle = "pink";
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.beginPath();
            crc2.arc(0, 0, this.size, 0, 5 * Math.PI);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
            crc2.restore();
        }

        move(): void {
            console.log("Hier muss etwas stehen, damit lint nicht meckert :D");
}
    }
}