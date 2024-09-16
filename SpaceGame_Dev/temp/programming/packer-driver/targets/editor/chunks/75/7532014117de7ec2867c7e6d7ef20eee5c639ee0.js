System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Enum, EnemyManager, SceneFrame, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _crd, ccclass, property, GameState, GameManager;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfEnemyManager(extras) {
    _reporterNs.report("EnemyManager", "./EnemyManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSceneFrame(extras) {
    _reporterNs.report("SceneFrame", "./SceneFrame", _context.meta, extras);
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
      Enum = _cc.Enum;
    }, function (_unresolved_2) {
      EnemyManager = _unresolved_2.EnemyManager;
    }, function (_unresolved_3) {
      SceneFrame = _unresolved_3.SceneFrame;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "33ad01YrrlMSLwfgq2DRkmF", "GameManager", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Enum', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameState", GameState = /*#__PURE__*/function (GameState) {
        GameState[GameState["LOADING"] = 0] = "LOADING";
        GameState[GameState["INIT"] = 1] = "INIT";
        GameState[GameState["GAME_START"] = 2] = "GAME_START";
        GameState[GameState["GAME_RUNNING"] = 3] = "GAME_RUNNING";
        GameState[GameState["GAME_OVER"] = 4] = "GAME_OVER";
        return GameState;
      }({}));

      _export("GameManager", GameManager = (_dec = ccclass("GameManager"), _dec2 = property({
        type: Enum(GameState)
      }), _dec3 = property(Number), _dec4 = property(Number), _dec5 = property(Number), _dec6 = property(_crd && EnemyManager === void 0 ? (_reportPossibleCrUseOfEnemyManager({
        error: Error()
      }), EnemyManager) : EnemyManager), _dec7 = property(_crd && SceneFrame === void 0 ? (_reportPossibleCrUseOfSceneFrame({
        error: Error()
      }), SceneFrame) : SceneFrame), _dec(_class = (_class2 = class GameManager extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "difficultyMultiplier", _descriptor, this);

          _initializerDefineProperty(this, "difficultyIncreaseRate", _descriptor2, this);

          _initializerDefineProperty(this, "maxDifficulty", _descriptor3, this);

          _initializerDefineProperty(this, "enemyManager", _descriptor4, this);

          _initializerDefineProperty(this, "sceneFrame", _descriptor5, this);

          this.currentState = GameState.LOADING;
        }

        setState(newState) {
          this.currentState = newState;
          console.warn("Current Game State: ", GameState[this.currentState]);
        }

        gameReset() {
          this.enemyManager.resetEnemyPool();
          this.sceneFrame.resetFramePool();
        }

        increaseDifficulty(dt) {
          if (this.difficultyMultiplier > this.maxDifficulty) return;
          this.difficultyMultiplier += this.difficultyIncreaseRate * dt;
        }

        update(dt) {
          if (this.currentState === GameState.GAME_RUNNING) {
            this.increaseDifficulty(dt);
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "difficultyMultiplier", [_dec2, _dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 1;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "difficultyIncreaseRate", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0.01;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "maxDifficulty", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 5;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "enemyManager", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "sceneFrame", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7532014117de7ec2867c7e6d7ef20eee5c639ee0.js.map