import Listener from './Listener';

export default class OnlineWidget {
  constructor(url) {
    this.url = url;
    this.eventSource = /* new EventSource(this.url) */null;
    this.msgBox = null;
  }

  init(container) {
    this.bindToDOM(container);
    this.initElements();
    this.registerListeners();
  }

  // eslint-disable-next-line class-methods-use-this
  createHtml() {
    return `
      <div class="manager-box">
        <header class="manager-header">
          <div class="dots">
            <span class="dot dot-1"></span>
            <span class="dot dot-2"></span>
            <span class="dot dot-3"></span>
          </div>

          <h3 class="manager-title">
            BroadcastManager v.1.0
          </h3>
        </header>

        <div class="controls-panel">
          <h3 class="controls-title">
            Select actions
          </h3>

          <div class="controls">
            <div class="control control-action"></div>
            <div class="control control-goals"></div>
            <div class="control control-freekick"></div>
            <div class="control control-violation"></div>
          </div>
        </div> 

        <div class="messages-box">
        </div>

        <div class="connection-control-row">
          <button class="connection-btn connect-btn">Connect</button>
          <div class="status-box disconnected"></div>
        </div>
      </div>
   `;
  }

  bindToDOM(container) {
    container.insertAdjacentHTML('beforeend', this.createHtml());
  }

  registerListeners() {
    this.connBtn.addEventListener('click', (event) => Listener.onBtnClick.call(this, event));
  }

  addEventSourceListeners() {
    this.eventSource.addEventListener('open', (event) => Listener.onEvtSrcOpen(event));
    this.eventSource.addEventListener('message', (event) => Listener.onEvtSrcMessage.call(this, event));
    this.eventSource.addEventListener('error', (event) => Listener.onEvtSrcError(event));
  }

  initElements() {
    this.msgBox = document.querySelector('.messages-box');
    this.connBtn = document.querySelector('.connection-btn');
    this.statusBox = document.querySelector('.status-box');
  }
}
