var Jonas_EIA2;
(function (Jonas_EIA2) {
    class Circle extends Jonas_EIA2.Form {
        constructor(_info) {
            if (_info)
                super(_info);
            else
                super();
            this.type = "Kreis";
        }
        draw() {
            Jonas_EIA2.canvasRender.beginPath();
            Jonas_EIA2.canvasRender.save();
            Jonas_EIA2.canvasRender.translate(this.position.x, this.position.y);
            Jonas_EIA2.canvasRender.arc(0, 0, this.size.x / 2, 0, 2 * Math.PI);
            Jonas_EIA2.canvasRender.strokeStyle = this.color;
            Jonas_EIA2.canvasRender.fillStyle = this.color;
            Jonas_EIA2.canvasRender.lineWidth = 4;
            Jonas_EIA2.canvasRender.fill();
            if (this.active == true) {
                Jonas_EIA2.canvasRender.strokeStyle = "black";
                Jonas_EIA2.canvasRender.lineWidth = 2;
                Jonas_EIA2.canvasRender.stroke();
            }
            else {
                Jonas_EIA2.canvasRender.strokeStyle = this.color;
                Jonas_EIA2.canvasRender.stroke();
            }
            Jonas_EIA2.canvasRender.fillStyle = this.color;
            Jonas_EIA2.canvasRender.restore();
            Jonas_EIA2.canvasRender.closePath();
        }
        move() {
            super.move(0);
            if (this.position.x < this.size.x)
                this.position.x += Jonas_EIA2.canvasRender.canvas.width;
            if (this.position.y < this.size.y)
                this.position.y += Jonas_EIA2.canvasRender.canvas.height;
            if (this.position.x > Jonas_EIA2.canvasRender.canvas.width)
                this.position.x -= Jonas_EIA2.canvasRender.canvas.width;
            if (this.position.y > Jonas_EIA2.canvasRender.canvas.height)
                this.position.y -= Jonas_EIA2.canvasRender.canvas.height;
        }
    }
    Jonas_EIA2.Circle = Circle;
})(Jonas_EIA2 || (Jonas_EIA2 = {}));
//# sourceMappingURL=Circle.js.map