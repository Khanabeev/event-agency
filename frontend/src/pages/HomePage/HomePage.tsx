import DateFilter from "../../components/common/DateFilter";
import Loader from "../../components/common/Loader";
import EventTable from "../../components/specific/EventTable";
import useEvents from "../../hooks/useEvents";
import { useState } from "react";

const HomePage = () => {
  const { data: events, error, isLoading } = useEvents();
  const [dateFilter, setDateFilter] = useState<string | null>(null);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div className="alert alert-danger">Error: {error.message}</div>;
  }

  const filteredEvents = dateFilter
    ? events?.data?.filter((event) => event.date === dateFilter)
    : events?.data;

  return (
    <div className="container">
      <h1>Events</h1>
      <DateFilter
        onFilter={(date) => setDateFilter(date)}
        onClear={() => setDateFilter(null)}
        isClearDisabled={!dateFilter}
      />
      <EventTable events={filteredEvents || []} />
    </div>
  );
};

export default HomePage;
