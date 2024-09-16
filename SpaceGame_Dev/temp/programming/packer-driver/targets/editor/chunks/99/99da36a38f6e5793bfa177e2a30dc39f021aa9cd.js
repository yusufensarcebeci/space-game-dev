System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Vec3, _dec, _class, _crd, ccclass, property, Camera;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Vec3 = _cc.Vec3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "53583ls35dGq7cpay2Ucgm2", "Camera", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Camera", Camera = (_dec = ccclass("Camera"), _dec(_class = class Camera extends Component {
        constructor(...args) {
          super(...args);
          this.posOffset = new Vec3(0, 1.5, 4);
          this.rotOffset = new Vec3(-10, 0, 0);
          this.tempVec3 = new Vec3();
        }

        start() {
          this.node.setRotationFromEuler(this.rotOffset);
        }

        follow(target) {
          if (!target) return;
          Vec3.add(this.tempVec3, target.worldPosition, this.posOffset);
          this.node.setPosition(this.tempVec3);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=99da36a38f6e5793bfa177e2a30dc39f021aa9cd.js.map