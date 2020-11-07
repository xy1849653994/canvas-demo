var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var _React = React,Component = _React.Component;var _ReactDOM =
ReactDOM,render = _ReactDOM.render;

var $code = function $code(sel) {return (
  document.getElementById(sel) || {}).
  textContent || "void main() {}";};var

Shader = function (_Component) {_inherits(Shader, _Component);function Shader() {var _ref;var _temp, _this, _ret;_classCallCheck(this, Shader);for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {args[_key] = arguments[_key];}return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Shader.__proto__ || Object.getPrototypeOf(Shader)).call.apply(_ref, [this].concat(args))), _this), _this.

    canvasRef = React.createRef(), _this.

    setSize = function () {var _this2 = _this,
      canvas = _this2.canvas;
      canvas.width = _this.width = canvas.clientWidth;
      canvas.height = _this.height = canvas.clientHeight;
    }, _temp), _possibleConstructorReturn(_this, _ret);}_createClass(Shader, [{ key: 'componentDidMount', value: function componentDidMount()

    {
      this.canvas = this.canvasRef.current;
      this.setSize();
      window.addEventListener('resize', this.setSize);
      this.regl = createREGL({ canvas: this.canvas });var
      regl = this.regl;
      var drawFrame = regl({
        frag: this.props.frag,
        vert: this.props.vert,
        attributes: {
          position: [[-1, -1], [-1, 1], [1, -1], /* triangle 1 */
          [1, -1], [-1, 1], [1, 1]] /* triangle 2 */ },

        uniforms: {
          width: function width(ctx) {return ctx.viewportWidth;},
          height: function height(ctx) {return ctx.viewportHeight;},
          time: function time(ctx) {return ctx.tick * 2e-2;} },

        count: 6 });

      regl.frame(function (ctx) {
        regl.clear({ depth: 1 });
        drawFrame();
      });
    } }, { key: 'componentWillUnmount', value: function componentWillUnmount()

    {
      regl.destroy();
      window.removeEventListener('resize', this.setSize);
    } }, { key: 'render', value: function render()

    {
      return React.createElement('canvas', {
        ref: this.canvasRef,
        style: { display: 'block', width: '100%', height: '100%' } });

    } }]);return Shader;}(Component);


render(React.createElement(Shader, { frag: $code('fragmentShader'),
  vert: $code('vertexShader') }), document.getElementById('root'));