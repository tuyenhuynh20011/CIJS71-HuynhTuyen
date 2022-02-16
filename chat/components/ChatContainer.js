import ActiveConversationTitle from "./ActiveConversationTitle.js";
// import Chatbox from "./Chatbox.js";
class ChatContainer {
  constructor() {
    this.$chatContainer = document.createElement("div");
    this.$chatContainer.setAttribute("class", "w-3/4 h-screen border");
    this.$activeConversationTitle = new ActiveConversationTitle();
    // this.$chatbox = new Chatbox();
  }
  render(mainContainer) {
    this.$activeConversationTitle.render(this.$chatContainer);
    // this.$chatbox.render(this.$chatbox);
    mainContainer.appendChild(this.$chatContainer);
    // mainContainer.appendChild(this.$chatbox)
  }
}

export default ChatContainer;