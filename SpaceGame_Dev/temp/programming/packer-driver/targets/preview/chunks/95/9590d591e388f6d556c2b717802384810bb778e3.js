System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, JoystickController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b07d6qOMJVB1orRBdY8gDBU", "JoystickController", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Input', 'input', 'Node', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("JoystickController", JoystickController = (_dec = ccclass("JoystickController"), _dec2 = property(Node), _dec3 = property(Node), _dec(_class = (_class2 = class JoystickController extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "player", _descriptor, this);

          _initializerDefineProperty(this, "stick", _descriptor2, this);
        }

        onLoad() {
          this.node.on(Node.EventType.TOUCH_START, this.onTouchStart, this); // this.startPos.set(this.joystick.getPosition());
          // input.on(Input.EventType.TOUCH_START, this.onTouchStart, this);
          // input.on(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
          // input.on(Input.EventType.TOUCH_END, this.onTouchEnd, this);
        }

        onTouchStart(event) {
          console.log(1); // Joystick başlangıç konumunu ayarla
          // this.joystick.setPosition(new Vec3(2,2,0))
        }

        onTouchMove(event) {
          // Joystick hareketini hesapla ve player'ı hareket ettir
          var touchPos = event.getUILocation(); // const delta = touchPos.subtract(this.startPos);
          // const moveDir = new Vec3(delta.x, 0, delta.y).normalize().multiplyScalar(0.1);
          // this.player.setPosition(this.player.position.add(moveDir));
        }

        onTouchEnd(event) {
          console.log(event); // Joystick sıfırlanması
          // this.joystick.setPosition(this.startPos);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "player", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "stick", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9590d591e388f6d556c2b717802384810bb778e3.js.map