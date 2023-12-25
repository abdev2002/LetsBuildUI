// Function to generate random messages
function generateMessage() {
  const names = [
    "Alice",
    "Bob",
    "Charlie",
    "David",
    "Eva",
    "Frank",
    "Grace",
    "Henry",
    "Ivy",
    "Jack",
  ];

  const latestMessages = [
    "Hello!",
    "How are you?",
    "What's up?",
    "Have you seen this?",
    "Check this out!",
    "Don't forget the meeting.",
    "Reminder: Event tomorrow!",
    "Let's catch up soon.",
    "Call me when you can.",
    "Important update!",
  ];

  const images = [
    "../../assets/abdullah.png",
  ];

  const randomName = names[Math.floor(Math.random() * names.length)];
  const randomLatestMessage =
    latestMessages[Math.floor(Math.random() * latestMessages.length)];
  const randomImage = images[Math.floor(Math.random() * images.length)];
  const unseenMessages = Math.floor(Math.random() * 10); // Random number of unseen messages
  const isSeen = Math.random() < 0.5; // Random boolean for seen/unseen

  return {
    name: randomName,
    latestMessage: randomLatestMessage,
    image: randomImage,
    unseenMessages: unseenMessages,
    seen: isSeen,
  };
}

// Generating 20 random messages
const messages = [];
for (let i = 0; i < 20; i++) {
  const message = generateMessage();
  messages.push(message);
}

export default messages;
