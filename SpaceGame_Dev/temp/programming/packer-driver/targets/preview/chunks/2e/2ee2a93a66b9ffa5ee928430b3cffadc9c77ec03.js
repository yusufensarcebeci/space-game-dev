System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Vec3, JoystickController, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, Player;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfJoystickController(extras) {
    _reporterNs.report("JoystickController", "./JoystickController", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      JoystickController = _unresolved_2.JoystickController;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0251649RLpG/pFzJe+gKLHV", "Player", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Player", Player = (_dec = ccclass('Player'), _dec2 = property(Number), _dec3 = property(_crd && JoystickController === void 0 ? (_reportPossibleCrUseOfJoystickController({
        error: Error()
      }), JoystickController) : JoystickController), _dec(_class = (_class2 = class Player extends Component {
        constructor() {
          super(...arguments);

          // @property(Node) player: Node = null;
          _initializerDefineProperty(this, "movementSpeed", _descriptor, this);

          // Pixel/s olarak hareket hızı
          _initializerDefineProperty(this, "joystickController", _descriptor2, this);
        }

        update(deltaTime) {
          if (this.joystickController) {
            var direction = this.joystickController.getDirection();

            if (direction.length() > 0) {
              // Hareket vektörünü hesapla
              var moveVector = new Vec3(direction.x, direction.y, 0).multiplyScalar(this.movementSpeed * deltaTime); // Yeni pozisyonu ayarla

              var newPosition = this.node.getPosition().add(moveVector);
              this.node.setPosition(newPosition);
            }
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "movementSpeed", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 200;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "joystickController", [_dec3], {
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
//# sourceMappingURL=2ee2a93a66b9ffa5ee928430b3cffadc9c77ec03.js.map