System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Quat, Vec3, _dec, _class, _crd, ccclass, property, Camera;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Quat = _cc.Quat;
      Vec3 = _cc.Vec3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "53583ls35dGq7cpay2Ucgm2", "Camera", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Quat', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Camera", Camera = (_dec = ccclass("Camera"), _dec(_class = class Camera extends Component {
        constructor() {
          super(...arguments);
          this.posOffset = new Vec3(0, 1, 4);
          this.rotOffset = new Quat(-9, 0, 0, 1);
          this.tempVec3 = new Vec3();
        }

        start() {
          this.node.setRotation(this.rotOffset);
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
//# sourceMappingURL=d4011dd1d8f7bfe5204bbfa2b95a0ede4d763318.js.map