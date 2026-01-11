import { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";

const CreateEventPage = () => {

    const router = useRouter();
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [description, setDescription] = useState("");
  const [overview, setOverview] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [tags, setTags] = useState([""]); // Assuming multiple tags are allowed

   const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/events", {
        title,
        slug,
        description,
        overview,
        time,
        date,
        location,
        tags,
      });

      if (response.status === 201) {
        router.push("/");
      } else {
        console.error("Event creation failed");
      }
    } catch (error) {
      console.error("Error creating event:", error);
    }
  };

  return (
    <main>
      <section>
        <Link href="/">Back to home</Link>
        <h1>Create Event</h1>
        <p>This is a placeholder create-event page. Implement form and API call here.</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Title of event"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Slug for event"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
          />
          <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
          <input
            type="text"
            placeholder="Overview"
            value={overview}
            onChange={(e) => setOverview(e.target.value)}
          />
          <input
            type="text"
            placeholder="Time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
          <input
            type="text"
            placeholder="Date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <input
            type="text"
            placeholder="Tags (comma-separated)"
            value={tags.join(",")}
            onChange={(e) => setTags(e.target.value.split(","))}
          />
          <button type="submit">Submit</button>
        </form>
      </section>
    </main>
  );
};

export default CreateEventPage;