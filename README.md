# Chat Server
464887

464251

Users initially join a "lobby". Private messaging is only allowed when users are in the same room, and it is not allowed in the lobby. General messaging is allowed in the lobby. New users can not initially see who is in the lobby. Once they have joined a group, they can see who is in the room.

Creative Portion:

In addition to just being able to ban or kick a user, the creator of a chat can kick a user for an arbitrary amount of time. When banning a user, the creator can input a number of minutes for the specified user to be banned in the optional box. Once this time runs out, the user can rejoin the room. If no amount of time is given, the user will be permanently banned. 

We also added shortcut/spellcheck feature to the messaging - if a user types in certain messaging shortcuts, it will be corrected to its full version in the chat. For example, if a user types in "I will brb.", the chat will read "I will be right back." This spellcheck works for various cases - if the shortcut is in the beginning of a sentence, in the middle of a sentence, before punctuation, etc, the spellcheck still works. We implemented the following shortcuts: brb = be right back, smh = shaking my head, omw = on my way, np = no problem, and ttyl = talk to you later. You may use multiple shortcuts at a time, but only one of each is allowed per sentence.
