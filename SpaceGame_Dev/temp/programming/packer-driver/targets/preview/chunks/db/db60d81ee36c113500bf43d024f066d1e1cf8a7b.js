System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, BoxCollider, Component, _dec, _class, _crd, ccclass, property, ColliderHandler;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      BoxCollider = _cc.BoxCollider;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "67fb6RxzGZIvLp5tjo7FuNO", "ColliderHandler", undefined);

      __checkObsolete__(['_decorator', 'BoxCollider', 'Component', 'ICollisionEvent', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ColliderHandler", ColliderHandler = (_dec = ccclass("ColliderHandler"), _dec(_class = class ColliderHandler extends Component {
        start() {
          var collider = this.getComponent(BoxCollider);

          if (collider) {
            console.log(collider);
            collider.on("onCollisionEnter", this.onCollisionEnter, this); // collider.on('onCollisionStay', this.onCollisionStay, this);
            // collider.on('onCollisionExit', this.onCollisionExit, this);
          }
        }

        onCollisionEnter(event) {
          console.warn("TEST");
        } // onCollisionStay(event: ICollisionEvent) {
        //     console.log('Collision ongoing with: ', event.otherCollider.node.name);
        // }
        // onCollisionExit(event: ICollisionEvent) {
        //     console.log('Collision ended with: ', event.otherCollider.node.name);
        // }


      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=db60d81ee36c113500bf43d024f066d1e1cf8a7b.js.map