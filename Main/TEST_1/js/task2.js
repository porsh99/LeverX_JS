var parentContainerIDName = "chats-container";

var divImageBoxClassName = "chat-image-box";
var divTextBoxClassName = "chat-text-box";

var chatClassName = "chat";

var chatHeaderClassName = "chat-header";
var chatLastMessageClassName = "chat-last-message";

var headerTextContent = "Name Surname";
var lastMessageContent = " Last message...";
var chatImageSource = "img/car1.jpg";




function generateChats() {

	for (var i = 0; i < 10; i++) {
		generateChat(parentContainerIDName);
	}
}

function generateChat(parentContainerID) {

	var parentContainer = document.getElementById(parentContainerID);
	//console.log(parentContainer);

	var headerText = document.createElement("text");
    var lastMessageText = document.createElement("text");
    var chatImage = document.createElement("img");

	var chat = document.createElement("div");

	var divImageBox = document.createElement("div");
    var divChatTextBox = document.createElement("div");
    
	var divChatHeader = document.createElement("div");
	var divChatLastMessage = document.createElement("div");


	chat.setAttribute("class", chatClassName);

    divImageBox.setAttribute("class", divImageBoxClassName);
    divChatTextBox.setAttribute("class", divTextBoxClassName);
    chatImage.setAttribute("src", chatImageSource);

    divChatHeader.setAttribute("class", chatHeaderClassName);
    divChatLastMessage.setAttribute("class", chatLastMessageClassName);

	divChatHeader.appendChild(headerText);
    divChatLastMessage.appendChild(lastMessageText);
    
    divChatTextBox.appendChild(divChatHeader);
    divChatTextBox.appendChild(divChatLastMessage);

    divImageBox.appendChild(chatImage);
    

	chat.appendChild(divImageBox);
	chat.appendChild(divChatTextBox);

	parentContainer.appendChild(chat);

	headerText.outerHTML = headerTextContent;
	lastMessageText.outerHTML = lastMessageContent;
}