System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, ScoreHandler;

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
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "99e2evhCZJH55WpCfRdl96n", "ScoreHandler", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ScoreHandler", ScoreHandler = (_dec = ccclass("ScoreHandler"), _dec2 = property(Number), _dec3 = property(Number), _dec(_class = (_class2 = class ScoreHandler extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "score", _descriptor, this);

          _initializerDefineProperty(this, "incrementInterval", _descriptor2, this);

          // İncrement aralığı (saniye)
          this.elapsedTime = 0;
        }

        update(dt) {
          this.elapsedTime += dt;

          if (this.elapsedTime >= this.incrementInterval) {
            this.elapsedTime -= this.incrementInterval; // Süreyi sıfırla

            this.incrementScore();
          }
        }

        incrementScore() {
          this.score += 1;
          console.log("Score: ", this.score); // Skoru kontrol etmek için
        }

        getScore() {
          return this.score;
        } //   public addScore(currentscore: number, value: number) {
        //     return (currentscore += value);
        //   }


      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "score", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "incrementInterval", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 1;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=97ac40ecff26573255da4b6a5c4c21e0926adbf1.js.map