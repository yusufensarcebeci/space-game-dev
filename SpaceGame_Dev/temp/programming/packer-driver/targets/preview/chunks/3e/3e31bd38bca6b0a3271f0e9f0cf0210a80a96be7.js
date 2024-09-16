System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, Node, GameManager, GameState, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, ScoreHandler;

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
      Label = _cc.Label;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      GameManager = _unresolved_2.GameManager;
      GameState = _unresolved_2.GameState;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "99e2evhCZJH55WpCfRdl96n", "ScoreHandler", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Game', 'Label', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ScoreHandler", ScoreHandler = (_dec = ccclass("ScoreHandler"), _dec2 = property(_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
        error: Error()
      }), GameManager) : GameManager), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Number), _dec(_class = (_class2 = class ScoreHandler extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "gameManager", _descriptor, this);

          _initializerDefineProperty(this, "scoreLabel", _descriptor2, this);

          _initializerDefineProperty(this, "gameOverScoreLabel", _descriptor3, this);

          _initializerDefineProperty(this, "incrementInterval", _descriptor4, this);

          this.score = 0;
          this.elapsedTime = 0;
        }

        getScore() {
          return this.score;
        }

        resetScore() {
          this.score = 0;
          return this.score;
        }

        update(dt) {
          if (this.gameManager.currentState != (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).GAME_RUNNING) return;
          this.elapsedTime += dt;

          if (this.elapsedTime >= this.incrementInterval) {
            this.elapsedTime -= this.incrementInterval;
            this.incrementScore();
            this.updateScoreLabel();
          }
        }

        incrementScore() {
          this.score += 1; // console.log("Score: ", this.score);
        }

        updateScoreLabel() {
          if (this.scoreLabel) {
            var label = this.scoreLabel.getComponent(Label);

            if (label) {
              label.string = "" + this.score;
            }
          }
        }

        updategameOverScoreLabel() {
          if (this.gameOverScoreLabel) {
            var label = this.gameOverScoreLabel.getComponent(Label);

            if (label) {
              label.string = "Your Score: " + this.score;
            }
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "gameManager", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "scoreLabel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "gameOverScoreLabel", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "incrementInterval", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.1;
        }
      })), _class2)) || _class)); //   public addScore(currentscore: number, value: number) {
      //     return (currentscore += value);
      //   }


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3e31bd38bca6b0a3271f0e9f0cf0210a80a96be7.js.map