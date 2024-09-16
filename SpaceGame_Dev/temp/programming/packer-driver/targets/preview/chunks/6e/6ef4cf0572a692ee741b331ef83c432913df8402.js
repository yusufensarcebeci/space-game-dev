System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, clamp, Component, Vec3, JoystickController, Camera, GameManager, GameState, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, Player;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfJoystickController(extras) {
    _reporterNs.report("JoystickController", "./JoystickController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCamera(extras) {
    _reporterNs.report("Camera", "./Camera", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameManager(extras) {
    _reporterNs.report("GameManager", "./GameManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameState(extras) {
    _reporterNs.report("GameState", "./GameManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      clamp = _cc.clamp;
      Component = _cc.Component;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      JoystickController = _unresolved_2.JoystickController;
    }, function (_unresolved_3) {
      Camera = _unresolved_3.Camera;
    }, function (_unresolved_4) {
      GameManager = _unresolved_4.GameManager;
      GameState = _unresolved_4.GameState;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0251649RLpG/pFzJe+gKLHV", "Player", undefined);

      __checkObsolete__(['_decorator', 'clamp', 'Component', 'Node', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Player", Player = (_dec = ccclass("Player"), _dec2 = property(_crd && JoystickController === void 0 ? (_reportPossibleCrUseOfJoystickController({
        error: Error()
      }), JoystickController) : JoystickController), _dec3 = property(_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
        error: Error()
      }), GameManager) : GameManager), _dec4 = property(_crd && Camera === void 0 ? (_reportPossibleCrUseOfCamera({
        error: Error()
      }), Camera) : Camera), _dec5 = property(Number), _dec(_class = (_class2 = class Player extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "joystickController", _descriptor, this);

          _initializerDefineProperty(this, "gameManager", _descriptor2, this);

          _initializerDefineProperty(this, "camera", _descriptor3, this);

          _initializerDefineProperty(this, "movementSpeed", _descriptor4, this);

          this.xMin = -7;
          this.xMax = 7;
          this.yMin = -7;
          this.yMax = 7;
        }

        update(dt) {
          if (this.gameManager.currentState !== (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).GAME_RUNNING) return;

          if (this.joystickController) {
            var direction = this.joystickController.getDirection();

            if (direction.length() > 0) {
              var moveVector = new Vec3(direction.x, direction.y, 0).multiplyScalar(this.movementSpeed * dt);
              var newPosition = this.node.getPosition().add(moveVector);
              newPosition.x = clamp(newPosition.x, this.xMin, this.xMax);
              newPosition.y = clamp(newPosition.y, this.yMin, this.yMax);
              this.node.setPosition(newPosition);
            }
          }
        }

        lateUpdate(dt) {
          this.camera.follow(this.node);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "joystickController", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "gameManager", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "camera", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "movementSpeed", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 10;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6ef4cf0572a692ee741b331ef83c432913df8402.js.map