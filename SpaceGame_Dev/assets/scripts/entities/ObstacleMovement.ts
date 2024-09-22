import { _decorator, Component, Node } from "cc";
import { GameManager, GameState } from "../core/GameManager";
const { ccclass, property } = _decorator;

@ccclass("ObstacleMovement")
export class ObstacleMovement extends Component {
  @property(GameManager) gameManager: GameManager = null;
  @property(Number) moveSpeed: number = 20;

  // public obstacleMovement(obsPool: [Node], dt: number): void {
  //   obsPool.forEach((obstacle) => {
  //     const position = obstacle.getPosition();
  //     position.z += this.moveSpeed * dt * this.gameManager.difficultyMultiplier;
  //     obstacle.setPosition(position);

  //     // if (position.z > 5) {
  //     //   this.resetObstacle(obstacle);
  //     // }
  //   });
  // }

  // public checkObstaclePosZ(pos: number): void {
  //   if (position.z > 5) {
  //     this.resetObstacle(obstacle);
  //   }
  // }
}
