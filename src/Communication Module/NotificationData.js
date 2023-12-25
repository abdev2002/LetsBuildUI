// Function to generate random notifications
function generateNotification() {
  const categories = [
    "General",
    "Urgent",
    "Reminder",
    "Promotional",
    "Update",
    "Announcement",
  ];

  const titles = [
    "New Message",
    "Meeting Reminder",
    "Special Offer",
    "System Update",
    "Event Notification",
    "Important Announcement",
  ];

  const descriptions = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing  sit amet, consectetur adipiscing elit",
    "Praesent vel nisi eu sem varius u  sit amet, consectetur adipiscing elit.",
    "Nullam molestie massa in ex convallis, ac aliquam elit luctus.",
    "Fusce sit amet quam non nisi convallis s sit amet, consectetur adipiscing elit.",
    "Vivamus volutpat justo nec accumsan cong  sit amet, consectetur adipiscing elit.",
  ]
  
  const randomCategory =
    categories[Math.floor(Math.random() * categories.length)];
  const randomTitle = titles[Math.floor(Math.random() * titles.length)];
  const randomDescription =
    descriptions[Math.floor(Math.random() * descriptions.length)];

  return {
    // category: randomCategory,
    title: randomTitle,
    description: randomDescription,
  };
}

// Generating 20 random notifications
const notifications = [];
for (let i = 0; i < 20; i++) {
  const notification = generateNotification();
  notifications.push(notification);
}

export default notifications;
