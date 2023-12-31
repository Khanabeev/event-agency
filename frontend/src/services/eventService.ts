import ApiClient from "./apiClient";

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
}

export interface EventData {
  data: Event[];
}

const eventService = new ApiClient("/events");

export default eventService;
