var parentContainerIDName = "chats-container";

var divImageBoxClassName = "chat-image-box";
var divTextBoxClassName = "chat-text-box";

var chatClassName = "chat";

var chatHeaderClassName = "chat-header";
var chatLastMessageClassName = "chat-last-message";

var headerTextContent = "Name Surname";
var lastMessageContent = " Last message...";
var chatImageSource = "img/car1.jpg";



var parentMessageContainerName = "chat-messages-container";




function generateChats() {

	for (var i = 0; i < 10; i++) {
		generateChat(parentContainerIDName);
		generateChatMessages(parentMessageContainerName);
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

function generateChatMessages(parentContainerID) {
	var parentContainer = document.getElementById(parentContainerID);

	var divMessageBox = document.createElement("div");
	var divMessageImageBox = document.createElement("div");
	var divTryangleBox = document.createElement("div");
	var divMessageTextBox = document.createElement("div");

	var messageImage = document.createElement("img");
	var tryangleContainer = document.createElement("svg");
	var messageText = document.createElement("text");

	divMessageBox.setAttribute("class", "message-box");
	divMessageImageBox.setAttribute("class", "message-image-box");
	divTryangleBox.setAttribute("class", "triangle-container");
	divMessageTextBox.setAttribute("class", "message-text-box");

	var poligon = document.createElement("polygon");
	poligon.setAttribute("class", "message-box");

	poligon.setAttribute("points", "13,0 0,10 13,10");
	tryangleContainer.appendChild(poligon);
	divTryangleBox.appendChild(tryangleContainer);

	messageImage.setAttribute("src", "img/car3.jpg");
	divMessageImageBox.appendChild(messageImage);

	divMessageTextBox.appendChild(messageText);


	divMessageBox.appendChild(divMessageImageBox);
	divMessageBox.appendChild(divTryangleBox);
	divMessageBox.appendChild(divMessageTextBox);

	

	parentContainer.appendChild(divMessageBox);

	messageText.outerHTML = " Lorem ipsum sit amet consectetur adipsiting elit. Sed magni expedita non in dolor recusandae,repellat officia at, fugit laboriosam incidunt desurant perspicitiantis sint atque eius decimusplaceat necessitatibus coluptatem.";




}