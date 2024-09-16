System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, _dec, _class, _crd, ccclass, property, GameState, SceneFrame;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "495f5RdAXVC7bmV7pX+jFxl", "SceneFrame", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

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

      _export("SceneFrame", SceneFrame = (_dec = ccclass('SceneFrame'), _dec(_class = class SceneFrame extends Component {
        initializeFramePool() {
          for (let i = 0; i < this.poolSize; i++) {
            const enemy = instantiate(this.enemyPrefab);
            enemy.active = false;
            this.node.addChild(enemy);
            this.enemyPool.push(enemy);
          }

          console.log(this.enemyPool);
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=67b871b1031ab7b431841747ef919312eeef6f37.js.map