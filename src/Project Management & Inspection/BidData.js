// Function to generate random construction-related Bids
function generateBid() {
  const titles = [
    "Civil Engineer",
    "Architect",
    "Quantity Surveyor",
    "Construction Manager",
    "Structural Engineer",
    "Electrician",
    "Plumber",
    "Land Surveyor",
  ];

  const durations = ["3 months", "6 months", "1 year", "2 years"];

  const skills = [
    ["AutoCAD", "Construction Management", "Structural Analysis"],
    ["Building Design", "Interior Design", "SketchUp"],
    ["Cost Estimation", "Quantity Takeoff", "Construction Law"],
    ["Project Planning", "Team Management", "Risk Assessment"],
    ["Structural Analysis", "Seismic Design", "Foundation Engineering"],
    ["Wiring", "Electrical Systems", "Safety Procedures"],
    ["Pipe Fitting", "Fixture Installation", "Maintenance"],
    ["Land Measurement", "GPS Surveying", "Mapping Software"],
  ];

  const descriptions = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Praesent vel nisi eu sem varius ultrices.",
    "Nullam molestie massa in ex convallis, ac aliquam elit luctus.",
    "Fusce sit amet quam non nisi convallis semper.",
    "Vivamus volutpat justo nec accumsan congue.",
  ];

  const budgets = [
    "50,000 - 100,000 PKR",
    "100,000 - 200,000 PKR",
    "200,000 - 300,000 PKR",
  ];

  const randomTitle = titles[Math.floor(Math.random() * titles.length)];
  const randomDuration =
    durations[Math.floor(Math.random() * durations.length)];
  const randomSkills = skills[Math.floor(Math.random() * skills.length)];
  const randomDescription =
    descriptions[Math.floor(Math.random() * descriptions.length)];
  const randomBudget = budgets[Math.floor(Math.random() * budgets.length)];

  return {
    title: randomTitle,
    duration: randomDuration,
    skills: randomSkills,
    description: randomDescription,
    budget: randomBudget,
  };
}

// Generating 20 construction-related Bids
const Bids = [];
for (let i = 0; i < 20; i++) {
  const Bid = generateBid();
  Bids.push(Bid);
}

// Outputting the list of 20 Bids
// console.log(Bids);
export default Bids;
