System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, instantiate, Prefab, randomRange, Vec3, GameManager, GameState, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _crd, ccclass, property, EnemyManager;

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
      randomRange = _cc.randomRange;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      GameManager = _unresolved_2.GameManager;
      GameState = _unresolved_2.GameState;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b73b3AJ+nxMoJqsoNFo9LFq", "EnemyManager", undefined);

      __checkObsolete__(['_decorator', 'Component', 'instantiate', 'Node', 'Prefab', 'randomRange', 'Vec3']);

      // GameManager ve GameState'i içe aktarıyoruz
      ({
        ccclass,
        property
      } = _decorator);

      _export("EnemyManager", EnemyManager = (_dec = ccclass("EnemyManager"), _dec2 = property(Prefab), _dec3 = property(Number), _dec4 = property(Number), _dec5 = property(Number), _dec6 = property(Number), _dec7 = property(Number), _dec8 = property(_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
        error: Error()
      }), GameManager) : GameManager), _dec(_class = (_class2 = class EnemyManager extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "enemyPrefab", _descriptor, this);

          _initializerDefineProperty(this, "poolSize", _descriptor2, this);

          _initializerDefineProperty(this, "spawnRangeX", _descriptor3, this);

          _initializerDefineProperty(this, "spawnRangeY", _descriptor4, this);

          _initializerDefineProperty(this, "moveSpeed", _descriptor5, this);

          _initializerDefineProperty(this, "zOffset", _descriptor6, this);

          _initializerDefineProperty(this, "gameManager", _descriptor7, this);

          this.activeEnemies = new Set();
          this.spawnDepth = 0;
          this.enemyPool = [];
        }

        onLoad() {// this.initializeEnemyPool();
          // this.spawnAllEnemies();
        }

        initializeEnemyPool() {
          for (let i = 0; i < this.poolSize; i++) {
            const enemy = instantiate(this.enemyPrefab);
            enemy.active = false;
            this.node.addChild(enemy);
            this.enemyPool.push(enemy);
          }

          console.log(this.enemyPool);
        }

        spawnAllEnemies() {
          let currentZ = this.spawnDepth;

          for (const enemy of this.enemyPool) {
            const spawnPos = new Vec3(randomRange(-this.spawnRangeX, this.spawnRangeX), randomRange(-this.spawnRangeY, this.spawnRangeY), currentZ);
            enemy.setPosition(spawnPos);
            enemy.active = true;
            this.activeEnemies.add(enemy);
            currentZ -= this.zOffset; // Bir sonraki düşmanın z ekseninde -1 geride olmasını sağla
          }
        }

        returnEnemyToPool(enemy) {
          enemy.active = false;
          this.activeEnemies.delete(enemy);
          this.enemyPool.push(enemy);
        }

        update(dt) {
          if (this.gameManager && this.gameManager.currentState === (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).GAME_START) {// this.activeEnemies.forEach((enemy) => {
            //   const position = enemy.getPosition();
            //   position.z += this.moveSpeed * dt;
            //   enemy.setPosition(position);
            //   if (position.z > 2) {
            //     this.returnEnemyToPool(enemy);
            //   }
            // });
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "enemyPrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "poolSize", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 10;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "spawnRangeX", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 1;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "spawnRangeY", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 1;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "moveSpeed", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 3;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "zOffset", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 2;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "gameManager", [_dec8], {
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
//# sourceMappingURL=0112b46f3fdc41fc15e6a28d6e62b89f9680fec6.js.map