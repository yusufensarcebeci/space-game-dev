System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, _dec, _class, _crd, ccclass, property, ColliderManager;

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

      _cclegacy._RF.push({}, "67fb6RxzGZIvLp5tjo7FuNO", "ColliderManager", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ColliderManager", ColliderManager = (_dec = ccclass('ColliderManager'), _dec(_class = class ColliderManager extends Component {
        start() {
          const collider = this.getComponent(Collider);

          if (collider) {
            // Çarpışma başladığında tetiklenir
            collider.on('onCollisionEnter', this.onCollisionEnter, this); // Çarpışma devam ederken tetiklenir

            collider.on('onCollisionStay', this.onCollisionStay, this); // Çarpışma bittiğinde tetiklenir

            collider.on('onCollisionExit', this.onCollisionExit, this);
          }
        }

        onCollisionEnter(event) {
          console.log('Collision started with: ', event.otherCollider.node.name);
        }

        onCollisionStay(event) {
          console.log('Collision ongoing with: ', event.otherCollider.node.name);
        }

        onCollisionExit(event) {
          console.log('Collision ended with: ', event.otherCollider.node.name);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d53212b0f13cef94eacfa94f333f7e4303c7cfcc.js.map