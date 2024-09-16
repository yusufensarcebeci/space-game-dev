System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, _dec, _class, _crd, ccclass, property, TEST;

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

      _cclegacy._RF.push({}, "35edflC8N5JL7lwmVplvsgQ", "TEST", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("TEST", TEST = (_dec = ccclass("TEST"), _dec(_class = class TEST extends Component {
        constructor(...args) {
          super(...args);
          this.positionX = 0;
          this.positionY = 0;
          this.positionZ = 0;
        }

        onLoad() {
          this.positionX = this.node.getPosition().x;
          this.positionY = this.node.getPosition().y;
          this.positionZ = this.node.getPosition().z;
        }

        update(deltaTime) {
          this.positionZ = this.positionZ - deltaTime * 10;
          this.node.setPosition(this.positionX, this.positionY, this.positionZ);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7e05faefd2e913a66a223716376be6c4786a6ac7.js.map