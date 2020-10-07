export default class SSE {
  constructor(url) {
    this.eventSource = new EventSource(url);
  }
}
