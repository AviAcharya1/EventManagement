let events = [
  {
    id: 1,
    title: "Tech Conference 2024",
    date: "2024-09-15",
    location: "San Francisco, CA",
    description: "Annual conference showcasing the latest in technology trends and innovations.",
    image: "https://via.placeholder.com/800x400?text=Tech+Conference+2024"
  },
  {
    id: 2,
    title: "Summer Music Festival",
    date: "2024-07-01",
    location: "Austin, TX",
    description: "Three-day music festival featuring top artists from various genres.",
    image: "https://via.placeholder.com/800x400?text=Summer+Music+Festival"
  },
  {
    id: 3,
    title: "Global Business Summit",
    date: "2024-11-10",
    location: "New York, NY",
    description: "Bringing together business leaders to discuss global economic trends and opportunities.",
    image: "https://via.placeholder.com/800x400?text=Global+Business+Summit"
  }
];

// ... rest of the eventService.js code remains the same
// Simulated delay to mimic API call latency
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Get all events
export const getEvents = async () => {
  await delay(500); // Simulate network delay
  return [...events];
};

// Get a single event by ID
export const getEventById = async (id) => {
  await delay(300);
  return events.find(event => event.id === id);
};

// Create a new event
export const createEvent = async (eventData) => {
  await delay(700);
  const newEvent = {
    id: events.length + 1,
    ...eventData
  };
  events.push(newEvent);
  return newEvent;
};

// Update an existing event
export const updateEvent = async (id, eventData) => {
  await delay(500);
  const index = events.findIndex(event => event.id === id);
  if (index !== -1) {
    events[index] = { ...events[index], ...eventData };
    return events[index];
  }
  throw new Error("Event not found");
};

// Delete an event
export const deleteEvent = async (id) => {
  await delay(500);
  const index = events.findIndex(event => event.id === id);
  if (index !== -1) {
    events = events.filter(event => event.id !== id);
    return true;
  }
  throw new Error("Event not found");
};
