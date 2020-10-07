import MessageBox from './MessageBox';

export default class Listeners {
  static onBtnClick(event) {
    const target = event.target;

    if (target.classList.contains('connect-btn')) {
      this.eventSource = new EventSource(this.url);
      this.addEventSourceListeners();
      target.textContent = 'Disconnect';
    } else {
      this.eventSource.close();
      this.eventSource = null;
      target.textContent = 'Connect';
    }   

    this.statusBox.classList.toggle('disconnected');
    target.classList.toggle('connect-btn');
  }

  static onEvtSrcMessage(event) {    
    const data = JSON.parse(event.data);
    const box = new MessageBox(data);    
    box.bindToDOM(this.msgBox);

    this.msgBox.scrollTop = 999999;
  }

  static onEvtSrcOpen(event) {
    //console.log(event.data);
  }

  static onEvtSrcError(event) {
    //console.log('error');
  }
}
