System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Script, UITransform, Vec3, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, JoystickController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfPlayer(extras) {
    _reporterNs.report("Player", "./Player", _context.meta, extras);
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
      Node = _cc.Node;
      Script = _cc.Script;
      UITransform = _cc.UITransform;
      Vec3 = _cc.Vec3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b07d6qOMJVB1orRBdY8gDBU", "JoystickController", undefined);

      __checkObsolete__(['_decorator', 'Component', 'EventTouch', 'Node', 'Script', 'UITransform', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("JoystickController", JoystickController = (_dec = ccclass("JoystickController"), _dec2 = property(Script), _dec3 = property(Node), _dec4 = property(Number), _dec(_class = (_class2 = class JoystickController extends Component {
        constructor(...args) {
          super(...args);

          // @property(Node) player: Node = null;
          _initializerDefineProperty(this, "Player", _descriptor, this);

          _initializerDefineProperty(this, "stick", _descriptor2, this);

          _initializerDefineProperty(this, "joystickRadius", _descriptor3, this);

          this.joystickCenter = void 0;
        }

        onLoad() {
          this.joystickCenter = this.node.getPosition();
          this.node.on(Node.EventType.TOUCH_MOVE, this.handleTouchMove, this);
          this.node.on(Node.EventType.TOUCH_END, this.resetJoystickPosition, this);
          this.node.on(Node.EventType.TOUCH_CANCEL, this.resetJoystickPosition, this);
        }

        handleTouchMove(event) {
          const screenPos = event.getUILocation();
          const uiTransform = this.node.getComponent(UITransform);
          const pos = uiTransform.convertToNodeSpaceAR(new Vec3(screenPos.x, screenPos.y, 0));
          const offset = new Vec3(pos.x - this.joystickCenter.x, pos.y - this.joystickCenter.y, 0);
          const distance = offset.length();

          if (distance > this.joystickRadius) {
            offset.normalize().multiplyScalar(this.joystickRadius);
            pos.set(this.joystickCenter.x + offset.x, this.joystickCenter.y + offset.y, 0);
          }

          this.stick.setPosition(pos); // const moveOffset = new Vec3(offset.x / this.joystickRadius, offset.y / this.joystickRadius, 0);
          // this.playerObject.movePlayer(moveOffset);

          console.log(this.Player);
        }

        resetJoystickPosition(event) {
          this.stick.setPosition(this.joystickCenter);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Player", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "stick", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "joystickRadius", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 100;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ce4833a0c93c9c525980ef0ea160e0411269e028.js.map