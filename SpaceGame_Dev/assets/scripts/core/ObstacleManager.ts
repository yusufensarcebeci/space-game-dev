import {
  _decorator,
  Component,
  instantiate,
  Node,
  Prefab,
  randomRange,
  Vec3,
} from "cc";
import { GameManager, GameState } from "./GameManager";

const { ccclass, property } = _decorator;

@ccclass("ObstacleManager")
export class ObstacleManager extends Component {
  @property(GameManager) gameManager: GameManager = null;
  @property(Prefab) obstaclePrefab: Prefab = null;
  @property(Number) poolSize: number = 10;
  @property(Number) spawnRangeX: number = 1;
  @property(Number) spawnRangeY: number = 1;
  @property(Number) zOffset: number = 10;
  @property(Number) moveSpeed: number = 20;

  initialPosZ: number = -40;
  spawnDepth: number = 0;

  private obstaclePool: Node[] = [];

  protected onLoad(): void {
    this.initializeObstaclePool();
    this.spawnAllEnemies();
  }

  private initializeObstaclePool() {
    for (let i = 0; i < this.poolSize; i++) {
      const obstacle = instantiate(this.obstaclePrefab);
      obstacle.active = true;
      this.node.addChild(obstacle);
      this.obstaclePool.push(obstacle);
    }
  }

  private spawnAllEnemies() {
    let positionZ = this.initialPosZ;
    this.obstaclePool.forEach((obstacle) => {

      const spawnPos = new Vec3(
        randomRange(-this.spawnRangeX, this.spawnRangeX),
        randomRange(-this.spawnRangeY, this.spawnRangeY),
        positionZ
      );
      const spawnRot = new Vec3(
        randomRange(0, 360),
        randomRange(0, 360),
        randomRange(0, 360)
      );
      const spawnScale = randomRange(1.5, 3)

      obstacle.setPosition(spawnPos);
      obstacle.setRotationFromEuler(spawnRot);
      // console.log(spawnScale,);
      obstacle.setScale(new Vec3(spawnScale,spawnScale,spawnScale));

      positionZ -= this.zOffset;
    });
  }

  private resetObstacle(obstacle: Node) {
    const spawnPos = new Vec3(
      randomRange(-this.spawnRangeX, this.spawnRangeX),
      randomRange(-this.spawnRangeY, this.spawnRangeY),
      this.getFarthestObstacle() - this.zOffset
    );
    obstacle.setPosition(new Vec3(spawnPos));
  }

  private getFarthestObstacle(): number {
    return Math.min(
      ...this.obstaclePool.map((obstacle) => obstacle.getPosition().z)
    );
  }

  public resetObstaclePool() {
    this.spawnAllEnemies();
  }

  private isGameRunning(): boolean {
    return this.gameManager?.currentState === GameState.GAME_RUNNING;
  }

  update(dt: number) {
    if (!this.isGameRunning()) return;

    this.obstaclePool.forEach((obstacle) => {
      const position = obstacle.getPosition();
      position.z += this.moveSpeed * dt * this.gameManager.difficultyMultiplier;
      obstacle.setPosition(position);

      if (position.z > 5) {
        this.resetObstacle(obstacle);
      }
    });
  }
}
