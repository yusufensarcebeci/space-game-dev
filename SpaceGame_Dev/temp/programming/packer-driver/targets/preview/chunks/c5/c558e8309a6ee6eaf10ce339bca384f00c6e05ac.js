System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, BoxCollider, Component, _dec, _class, _crd, ccclass, property, ColliderManager;

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

      _cclegacy._RF.push({}, "22ae7KSanBCBpg4ly/YHm3o", "ColliderManager", undefined);

      __checkObsolete__(['_decorator', 'BoxCollider', 'Component', 'ICollisionEvent', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ColliderManager", ColliderManager = (_dec = ccclass("ColliderManager"), _dec(_class = class ColliderManager extends Component {
        start() {
          var collider = this.getComponent(BoxCollider);

          if (collider) {
            collider.on("onCollisionEnter", this.onCollisionEnter, this); // collider.on('onCollisionStay', this.onCollisionStay, this);
            // collider.on('onCollisionExit', this.onCollisionExit, this);
          }
        }

        onCollisionEnter(event) {
          console.log("Collision started with: ", event.otherCollider.node.name);
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
//# sourceMappingURL=c558e8309a6ee6eaf10ce339bca384f00c6e05ac.js.map