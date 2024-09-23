import {
  _decorator,
  Component,
  instantiate,
  Node,
  Prefab,
  Quat,
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

  private initializeObstaclePool(): void {
    for (let i = 0; i < this.poolSize; i++) {
      const obstacle = instantiate(this.obstaclePrefab);
      obstacle.active = true;
      this.node.addChild(obstacle);
      this.obstaclePool.push(obstacle);
    }
  }

  private spawnAllEnemies(): void {
    let positionZ = this.initialPosZ;
    this.obstaclePool.forEach((obstacle) => {
      const spawnPos = new Vec3(
        randomRange(-this.spawnRangeX, this.spawnRangeX),
        randomRange(-this.spawnRangeY, this.spawnRangeY),
        positionZ
      );
      const spawnRot = new Vec3(
        randomRange(0, 360),
        randomRange(-45, 45),
        randomRange(-45, 45)
      );
      const spawnScale = randomRange(1, 4);

      obstacle.setPosition(spawnPos);
      obstacle.setRotationFromEuler(spawnRot);
      obstacle.setScale(new Vec3(spawnScale, spawnScale, spawnScale));

      positionZ -= this.zOffset;
    });
  }

  private resetObstacle(obstacle: Node): void {
    const spawnScale = randomRange(1.5, 4);
    const spawnPos = new Vec3(
      randomRange(-this.spawnRangeX, this.spawnRangeX),
      randomRange(-this.spawnRangeY, this.spawnRangeY),
      this.getFarthestObstacle() - this.zOffset
    );
    obstacle.setPosition(new Vec3(spawnPos));
    obstacle.setScale(new Vec3(spawnScale, spawnScale, spawnScale));
  }

  private getFarthestObstacle(): number {
    return Math.min(
      ...this.obstaclePool.map((obstacle) => obstacle.getPosition().z)
    );
  }

  public resetObstaclePool(): void {
    this.spawnAllEnemies();
  }

  private isGameRunning(): boolean {
    return this.gameManager?.currentState === GameState.GAME_RUNNING;
  }

  private rotateInRuntime(obstacle: Node, dt: number): void {
    const currentQuat = obstacle.getRotation();
    const rotationSpeed = 50 * dt;
    const rotationQuat = Quat.fromEuler(new Quat(), rotationSpeed, 0, 0);
    const newQuat = Quat.multiply(new Quat(), currentQuat, rotationQuat);
    obstacle.setRotation(newQuat);
  }

  protected update(dt: number): void {
    if (!this.isGameRunning()) return;

    this.obstaclePool.forEach((obstacle) => {
      const position = obstacle.getPosition();
      position.z += this.moveSpeed * dt * this.gameManager.difficultyMultiplier;
      obstacle.setPosition(position);

      this.rotateInRuntime(obstacle, dt);

      if (position.z > 5) {
        this.resetObstacle(obstacle);
      }
    });
  }
}
