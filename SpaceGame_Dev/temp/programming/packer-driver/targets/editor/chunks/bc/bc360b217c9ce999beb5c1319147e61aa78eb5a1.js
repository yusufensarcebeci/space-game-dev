System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, GameManager, GameState, ScoreHandler, EnemyManager, SceneFrame, Player, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _crd, ccclass, property, UIManager;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGameManager(extras) {
    _reporterNs.report("GameManager", "./GameManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameState(extras) {
    _reporterNs.report("GameState", "./GameManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfScoreHandler(extras) {
    _reporterNs.report("ScoreHandler", "./ScoreHandler", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEnemyManager(extras) {
    _reporterNs.report("EnemyManager", "./EnemyManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSceneFrame(extras) {
    _reporterNs.report("SceneFrame", "./SceneFrame", _context.meta, extras);
  }

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
    }, function (_unresolved_2) {
      GameManager = _unresolved_2.GameManager;
      GameState = _unresolved_2.GameState;
    }, function (_unresolved_3) {
      ScoreHandler = _unresolved_3.ScoreHandler;
    }, function (_unresolved_4) {
      EnemyManager = _unresolved_4.EnemyManager;
    }, function (_unresolved_5) {
      SceneFrame = _unresolved_5.SceneFrame;
    }, function (_unresolved_6) {
      Player = _unresolved_6.Player;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "879b9R40TpFe4qVMqtz/tug", "UIManager", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("UIManager", UIManager = (_dec = ccclass("UIManager"), _dec2 = property(_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
        error: Error()
      }), GameManager) : GameManager), _dec3 = property(_crd && EnemyManager === void 0 ? (_reportPossibleCrUseOfEnemyManager({
        error: Error()
      }), EnemyManager) : EnemyManager), _dec4 = property(_crd && SceneFrame === void 0 ? (_reportPossibleCrUseOfSceneFrame({
        error: Error()
      }), SceneFrame) : SceneFrame), _dec5 = property(_crd && Player === void 0 ? (_reportPossibleCrUseOfPlayer({
        error: Error()
      }), Player) : Player), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Node), _dec(_class = (_class2 = class UIManager extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "gameManager", _descriptor, this);

          _initializerDefineProperty(this, "enemyManager", _descriptor2, this);

          _initializerDefineProperty(this, "sceneFrame", _descriptor3, this);

          _initializerDefineProperty(this, "player", _descriptor4, this);

          _initializerDefineProperty(this, "loadingScreen", _descriptor5, this);

          _initializerDefineProperty(this, "initScreen", _descriptor6, this);

          _initializerDefineProperty(this, "gameScreen", _descriptor7, this);

          _initializerDefineProperty(this, "endScreen", _descriptor8, this);

          _initializerDefineProperty(this, "scoreHandlerNode", _descriptor9, this);

          _initializerDefineProperty(this, "load", _descriptor10, this);
        }

        onLoad() {
          this.handleLoading();
          this.scheduleOnce(() => {
            this.handleInitScreen();
          }, 2);
        }

        onPlayButtonClicked() {
          this.handleLoading();
          this.scheduleOnce(() => {
            this.handleGameScreen();
          }, 2);
        }

        onRetryButtonClicked() {
          this.handleLoading();
          this.enemyManager.resetEnemyPool();
          this.sceneFrame.resetFramePool();
          this.player.resetPlayer();
          this.scheduleOnce(() => {
            this.handleGameScreen();
          }, 2);
        }

        onHomeButtonClicked() {
          this.handleLoading();
          this.enemyManager.resetEnemyPool();
          this.sceneFrame.resetFramePool();
          this.player.resetPlayer();
          this.scheduleOnce(() => {
            this.handleInitScreen();
          }, 2);
        }

        handleInitScreen() {
          this.hideAllScreens();

          if (this.initScreen) {
            this.initScreen.active = true;
            this.gameManager.setState((_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
              error: Error()
            }), GameState) : GameState).INIT);
          }
        }

        handleLoading() {
          this.hideAllScreens();

          if (this.loadingScreen) {
            this.loadingScreen.active = true;
            this.gameManager.setState((_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
              error: Error()
            }), GameState) : GameState).LOADING);
          }
        }

        handleGameScreen() {
          this.hideAllScreens();

          if (this.gameScreen) {
            this.gameScreen.active = true;
            this.gameManager.setState((_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
              error: Error()
            }), GameState) : GameState).GAME_RUNNING);

            if (this.scoreHandlerNode) {
              const scoreHandler = this.scoreHandlerNode.getComponent(_crd && ScoreHandler === void 0 ? (_reportPossibleCrUseOfScoreHandler({
                error: Error()
              }), ScoreHandler) : ScoreHandler);

              if (scoreHandler) {
                scoreHandler.resetScore();
              }
            }
          }
        }

        handleEndScreen() {
          this.hideAllScreens();

          if (this.endScreen) {
            this.endScreen.active = true;
            this.gameManager.setState((_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
              error: Error()
            }), GameState) : GameState).GAME_OVER);

            if (this.scoreHandlerNode) {
              const scoreHandler = this.scoreHandlerNode.getComponent(_crd && ScoreHandler === void 0 ? (_reportPossibleCrUseOfScoreHandler({
                error: Error()
              }), ScoreHandler) : ScoreHandler);

              if (scoreHandler) {
                scoreHandler.updategameOverScoreLabel();
              }
            }
          }
        }

        hideAllScreens() {
          if (this.loadingScreen) this.loadingScreen.active = false;
          if (this.initScreen) this.initScreen.active = false;
          if (this.gameScreen) this.gameScreen.active = false;
          if (this.endScreen) this.endScreen.active = false;
        }

        rotateLoadSprite(dt) {
          if (!this.load) return;
          let rotZ = this.load.eulerAngles.z;
          this.load.setRotationFromEuler(0, 0, rotZ - dt * 200);
        }

        update(dt) {
          let activity = this.loadingScreen.active;

          if (activity) {
            this.rotateLoadSprite(dt);
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "gameManager", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "enemyManager", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "sceneFrame", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "player", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "loadingScreen", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "initScreen", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "gameScreen", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "endScreen", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "scoreHandlerNode", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "load", [_dec11], {
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
//# sourceMappingURL=bc360b217c9ce999beb5c1319147e61aa78eb5a1.js.map