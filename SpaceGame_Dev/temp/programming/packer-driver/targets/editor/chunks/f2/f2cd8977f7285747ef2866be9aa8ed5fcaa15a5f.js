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

      ({
        ccclass,
        property
      } = _decorator);

      _export("EnemyManager", EnemyManager = (_dec = ccclass("EnemyManager"), _dec2 = property(_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
        error: Error()
      }), GameManager) : GameManager), _dec3 = property(Prefab), _dec4 = property(Number), _dec5 = property(Number), _dec6 = property(Number), _dec7 = property(Number), _dec8 = property(Number), _dec(_class = (_class2 = class EnemyManager extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "gameManager", _descriptor, this);

          _initializerDefineProperty(this, "enemyPrefab", _descriptor2, this);

          _initializerDefineProperty(this, "poolSize", _descriptor3, this);

          _initializerDefineProperty(this, "spawnRangeX", _descriptor4, this);

          _initializerDefineProperty(this, "spawnRangeY", _descriptor5, this);

          _initializerDefineProperty(this, "zOffset", _descriptor6, this);

          _initializerDefineProperty(this, "moveSpeed", _descriptor7, this);

          this.initialPosZ = -20;
          this.spawnDepth = 0;
          this.enemyPool = [];
        }

        onLoad() {
          this.initializeEnemyPool();
          this.spawnAllEnemies();
        }

        initializeEnemyPool() {
          for (let i = 0; i < this.poolSize; i++) {
            const enemy = instantiate(this.enemyPrefab);
            enemy.active = true;
            this.node.addChild(enemy);
            this.enemyPool.push(enemy);
          }
        }

        spawnAllEnemies() {
          let positionZ = this.initialPosZ;
          this.enemyPool.forEach(enemy => {
            const spawnPos = new Vec3(randomRange(-this.spawnRangeX, this.spawnRangeX), randomRange(-this.spawnRangeY, this.spawnRangeY), positionZ);
            enemy.setPosition(spawnPos);
            positionZ -= this.zOffset;
          });
        }

        resetEnemy(enemy) {
          // const newPositionZ = this.getFarthestEnemyZ() - this.zOffset;
          const spawnPos = new Vec3(randomRange(-this.spawnRangeX, this.spawnRangeX), randomRange(-this.spawnRangeY, this.spawnRangeY), this.getFarthestEnemyZ() - this.zOffset);
          enemy.setPosition(new Vec3(spawnPos));
        }

        getFarthestEnemyZ() {
          return Math.min(...this.enemyPool.map(enemy => enemy.getPosition().z));
        }

        resetEnemyPool() {
          this.spawnAllEnemies();
        }

        update(dt) {
          if (!this.gameManager || this.gameManager.currentState != (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).GAME_RUNNING) return;
          this.enemyPool.forEach(enemy => {
            const position = enemy.getPosition();
            position.z += this.moveSpeed * dt * this.gameManager.difficultyMultiplier;
            enemy.setPosition(position);

            if (position.z > 5) {
              this.resetEnemy(enemy);
            }
          });
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "gameManager", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "enemyPrefab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "poolSize", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 10;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "spawnRangeX", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 1;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "spawnRangeY", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 1;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "zOffset", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 10;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "moveSpeed", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 20;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f2cd8977f7285747ef2866be9aa8ed5fcaa15a5f.js.map