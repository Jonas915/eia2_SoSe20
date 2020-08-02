var Jonas_EIA2;
(function (Jonas_EIA2) {
    class Triangle extends Jonas_EIA2.Form {
        constructor(_info) {
            if (_info)
                super(_info);
            else
                super();
            this.type = "Dreieck";
        }
        draw() {
            Jonas_EIA2.canvasRender.beginPath();
            Jonas_EIA2.canvasRender.save();
            Jonas_EIA2.canvasRender.translate(this.position.x, this.position.y);
            Jonas_EIA2.canvasRender.rotate(this.rotation * Math.PI / 180);
            Jonas_EIA2.canvasRender.moveTo(0 - this.size.x / 2, 0 + this.size.y / 2);
            Jonas_EIA2.canvasRender.lineTo(0 + this.size.x / 2, 0 + this.size.y / 2);
            Jonas_EIA2.canvasRender.lineTo(0, 0 - this.size.y / 2);
            Jonas_EIA2.canvasRender.lineTo(0 - this.size.x / 2, 0 + this.size.y / 2);
            Jonas_EIA2.canvasRender.lineJoin = "round";
            Jonas_EIA2.canvasRender.strokeStyle = this.color;
            Jonas_EIA2.canvasRender.fillStyle = this.color;
            Jonas_EIA2.canvasRender.lineWidth = 2;
            Jonas_EIA2.canvasRender.fill();
            if (this.active == true) {
                Jonas_EIA2.canvasRender.strokeStyle = "black";
                Jonas_EIA2.canvasRender.lineWidth = 2;
            }
            else {
                Jonas_EIA2.canvasRender.strokeStyle = this.color;
            }
            Jonas_EIA2.canvasRender.fillStyle = this.color;
            Jonas_EIA2.canvasRender.stroke();
            Jonas_EIA2.canvasRender.restore();
            Jonas_EIA2.canvasRender.closePath();
        }
        move() {
            super.move(1);
            if (this.position.x < 0)
                this.position.x += Jonas_EIA2.canvasRender.canvas.width;
            if (this.position.y < 0)
                this.position.y += Jonas_EIA2.canvasRender.canvas.height;
            if (this.position.x > Jonas_EIA2.canvasRender.canvas.width)
                this.position.x -= Jonas_EIA2.canvasRender.canvas.width;
            if (this.position.y > Jonas_EIA2.canvasRender.canvas.height)
                this.position.y -= Jonas_EIA2.canvasRender.canvas.height;
        }
    }
    Jonas_EIA2.Triangle = Triangle;
})(Jonas_EIA2 || (Jonas_EIA2 = {}));
//# sourceMappingURL=Triangle.js.map