System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, gameEventTarget, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _crd, ccclass, property, UIManager;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfgameEventTarget(extras) {
    _reporterNs.report("gameEventTarget", "./GameManager", _context.meta, extras);
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
      gameEventTarget = _unresolved_2.gameEventTarget;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "879b9R40TpFe4qVMqtz/tug", "UIManager", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Game', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("UIManager", UIManager = (_dec = ccclass("UIManager"), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec(_class = (_class2 = class UIManager extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "loadingScreen", _descriptor, this);

          _initializerDefineProperty(this, "initScreen", _descriptor2, this);

          _initializerDefineProperty(this, "gameScreen", _descriptor3, this);

          _initializerDefineProperty(this, "endScreen", _descriptor4, this);

          _initializerDefineProperty(this, "load", _descriptor5, this);
        }

        onLoad() {
          this.registerEvents();
        }

        onPlayButtonClicked() {
          console.log("Play button clicked");
          (_crd && gameEventTarget === void 0 ? (_reportPossibleCrUseOfgameEventTarget({
            error: Error()
          }), gameEventTarget) : gameEventTarget).emit("loading"); // Oyunu LOADING durumuna geçirir

          this.scheduleOnce(() => {
            (_crd && gameEventTarget === void 0 ? (_reportPossibleCrUseOfgameEventTarget({
              error: Error()
            }), gameEventTarget) : gameEventTarget).emit("game_start"); // 2 saniye sonra GAME_START durumuna geçer

            (_crd && gameEventTarget === void 0 ? (_reportPossibleCrUseOfgameEventTarget({
              error: Error()
            }), gameEventTarget) : gameEventTarget).emit("play_button_clicked");
          }, 2);
        }

        registerEvents() {
          (_crd && gameEventTarget === void 0 ? (_reportPossibleCrUseOfgameEventTarget({
            error: Error()
          }), gameEventTarget) : gameEventTarget).on("loading", this.handleLoading, this);
          (_crd && gameEventTarget === void 0 ? (_reportPossibleCrUseOfgameEventTarget({
            error: Error()
          }), gameEventTarget) : gameEventTarget).on("init", this.handleInitScreen, this);
          (_crd && gameEventTarget === void 0 ? (_reportPossibleCrUseOfgameEventTarget({
            error: Error()
          }), gameEventTarget) : gameEventTarget).on("game_start", this.handleGameScreen, this);
          (_crd && gameEventTarget === void 0 ? (_reportPossibleCrUseOfgameEventTarget({
            error: Error()
          }), gameEventTarget) : gameEventTarget).on("game_over", this.handleEndScreen, this);
        }

        handleLoading() {
          this.hideAllScreens();

          if (this.loadingScreen) {
            this.loadingScreen.active = true;
          }
        }

        handleInitScreen() {
          this.hideAllScreens();

          if (this.initScreen) {
            this.initScreen.active = true;
          }
        }

        handleGameScreen() {
          this.hideAllScreens();

          if (this.gameScreen) {
            this.gameScreen.active = true;
          }
        }

        handleEndScreen() {
          this.hideAllScreens();

          if (this.endScreen) {
            this.endScreen.active = true;
          }
        }

        hideAllScreens() {
          if (this.loadingScreen) this.loadingScreen.active = false;
          if (this.initScreen) this.initScreen.active = false;
          if (this.gameScreen) this.gameScreen.active = false;
          if (this.endScreen) this.endScreen.active = false;
        }

        rotateLoadSprite(dt) {
          var rotZ = this.load.eulerAngles.z;
          this.load.setRotationFromEuler(0, 0, rotZ - dt * 200);
        }

        update(dt) {
          var activity = this.loadingScreen.active;

          if (activity) {
            this.rotateLoadSprite(dt);
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "loadingScreen", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "initScreen", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "gameScreen", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "endScreen", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "load", [_dec6], {
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
//# sourceMappingURL=8d50429e459f3036ffc4fec5feef10bf043093e2.js.map