System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, BoxCollider, Component, UIManager, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, ColliderHandler;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfUIManager(extras) {
    _reporterNs.report("UIManager", "./UIManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      BoxCollider = _cc.BoxCollider;
      Component = _cc.Component;
    }, function (_unresolved_2) {
      UIManager = _unresolved_2.UIManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "67fb6RxzGZIvLp5tjo7FuNO", "ColliderHandler", undefined);

      __checkObsolete__(['_decorator', 'BoxCollider', 'Component', 'ICollisionEvent', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ColliderHandler", ColliderHandler = (_dec = ccclass("ColliderHandler"), _dec2 = property(_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
        error: Error()
      }), UIManager) : UIManager), _dec(_class = (_class2 = class ColliderHandler extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "uIManager", _descriptor, this);
        }

        start() {
          var collider = this.node.getComponent(BoxCollider);
          collider.on('onTriggerEnter', this.onCollisionEnter, this);
        }

        onCollisionEnter(event) {
          this.uIManager.handleEndScreen(); // console.log(event.type, event);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "uIManager", [_dec2], {
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
//# sourceMappingURL=c15c50a0f71e04e513fc9df157a7e4931275f539.js.map