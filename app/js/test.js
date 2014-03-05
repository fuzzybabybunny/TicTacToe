var messageListRef = new Firebase('https://SampleChat.firebaseIO-demo.com/message_list');
console.log (messageListRef);
lastMessagesQuery = messageListRef.endAt().limit(500);
lastMessagesQuery.on('child_added', function(childSnapshot) { /* handle child add */ });