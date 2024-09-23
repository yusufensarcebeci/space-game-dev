import { _decorator, BoxCollider, Component, ICollisionEvent, Node } from "cc";
import { UIManager } from "../ui/UIManager";

const { ccclass, property } = _decorator;

@ccclass("ColliderHandler")
export class ColliderHandler extends Component {
  @property(UIManager) uIManager: UIManager = null;

  protected start(): void {
    let collider = this.node.getComponent(BoxCollider);
    collider.on("onTriggerEnter", this.onCollisionEnter, this);
  }

  private onCollisionEnter(event: ICollisionEvent): void {
    this.uIManager.handleEndScreen();
    // console.log(event.type, event);
  }
}
