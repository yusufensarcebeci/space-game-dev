import { _decorator, Component, instantiate, Node, Prefab, Vec3 } from "cc";
import { GameManager, GameState } from "../core/GameManager";
const { ccclass, property } = _decorator;

@ccclass("PathSegment")
export class PathSegment extends Component {
  @property(GameManager) gameManager: GameManager = null;
  @property(Prefab) segmentPrefab: Prefab = null;
  @property(Number) poolSize: number = 0;
  @property(Number) zOffset: number = 0;
  @property(Number) moveSpeed: number = 0;

  initialPosZ: number = -10;

  private segmentPool: Node[] = [];

  protected onLoad(): void {
    this.initializeSegmentPool();
    this.spawnAllSegments();
  }

  private initializeSegmentPool(): void {
    for (let i = 0; i < this.poolSize; i++) {
      const segment = instantiate(this.segmentPrefab);
      segment.active = true;
      this.node.addChild(segment);
      this.segmentPool.push(segment);
    }
  }

  private spawnAllSegments(): void {
    let positionZ = this.initialPosZ;
    this.segmentPool.forEach((segment) => {
      segment.setPosition(new Vec3(0, 0, positionZ));
      positionZ -= this.zOffset;
    });
  }

  private resetSegment(segment: Node): void {
    const newPositionZ = this.getFarthestSegment() - this.zOffset;
    segment.setPosition(new Vec3(0, 0, newPositionZ));
  }

  private getFarthestSegment(): number {
    return Math.min(
      ...this.segmentPool.map((segment) => segment.getPosition().z)
    );
  }

  public resetSegmentPool() {
    this.spawnAllSegments();
  }

  protected update(dt: number): void {
    if (
      !this.gameManager ||
      this.gameManager.currentState != GameState.GAME_RUNNING
    )
      return;
    this.segmentPool.forEach((segment) => {
      const position = segment.getPosition();
      position.z += this.moveSpeed * dt * this.gameManager.difficultyMultiplier;
      segment.setPosition(position);

      if (position.z > 5) {
        this.resetSegment(segment);
      }
    });
  }
}
