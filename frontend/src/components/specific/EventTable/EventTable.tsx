import { Event } from "../../../services/eventService";
import styles from "./EventTable.module.css";

interface EventTableProps {
  events: Event[];
}

const EventTable = ({ events }: EventTableProps) => {
  if (!events.length) {
    return <div className="alert alert-info">No events found.</div>;
  }
  return (
    <table className={[styles.table, "table"].join(" ")}>
      <thead className="thead-dark">
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Description</th>
          <th>Date</th>
          <th>Location</th>
        </tr>
      </thead>
      <tbody>
        {events?.map((event) => (
          <tr key={event.id}>
            <td>{event.id}</td>
            <td>{event.title}</td>
            <td>{event.description}</td>
            <td className={styles.no__wrap}>{event.date}</td>
            <td>{event.location}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EventTable;
