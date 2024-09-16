System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Enum, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, GameState, GameManager;

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
      Enum = _cc.Enum;
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
        GameState[GameState["GAME_START"] = 1] = "GAME_START";
        GameState[GameState["GAME_RUNNING"] = 2] = "GAME_RUNNING";
        GameState[GameState["GAME_OVER"] = 3] = "GAME_OVER";
        return GameState;
      }({}));

      _export("GameManager", GameManager = (_dec = ccclass("GameManager"), _dec2 = property({
        type: Enum(GameState)
      }), _dec(_class = (_class2 = class GameManager extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "currentState", _descriptor, this);
        }

        start() {// this.currentState = GameState.GAME_START;
        }

        setState(newState) {
          this.currentState = newState;
          this.handleStateChange(newState);
        }

        handleStateChange(state) {
          switch (state) {
            case GameState.LOADING:
              this.onLoading();
              break;

            case GameState.GAME_START:
              this.onGameStart();
              break;

            case GameState.GAME_RUNNING:
              this.onGameRunning();
              break;

            case GameState.GAME_OVER:
              this.onGameOver();
              break;
          }
        }

        onLoading() {
          console.log("Game is loading..."); // Yükleme işlemleri burada yapılır
        }

        onGameStart() {
          console.log("Game started!"); // Oyun başlangıç işlemleri burada yapılır
        }

        onGameRunning() {
          console.log("Game is running..."); // Oyun devam ederken yapılacak işlemler burada yapılır
        }

        onGameOver() {
          console.log("Game over."); // Oyun bittiğinde yapılacak işlemler burada yapılır
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "currentState", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return GameState.LOADING;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e7aa7ac4f7fabcf093f06ed44f9d6af07dbc9ae5.js.map