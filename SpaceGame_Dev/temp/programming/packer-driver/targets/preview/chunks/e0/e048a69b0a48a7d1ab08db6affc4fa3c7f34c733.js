System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, instantiate, Prefab, Vec3, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, SceneFrame;

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
      Vec3 = _cc.Vec3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "495f5RdAXVC7bmV7pX+jFxl", "SceneFrame", undefined);

      __checkObsolete__(['_decorator', 'Component', 'instantiate', 'Node', 'Prefab', 'Vec2', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("SceneFrame", SceneFrame = (_dec = ccclass("SceneFrame"), _dec2 = property(Prefab), _dec3 = property(Number), _dec4 = property(Number), _dec5 = property(Number), _dec(_class = (_class2 = class SceneFrame extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "framePrefab", _descriptor, this);

          _initializerDefineProperty(this, "poolSize", _descriptor2, this);

          _initializerDefineProperty(this, "zOffset", _descriptor3, this);

          _initializerDefineProperty(this, "moveSpeed", _descriptor4, this);

          this.tempVec3 = new Vec3(0, 0, 0);
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

          console.log(this.framePool);
        }

        spawnFrame() {
          this.framePool.forEach(frame => {
            frame.setPosition(this.tempVec3.set(0, 0, this.zOffset));
            this.zOffset -= 10;
          });
        }

        update(deltaTime) {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "framePrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "poolSize", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 100;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "zOffset", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 10;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "moveSpeed", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 3;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e048a69b0a48a7d1ab08db6affc4fa3c7f34c733.js.map