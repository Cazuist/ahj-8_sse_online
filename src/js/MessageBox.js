export default class MessageBox {
  constructor({ content, time, type }) {
    this.content = content;
    this.time = time;
    this.type = type;
  }

  createHtml() {
    return `
      <div class="message-box" data-type="${this.type}">
        <div class="icon-box"></div>
        <div class="message-wrapper">
          <div class="message-time">${this.time}</div>
          <div class="message-content">${this.content}</div>
        </div>
      </div>
    `;
  }

  bindToDOM(container) {
    container.insertAdjacentHTML('beforeend', this.createHtml());
  }
}
