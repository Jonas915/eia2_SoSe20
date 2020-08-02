var Jonas_EIA2;
(function (Jonas_EIA2) {
    class Vector {
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        static getDifference(_v0, _v1) {
            return new Vector(_v0.x - _v1.x, _v0.y - _v1.y);
        }
        set(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        scale(_factor) {
            this.x = _factor * this.x;
            this.y = this.y * _factor;
        }
        add(_addend) {
            this.x += _addend.x;
            this.y += _addend.y;
        }
    }
    Jonas_EIA2.Vector = Vector;
})(Jonas_EIA2 || (Jonas_EIA2 = {}));
//# sourceMappingURL=Vector.js.map