// Arrays of sample words for generating names
const firstNames = [
  "Alice",
  "Bob",
  "Charlie",
  "David",
  "Emma",
  "Frank",
  "Grace",
  "Henry",
];
const lastNames = [
  "Johnson",
  "Smith",
  "Williams",
  "Brown",
  "Davis",
  "Miller",
  "Wilson",
  "Moore",
];

// Function to generate a random name
export function generateRandomName() {
  const randomFirstName =
    firstNames[Math.floor(Math.random() * firstNames.length)];
  const randomLastName =
    lastNames[Math.floor(Math.random() * lastNames.length)];
  return `${randomFirstName} ${randomLastName}`;
}

// Example usage
// const randomName = generateRandomName();
// console.log("Random Name:", randomName);

// Arrays of words for different parts of a sentence
const subjects = ['The cat', 'A dog', 'My friend', 'The sun'];
const verbs = ['jumps', 'runs', 'sleeps', 'eats'];
const objects = ['on the mat', 'under the tree', 'with a toy', 'in the garden'];

// Function to generate a random sentence
export function generateRandomSentence() {
  const randomSubject = subjects[Math.floor(Math.random() * subjects.length)];
  const randomVerb = verbs[Math.floor(Math.random() * verbs.length)];
  const randomObject = objects[Math.floor(Math.random() * objects.length)];

  const randomSentence = `${randomSubject} ${randomVerb} ${randomObject}.`;
  return randomSentence;
}

// Example usage
// const randomSentence = generateRandomSentence();
// console.log(randomSentence);
