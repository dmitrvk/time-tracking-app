export class TimeTracker {
  state: string

  constructor() {
    this.state = 'stopped'
  }

  getState(): string {
    return this.state
  }

  start() {
    this.state = 'running'
  }

  stop() {
    this.state = 'stopped'
  }
}
