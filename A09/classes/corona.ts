namespace A09 {

    export class Corona {

        position: Vector;
        velocity: Vector;
        size: number;
        target: Body;
        check: boolean = true;

        constructor(_size: number) {

            let coronaPositionMin: Vector = new Vector(150, 0);
            let coronaPositionMax: Vector = new Vector(350, 300);
            let X: number = Math.random() * (coronaPositionMax.x - coronaPositionMin.x) + coronaPositionMin.x;
            let Y: number = Math.random() * (coronaPositionMax.y - coronaPositionMin.y) + coronaPositionMin.y;
            this.position = new Vector(X, Y);
            this.size = _size;
            this.target = bodyCells[Math.floor(Math.random() * (bodyCells.length - 0) + 0)];
            X = (this.target.position.x - this.position.x) / 150;
            Y = (this.target.position.y - this.position.y) / 150;

            this.velocity = new Vector(X, Y);

        }

        draw(): void {

            crc2.strokeStyle = "white";
            crc2.lineWidth = 3;

            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.beginPath();
            crc2.moveTo(0, 0);
            crc2.lineTo(40, 25);
            crc2.moveTo(0, 0);
            crc2.lineTo(-40, -25);
            crc2.moveTo(0, 0);
            crc2.lineTo(-25, 40);
            crc2.moveTo(0, 0);
            crc2.lineTo(25, -40);
            crc2.stroke();
            crc2.closePath();
            crc2.restore();

            crc2.strokeStyle = "black";
            crc2.fillStyle = "darkred";
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.beginPath();
            crc2.arc(0, 0, this.size, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
            crc2.restore();

        }

        move(): void {
            if (this.check) {

                this.position.x += this.velocity.x;
                this.position.y += this.velocity.y;

                if (this.position.x < 0) {
                    this.position.x += canvas.width;
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

                this.hitBody();

            }
        }

        hitBody(): void {

            let X: number = this.position.x;
            let Y: number = this.position.y;

            let xBody: number = this.target.position.x;
            let yBody: number = this.target.position.y;
            let radius: number = (this.target.size / 2);

            if ((X - xBody) * (X - xBody) + (Y - yBody) * (Y - yBody) <= (radius * 4)) {
                console.log("hit");
                this.check = false;
                let that: Corona = this;

                setTimeout(
                    function (): void {
                        that.check = true;

                        that.target = bodyCells[Math.floor(Math.random() * (bodyCells.length - 0) + 0)];

                        X = (that.target.position.x - that.position.x) / 200;
                        Y = (that.target.position.y - that.position.y) / 200;
                        that.velocity = new Vector(X, Y);
                    },

                    1000);
            }
        }

    }
}