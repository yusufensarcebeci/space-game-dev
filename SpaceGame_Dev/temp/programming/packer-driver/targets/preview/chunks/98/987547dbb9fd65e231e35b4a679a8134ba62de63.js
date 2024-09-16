System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, _dec, _class, _crd, ccclass, property, Camera;

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

      _cclegacy._RF.push({}, "53583ls35dGq7cpay2Ucgm2", "Camera", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Camera", Camera = (_dec = ccclass("Camera"), _dec(_class = class Camera extends Component {//   offset: Vec3 = new Vec3(0, 5, 10);
        //   private tempVec3: Vec3 = new Vec3();
        //   public follow(target: Node) {
        //     if (!target) return;
        //     Vec3.add(this.tempVec3, target.worldPosition, this.offset);
        //     this.node.setPosition(this.tempVec3);
        //   }
      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=987547dbb9fd65e231e35b4a679a8134ba62de63.js.map