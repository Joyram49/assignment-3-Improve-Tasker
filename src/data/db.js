const initialTasks = [
  {
    id: crypto.randomUUID(),
    title: "Integration API",
    description:
      "Implement a Python solution to synchronize data between an API and a third-party database securely, optimizing data exchange.",
    tags: ["Python", "Web", "Api"],
    priority: "High",
    isFavourite: true,
  },
  {
    id: crypto.randomUUID(),
    title: "API Data Synchronization with Python",
    description:
      "Connect an existing API to a third-party database using secure methods and handle data exchange efficiently.",
    tags: ["web", "python", "Data Synchronization"],
    priority: "High",
    isFavourite: false,
  },
  {
    id: crypto.randomUUID(),
    title: "Efficient Web API Connectivity in Python",
    description:
      "Develop a Python-based solution for connecting an API to a third-party database securely, focusing on efficient data handling and exchange.",
    tags: ["Database", "python", "Api"],
    priority: "Medium",
    isFavourite: false,
  },
  {
    id: crypto.randomUUID(),
    title: "Data Handling",
    description:
      "Integrate a web API with a third-party database using secure methods, focusing on seamless data exchange and data integrity.",
    tags: ["Web", "python", "Security"],
    priority: "Low",
    isFavourite: false,
  },
];

export function getData() {
  return initialTasks;
}
