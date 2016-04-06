'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _assembler = require('./assembler');

var _assembler2 = _interopRequireDefault(_assembler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Docx = function (_Assembler) {
    _inherits(Docx, _Assembler);

    function Docx() {
        _classCallCheck(this, Docx);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Docx).apply(this, arguments));

        _this.assemblerDoc = _this;
        return _this;
    }

    _createClass(Docx, [{
        key: 'addVar',
        value: function addVar(name, value) {
            this._current[name] = value;
        }
    }, {
        key: 'ignoreIf',
        value: function ignoreIf(tag) {
            this._current['if_' + tag] = false;
        }
    }, {
        key: 'addIf',
        value: function addIf(tag) {
            this._current['if_' + tag] = {};
            this._current = this._current['if_' + tag];
        }
    }, {
        key: 'addFor',
        value: function addFor(tag) {
            this._current['for_' + tag] = {};
            this._current = this._current['for_' + tag];
        }
    }, {
        key: 'assemble',
        value: function assemble() {
            this._current = this._ast = {};
        }
    }, {
        key: 'save',
        value: function save(name) {
            var wDoc = this.srcModel.wDoc;
            var zip = wDoc.raw.clone();
            zip.file(wDoc.rels['officeDocument'], this.toString());
            var data = zip.generate({ type: "nodebuffer" });
        }
    }, {
        key: 'release',
        value: function release() {}
    }, {
        key: 'ast',
        get: function get() {
            return this._ast;
        }
    }]);

    return Docx;
}(_assembler2.default);

exports.default = Docx;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYi9kb2N4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztJQUVxQjs7O0FBQ2pCLGFBRGlCLElBQ2pCLEdBQWE7OEJBREksTUFDSjs7MkVBREksa0JBRUosWUFEQTs7QUFFVCxjQUFLLFlBQUwsU0FGUzs7S0FBYjs7aUJBRGlCOzsrQkFNVixNQUFLLE9BQU07QUFDZCxpQkFBSyxRQUFMLENBQWMsSUFBZCxJQUFvQixLQUFwQixDQURjOzs7O2lDQUlULEtBQUk7QUFDVCxpQkFBSyxRQUFMLFNBQW9CLEdBQXBCLElBQTJCLEtBQTNCLENBRFM7Ozs7OEJBSVAsS0FBSTtBQUNOLGlCQUFLLFFBQUwsU0FBb0IsR0FBcEIsSUFBMkIsRUFBM0IsQ0FETTtBQUVOLGlCQUFLLFFBQUwsR0FBYyxLQUFLLFFBQUwsU0FBb0IsR0FBcEIsQ0FBZCxDQUZNOzs7OytCQUtILEtBQUk7QUFDUCxpQkFBSyxRQUFMLFVBQXFCLEdBQXJCLElBQTRCLEVBQTVCLENBRE87QUFFUCxpQkFBSyxRQUFMLEdBQWMsS0FBSyxRQUFMLFVBQXFCLEdBQXJCLENBQWQsQ0FGTzs7OzttQ0FLRDtBQUNOLGlCQUFLLFFBQUwsR0FBYyxLQUFLLElBQUwsR0FBVSxFQUFWLENBRFI7Ozs7NkJBUUwsTUFBSztBQUNOLGdCQUFJLE9BQUssS0FBSyxRQUFMLENBQWMsSUFBZCxDQURIO0FBRU4sZ0JBQUksTUFBSSxLQUFLLEdBQUwsQ0FBUyxLQUFULEVBQUosQ0FGRTtBQUdOLGdCQUFJLElBQUosQ0FBUyxLQUFLLElBQUwsQ0FBVSxnQkFBVixDQUFULEVBQXFDLEtBQUssUUFBTCxFQUFyQyxFQUhNO0FBSU4sZ0JBQUksT0FBSyxJQUFJLFFBQUosQ0FBYSxFQUFDLE1BQUssWUFBTCxFQUFkLENBQUwsQ0FKRTs7OztrQ0FPRDs7OzRCQVhBO0FBQ0wsbUJBQU8sS0FBSyxJQUFMLENBREY7Ozs7V0E1QlEiLCJmaWxlIjoiZG9jeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBc3NlbWJsZXIgZnJvbSAnLi9hc3NlbWJsZXInXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERvY3ggZXh0ZW5kcyBBc3NlbWJsZXJ7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKVxuICAgICAgICB0aGlzLmFzc2VtYmxlckRvYz10aGlzXG4gICAgfVxuXG4gICAgYWRkVmFyKG5hbWUsdmFsdWUpe1xuICAgICAgICB0aGlzLl9jdXJyZW50W25hbWVdPXZhbHVlXG4gICAgfVxuXG4gICAgaWdub3JlSWYodGFnKXtcbiAgICAgICAgdGhpcy5fY3VycmVudFtgaWZfJHt0YWd9YF09ZmFsc2VcbiAgICB9XG5cbiAgICBhZGRJZih0YWcpe1xuICAgICAgICB0aGlzLl9jdXJyZW50W2BpZl8ke3RhZ31gXT17fVxuICAgICAgICB0aGlzLl9jdXJyZW50PXRoaXMuX2N1cnJlbnRbYGlmXyR7dGFnfWBdXG4gICAgfVxuXG4gICAgYWRkRm9yKHRhZyl7XG4gICAgICAgIHRoaXMuX2N1cnJlbnRbYGZvcl8ke3RhZ31gXT17fVxuICAgICAgICB0aGlzLl9jdXJyZW50PXRoaXMuX2N1cnJlbnRbYGZvcl8ke3RhZ31gXVxuICAgIH1cblxuICAgIGFzc2VtYmxlKCl7XG4gICAgICAgIHRoaXMuX2N1cnJlbnQ9dGhpcy5fYXN0PXt9XG4gICAgfVxuXG4gICAgZ2V0IGFzdCgpe1xuICAgICAgICByZXR1cm4gdGhpcy5fYXN0XG4gICAgfVxuXG4gICAgc2F2ZShuYW1lKXtcbiAgICAgICAgbGV0IHdEb2M9dGhpcy5zcmNNb2RlbC53RG9jXG4gICAgICAgIGxldCB6aXA9d0RvYy5yYXcuY2xvbmUoKVxuICAgICAgICB6aXAuZmlsZSh3RG9jLnJlbHNbJ29mZmljZURvY3VtZW50J10sdGhpcy50b1N0cmluZygpKVxuICAgICAgICB2YXIgZGF0YT16aXAuZ2VuZXJhdGUoe3R5cGU6XCJub2RlYnVmZmVyXCJ9KVxuICAgIH1cblxuICAgIHJlbGVhc2UoKXtcblxuICAgIH1cbn1cbiJdfQ==