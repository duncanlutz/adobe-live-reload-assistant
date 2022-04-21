const socket = io('ws://localhost:12687');

socket.on('welcome', () => {
  chrome.runtime.sendMessage({
    action: 'updateIcon',
    active: 'true'
  })
})

function eventFire(el, etype) {
  if (el.fireEvent) {
    el.fireEvent('on' + etype);
  } else {
    var evObj = document.createEvent('Events');
    evObj.initEvent(etype, true, false);
    el.dispatchEvent(evObj);
  }
}

socket.on('reload', () => {
  eventFire(document.querySelector('.reload'), 'click');
});

socket.on('close', () => {
  socket.emit('close');
  chrome.runtime.sendMessage({
    action: 'updateIcon',
    active: 'false'
  })
})