# Multi-room Chat Server

A functional multi-room chat server, created using Node.js, allowing users to create/join group chats. Socket.IO was used on the backend to support multiple users and javascript was used on the front end to display the available rooms, discussions, etc. The following features have been implemented:

Features:
  - Users can create chat rooms with an arbitrary room name
  - Users can join an arbitrary chat room
  - The chat room displays all users currently in the room 
  - A private room can be created that is password protected
  - Creators of chat rooms can temporarily kick others out of the room
  - Creators of chat rooms can permanently ban users from joining that particular room
  - A user's message shows their username and is sent to everyone in the room
  - Users can send private messages to another user in the same room
  - The creator of a chat can kick a user for an arbitrary amount of time. When banning a user, the creator can input a number of minutes for the specified user to be     banned in the optional box. Once this time runs out, the user can rejoin the room. If no amount of time is given, the user will be permanently banned. 
  - Shortcut/spellcheck feature to the messaging - if a user types in certain messaging shortcuts, it will be corrected to its full version in the chat. For example, if a user types in "I will brb.", the chat will read "I will be right back." The following shortcuts have been implemented: brb = be right back, smh = shaking my head, omw = on my way, np = no problem, and ttyl = talk to you later.
