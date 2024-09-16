System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, instantiate, Prefab, Vec3, GameManager, GameState, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _crd, ccclass, property, SceneFrame;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

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
      Component = _cc.Component;
      instantiate = _cc.instantiate;
      Prefab = _cc.Prefab;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      GameManager = _unresolved_2.GameManager;
      GameState = _unresolved_2.GameState;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "495f5RdAXVC7bmV7pX+jFxl", "SceneFrame", undefined);

      __checkObsolete__(['_decorator', 'Component', 'instantiate', 'Node', 'Prefab', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("SceneFrame", SceneFrame = (_dec = ccclass("SceneFrame"), _dec2 = property(_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
        error: Error()
      }), GameManager) : GameManager), _dec3 = property(Prefab), _dec4 = property(Number), _dec5 = property(Number), _dec6 = property(Number), _dec(_class = (_class2 = class SceneFrame extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "gameManager", _descriptor, this);

          _initializerDefineProperty(this, "framePrefab", _descriptor2, this);

          _initializerDefineProperty(this, "poolSize", _descriptor3, this);

          _initializerDefineProperty(this, "zOffset", _descriptor4, this);

          _initializerDefineProperty(this, "moveSpeed", _descriptor5, this);

          this.framePool = [];
        }

        onLoad() {
          this.initializeFramePool();
          this.spawnFrame();
        }

        initializeFramePool() {
          for (var i = 0; i < this.poolSize; i++) {
            var frame = instantiate(this.framePrefab);
            frame.active = true;
            this.node.addChild(frame);
            this.framePool.push(frame);
          }
        }

        spawnFrame() {
          var positionZ = 0;
          this.framePool.forEach(frame => {
            frame.setPosition(new Vec3(0, 0, positionZ));
            positionZ -= this.zOffset;
          });
        }

        resetFrame(frame) {
          var newPositionZ = this.getFarthestFrameZ() - this.zOffset; // En uzak frame'in Z pozisyonunu referans alarak yeni pozisyonu belirle

          frame.setPosition(new Vec3(0, 0, newPositionZ));
        }

        getFarthestFrameZ() {
          // Sahnedeki en uzak frame'in Z pozisyonunu bulur
          return Math.min(...this.framePool.map(frame => frame.getPosition().z));
        }

        update(dt) {
          if (this.gameManager && this.gameManager.currentState === (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).GAME_START) {
            this.framePool.forEach(frame => {
              var position = frame.getPosition();
              position.z += this.moveSpeed * dt;
              frame.setPosition(position);

              if (position.z > -5) {
                this.resetFrame(frame); // Frame'i sahnenin en gerisine resetle
              }
            });
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "gameManager", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "framePrefab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "poolSize", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 100;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "zOffset", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 5;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "moveSpeed", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 30;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7aacbaa7fb1be5ac6d483d847d617696259565bb.js.map