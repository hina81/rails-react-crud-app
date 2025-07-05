import { useParams } from "react-router";

type Event = {
  id: number;
  event_type: string;
  event_date: string;
  title: string;
  speaker: string;
  host: string;
  published: boolean;
};

type EventProps = {
  events: Event[];
};

export const Event = ({ events }: EventProps) => {
  const { id } = useParams<{ id: string }>();
  const event = events.find((e) => e.id === Number(id));
  if (!event) {
    return <div>Event not found</div>;
  }

  return (
    <div className="eventContainer">
      <h2>
        {event.event_date}
        {" - "}
        {event.event_type}
      </h2>
      <ul>
        <li>
          <strong>Type:</strong> {event.event_type}
        </li>
        <li>
          <strong>Date:</strong> {event.event_date}
        </li>
        <li>
          <strong>Title:</strong> {event.title}
        </li>
        <li>
          <strong>Speaker:</strong> {event.speaker}
        </li>
        <li>
          <strong>Host:</strong> {event.host}
        </li>
        <li>
          <strong>Published:</strong> {event.published ? "yes" : "no"}
        </li>
      </ul>
    </div>
  );
};
