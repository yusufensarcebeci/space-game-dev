import { _decorator, Component, Enum } from "cc";

const { ccclass, property } = _decorator;

export enum GameState {
  LOADING,
  INIT,
  GAME_RUNNING,
  GAME_OVER,
}

@ccclass("GameManager")
export class GameManager extends Component {
  @property({ type: Enum(GameState) })
  currentState: GameState = GameState.LOADING;

  @property(Number) difficultyMultiplier: number = 1;
  @property(Number) difficultyIncreaseRate: number = 0.01;
  @property(Number) maxDifficulty: number = 5;

  public setState(newState: GameState): void {
    this.currentState = newState;
    console.warn("Current Game State: ", GameState[this.currentState]);
  }

  public resetDifficulty(): void {
    this.difficultyMultiplier = 1;
  }

  private increaseDifficulty(dt: number): void {
    if (this.difficultyMultiplier > this.maxDifficulty) return;
    this.difficultyMultiplier += this.difficultyIncreaseRate * dt;
  }

  protected update(dt: number): void {
    if (this.currentState === GameState.GAME_RUNNING) {
      this.increaseDifficulty(dt);
    }
  }
}
