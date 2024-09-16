System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, Node, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, ScoreHandler;

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
      Label = _cc.Label;
      Node = _cc.Node;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "99e2evhCZJH55WpCfRdl96n", "ScoreHandler", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ScoreHandler", ScoreHandler = (_dec = ccclass("ScoreHandler"), _dec2 = property(Node), _dec3 = property(Number), _dec4 = property(Number), _dec(_class = (_class2 = class ScoreHandler extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "scoreLabel", _descriptor, this);

          _initializerDefineProperty(this, "score", _descriptor2, this);

          _initializerDefineProperty(this, "incrementInterval", _descriptor3, this);

          // İncrement aralığı (saniye)
          this.elapsedTime = 0;
        }

        getScore() {
          return this.score;
        }

        resetScore() {
          this.score = 0;
          return this.score;
        }

        update(dt) {
          this.elapsedTime += dt;

          if (this.elapsedTime >= this.incrementInterval) {
            this.elapsedTime -= this.incrementInterval;
            this.incrementScore();
            this.updateScoreLabel();
          }
        }

        incrementScore() {
          this.score += 1;
          console.log("Score: ", this.score);
        }

        updateScoreLabel() {
          if (this.scoreLabel) {
            var label = this.scoreLabel.getComponent(Label);

            if (label) {
              label.string = "" + this.score;
            }
          }
        } //   public addScore(currentscore: number, value: number) {
        //     return (currentscore += value);
        //   }


      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "scoreLabel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "score", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "incrementInterval", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=eb122f712770a424567356f00ba276f99645ab40.js.map