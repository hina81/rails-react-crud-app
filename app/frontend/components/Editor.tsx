import { useState, useEffect } from "react";
import Header from "./Header";
import { EventList } from "./EventList";
import { Event } from "./Event";
import { Routes, Route } from "react-router";
import { EventForm } from "./EventForm";

const Editor = () => {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await window.fetch("/api/events");
        if (!response.ok) throw Error(response.statusText);
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        setIsError(true);
        console.error(error);
      }

      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <>
      <Header />
      <div className="grid">
        {isError && <p>Something went wrong. Check the console.</p>}

        {isLoading ? (
          <p className="loading">Loading...</p>
        ) : (
          <>
            <EventList events={events} />
            <Routes>
              <Route path="/new" element={<EventForm />} />
              <Route path="/:id" element={<Event events={events} />} />
            </Routes>
          </>
        )}
      </div>
    </>
  );
};

export default Editor;
