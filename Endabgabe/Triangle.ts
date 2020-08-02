namespace Jonas_EIA2 {
    export class Triangle extends Form {
        constructor(_info?: string[]) {
            if (_info)
                super(_info);
            else
                super();
            this.type = "Dreieck";
        }

        public draw(): void {
            canvasRender.beginPath();
            canvasRender.save();
            canvasRender.translate(this.position.x, this.position.y);
            canvasRender.rotate(this.rotation * Math.PI / 180);
            canvasRender.moveTo(0 - this.size.x / 2, 0 + this.size.y / 2);
            canvasRender.lineTo(0 + this.size.x / 2, 0 + this.size.y / 2);
            canvasRender.lineTo(0, 0 - this.size.y / 2);
            canvasRender.lineTo(0 - this.size.x / 2, 0 + this.size.y / 2);
            canvasRender.lineJoin = "round";

            canvasRender.strokeStyle = this.color;
            canvasRender.fillStyle = this.color;
            canvasRender.lineWidth = 2;
            canvasRender.fill();

            if (this.active == true) {
                canvasRender.strokeStyle = "black";
                canvasRender.lineWidth = 2;
            }
            else {
                canvasRender.strokeStyle = this.color;
            }
            canvasRender.fillStyle = this.color;
            canvasRender.stroke();
            canvasRender.restore();
            canvasRender.closePath();
        }

        public move(): void {
            super.move(1);
            if (this.position.x < 0)
                this.position.x += canvasRender.canvas.width;
            if (this.position.y < 0)
                this.position.y += canvasRender.canvas.height;
            if (this.position.x > canvasRender.canvas.width)
                this.position.x -= canvasRender.canvas.width;
            if (this.position.y > canvasRender.canvas.height)
                this.position.y -= canvasRender.canvas.height;
        }
    }
}