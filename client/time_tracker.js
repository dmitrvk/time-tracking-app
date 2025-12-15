export class TimeTracker {
	constructor() {
  	this.state = "stopped";
  }

  getState() {
    return this.state;
  }

  start() {
    this.state = 'running';
  }
}
