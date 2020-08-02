namespace Jonas_EIA2 {
    export class Circle extends Form {

        constructor(_info?: string[]) {
            if (_info)
                super(_info);
            else
                super();
            this.type = "Kreis";
        }

        public draw(): void {
            canvasRender.beginPath();
            canvasRender.save();
            canvasRender.translate(this.position.x, this.position.y);
            canvasRender.arc(0, 0, this.size.x / 2, 0, 2 * Math.PI);

            canvasRender.strokeStyle = this.color;
            canvasRender.fillStyle = this.color;
            canvasRender.lineWidth = 4;
            canvasRender.fill();

            if (this.active == true) {
                canvasRender.strokeStyle = "black";
                canvasRender.lineWidth = 2;
                canvasRender.stroke();
            }
            else {
                canvasRender.strokeStyle = this.color;
                canvasRender.stroke();
            }
            canvasRender.fillStyle = this.color;
            canvasRender.restore();
            canvasRender.closePath();
        }

        public move(): void {
            super.move(0);
            if (this.position.x < this.size.x)
                this.position.x += canvasRender.canvas.width;
            if (this.position.y < this.size.y)
                this.position.y += canvasRender.canvas.height;
            if (this.position.x > canvasRender.canvas.width - this.size.x)
                this.position.x -= canvasRender.canvas.width;
            if (this.position.y > canvasRender.canvas.height - this.size.y)
                this.position.y -= canvasRender.canvas.height;
        }
    }
}