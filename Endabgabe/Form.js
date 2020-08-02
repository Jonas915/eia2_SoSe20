var Jonas_EIA2;
(function (Jonas_EIA2) {
    let FORM_MOVE;
    (function (FORM_MOVE) {
        FORM_MOVE["ROTATE"] = "rotate";
        FORM_MOVE["MOVE"] = "move";
    })(FORM_MOVE = Jonas_EIA2.FORM_MOVE || (Jonas_EIA2.FORM_MOVE = {}));
    class Form {
        constructor(_info) {
            this.speed = new Jonas_EIA2.Vector(Math.floor(Math.random() * 20) - 10, Math.floor(Math.random() * 20) - 10);
            if (_info) {
                if (_info[0] == "true") {
                    this.active = true;
                }
                else {
                    this.active = false;
                }
                this.size = new Jonas_EIA2.Vector(parseInt(_info[1]), parseInt(_info[2]));
                this.position = new Jonas_EIA2.Vector(parseInt(_info[3]), parseInt(_info[4]));
                this.rotation = parseInt(_info[5]);
                if (_info[6] == "move") {
                    this.moveType = FORM_MOVE.MOVE;
                }
                else {
                    this.moveType = FORM_MOVE.ROTATE;
                }
                this.color = _info[7];
                this.speed = new Jonas_EIA2.Vector(parseInt(_info[8]), parseInt(_info[9]));
            }
            else {
                this.color = "#ffffff";
                this.size = new Jonas_EIA2.Vector(70, 70);
                this.position = new Jonas_EIA2.Vector(Jonas_EIA2.canvas.width / 2, Jonas_EIA2.canvas.height / 2);
                this.rotation = 0;
                this.active = true;
                this.moveType = FORM_MOVE.MOVE;
            }
        }
        move(_rotateValue) {
            switch (this.moveType) {
                case FORM_MOVE.MOVE: {
                    let offset = new Jonas_EIA2.Vector(this.speed.x, this.speed.y);
                    offset.scale(1 / 20);
                    this.position.add(offset);
                    break;
                }
                case FORM_MOVE.ROTATE: {
                    this.rotation += _rotateValue;
                    break;
                }
                default: {
                    break;
                }
            }
        }
        changeColor(_newColor) {
            this.color = _newColor;
        }
        scale(_factor) {
            this.size.scale(_factor);
        }
        changePosition(_x, _y) {
            this.position.x = _x;
            this.position.y = _y;
        }
    }
    Jonas_EIA2.Form = Form;
})(Jonas_EIA2 || (Jonas_EIA2 = {}));
//# sourceMappingURL=Form.js.map