System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, instantiate, Prefab, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, EnemyManager;

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
      instantiate = _cc.instantiate;
      Prefab = _cc.Prefab;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b73b3AJ+nxMoJqsoNFo9LFq", "EnemyManager", undefined);

      __checkObsolete__(['_decorator', 'Component', 'instantiate', 'Node', 'Prefab', 'randomRange', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("EnemyManager", EnemyManager = (_dec = ccclass("EnemyManager"), _dec2 = property(Prefab), _dec3 = property(Number), _dec4 = property(Number), _dec5 = property(Number), _dec(_class = (_class2 = class EnemyManager extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "enemyPrefab", _descriptor, this);

          _initializerDefineProperty(this, "poolSize", _descriptor2, this);

          _initializerDefineProperty(this, "spawnRangeX", _descriptor3, this);

          _initializerDefineProperty(this, "spawnRangeY", _descriptor4, this);

          this.spawnDepth = 0;
          this.enemyPool = [];
        }

        onLoad() {
          this.initializeEnemyPool();
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
          return 20;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "spawnRangeY", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 10;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c2c3fb7cd45b6d849545b7cf824b2e49830e53c1.js.map