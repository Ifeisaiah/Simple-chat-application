const textMsg = document.querySelector('.text-input');

const sendMsg = document.querySelector('.send');
sendMsg.addEventListener('click', () => addMessage(textMsg.value));

function addMessage(text) {
  const messageContainer = document.querySelector('#messages-room');
  messageContainer.insertAdjacentHTML(
    'beforeend',
    `<div class="user-msg msg-box">
        <p class="user msg">${text}</p>
        <span class="msg-time" style="margin-right: 10px;">12:45PM</span>
    </div>`
  )
  textMsg.value = '';
  setTimeout(addReply, 2000);
  console.log(messageContainer.lastElementChild)
  scrollChatTo()
}

function addReply() {
  const messageContainer = document.querySelector('#messages-room');
  messageContainer.insertAdjacentHTML(
    'beforeend',
    `<div class="contact-msg msg-box">
        <p class="contact msg">
            Hey, Marshall! How are you? Can you please change the
            color theme of the website to pink and purple?
        </p>
        <p class="contact msg">Send me the files please.</p>
        <span class="msg-time">12:45PM</span>
    </div>`
  )
  console.log(messageContainer.lastElementChild)
  scrollChatTo()

}

const searchInput = document.querySelector('.search-input');
searchInput.addEventListener('input', () => searchContact(searchInput.value))
const chatRoom = document.getElementById('chat-room')

const chats = document.querySelectorAll('.chat');
const chatBox = document.querySelector('.chat-box');

//search for contact
function searchContact(value) {
  chats.forEach(chat => {
    chat.classList.add('hide');
    if (chat.id.toLocaleLowerCase().startsWith(value)
        || chat.id.toLocaleUpperCase().startsWith(value)) {
      chat.classList.remove('hide'); 
    }
  })
}

const messageRoom = document.getElementById('messages-room');
messageRoom.scrollTop = messageRoom.scrollHeight;
document.addEventListener('load', scrollChatTo)

//automatic scrolling in the chat room
function scrollChatTo() {
  messageRoom.scrollTop = messageRoom.scrollHeight;  
}
const chatList = document.getElementById('chat-list');

const collapsedNav = document.querySelector('.collapse-nav-items');
const setting = document.getElementById('setting');
const backToChatBtn = document.querySelector('.back-icon');

collapsedNav.addEventListener('click', showSetting) 

//function to toggle settings
function showSetting() {
  chatList.classList.add('hide');

  setting.classList.remove('hide');
}

backToChatBtn.addEventListener('click', goBackToChat)

//function to go back to chat 
function goBackToChat() {
  setting.classList.add('hide');
  chatList.classList.remove('hide');
  window.innerWidth < 1210 &&  chatBox.addEventListener('click', showChatRoom);
}

const goBackIcon = document.querySelector('.go-back-icon');

// a feature that should only occur at a particular width
window.innerWidth < 1210 &&  chatBox.addEventListener('click', showChatRoom);
window > 1210 && chatBox.removeEventListener('click', showChatRoom);

window.innerWidth < 1210 && goBackIcon.addEventListener('click', showChatList);
window.innerWidth > 1210 && goBackIcon.removeEventListener('click', showChatList)

function showChatList() {
  document.body.style.backgroundColor = '#161a1d';
  chatList.classList.remove('hide');
  chatRoom.classList.add('hidden');
  setting.classList.add('hide');
}
function showChatRoom() {
  document.body.style.backgroundColor = '#0a0908';
  chatRoom.classList.remove('hidden')
  chatList.classList.add('hide');
  setting.classList.add('hide');
  scrollChatTo() 
}
// a resize function to update & and reposition code incase the brower get resized
window.addEventListener('resize', () => {
  if (window.innerWidth > 1210) {
    document.body.style.backgroundColor = '#161a1d';
    chatBox.removeEventListener('click', showChatRoom)
    // console.log('chat room can show')
  } else {
    document.body.style.backgroundColor = '#161a1d';
    chatRoom.classList.add('hidden');
    chatBox.addEventListener('click', showChatRoom)
    goBackIcon.addEventListener('click', showChatList)
    //console.log('chat room should not show')
  } 

  if (window.innerWidth <= 650) {
    chatList.classList.remove('hide');
    collapsedNav.addEventListener('click', showSetting)
    // console.log('setting can show')
  } else {
    setting.classList.add('hide');
    chatList.classList.remove('hide')

    // console.log('setting should not show')
  }
})
