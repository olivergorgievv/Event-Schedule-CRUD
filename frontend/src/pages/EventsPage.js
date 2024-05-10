import EventsList from "../components/EventsList";
import { useLoaderData } from "react-router-dom";
import { json } from "react-router-dom";

function EventsPage() {
  const data = useLoaderData();

  if (data.isError) {
    return <p> {data.message}</p>;
  }

  const events = data.events;

  return <EventsList events={events} />;
}

export default EventsPage;

export async function loader() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    throw json(
      { message: "Could not fetch Events" },
      {
        status: 500,
      }
    );
  } else {
    return response;
  }
}
