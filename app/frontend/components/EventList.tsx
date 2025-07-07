import { Link } from "react-router";

type Event = {
  id: number;
  event_type: string;
  event_date: string;
  title: string;
  speaker: string;
  host: string;
  published: boolean;
};

type EventListProps = {
  events: Event[];
};

export const EventList = ({ events }: EventListProps) => {
  const renderEvents = (eventArray: Event[]) => {
    eventArray.sort(
      (a, b) =>
        new Date(b.event_date).getTime() - new Date(a.event_date).getTime()
    );

    return eventArray.map((event) => (
      <li key={event.id}>
        <Link to={`/events/${event.id}`}>
          {event.event_date}
          {" - "}
          {event.event_type}
        </Link>
      </li>
    ));
  };

  return (
    <section className="eventList">
      <h2>
        Events
        <Link to="/events/new">New Event</Link>
      </h2>
      <ul>{renderEvents(events)}</ul>
    </section>
  );
};
