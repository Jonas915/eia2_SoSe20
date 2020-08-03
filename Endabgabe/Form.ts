namespace Jonas_EIA2 {
    export enum FORM_MOVE {
        ROTATE = "rotate",
        MOVE = "move"
    }
    export abstract class Form {
        public color: string;
        public size: Vector;
        public position: Vector;
        public rotation: number;
        public moveType: FORM_MOVE;
        public active: boolean;
        public speed: Vector = new Vector(Math.floor(Math.random() * 20) - 10, Math.floor(Math.random() * 20) - 10);
        public type: string;

        public constructor(_info?: string[]) {
            if (_info) {
                if (_info[0] == "true") {
                    this.active = true;
                }
                else {
                    this.active = false;
                }
                this.size = new Vector(parseInt(_info[1]), parseInt(_info[2]));
                this.position = new Vector(parseInt(_info[3]), parseInt(_info[4]));
                this.rotation = parseInt(_info[5]);
                if (_info[6] == "move") {
                    this.moveType = FORM_MOVE.MOVE;
                }
                else {
                    this.moveType = FORM_MOVE.ROTATE;
                }
                this.color = _info[7];
                this.speed = new Vector(parseInt(_info[8]), parseInt(_info[9]));

            }
            else {
                this.color = "#ffffff";
                this.size = new Vector(60, 60);
                this.position = new Vector(canvas.width / 2, canvas.height / 2);
                this.rotation = 0;
                this.active = true;
                this.moveType = FORM_MOVE.MOVE;
            }
        }

        abstract draw(): void;

        public move(_rotateValue: number): void {
            switch (this.moveType) {
                case FORM_MOVE.MOVE: {
                    let offset: Vector = new Vector(this.speed.x, this.speed.y);
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

        public changeColor(_newColor: string): void {
            this.color = _newColor;
        }

        public scale(_factor: number): void {
            this.size.scale(_factor);
        }

        public changePosition(_x: number, _y: number): void {
            this.position.x = _x;
            this.position.y = _y;
        }
    }
}