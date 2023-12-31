import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_EVENTS } from "../constants/events";
import eventService, { EventData } from "../services/eventService";

const useEvents = () => {
  return useQuery<EventData, Error>({
    queryKey: CACHE_KEY_EVENTS,
    queryFn: eventService.getAll,
    staleTime: 10 * 1000, //10 seconds
  });
};

export default useEvents;
