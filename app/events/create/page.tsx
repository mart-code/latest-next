'use client'

import { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";

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
  const [agenda, setAgenda] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("slug", slug);
      formData.append("description", description);
      formData.append("overview", overview);
      formData.append("time", time);
      formData.append("date", date);
      formData.append("location", location);
      formData.append("tags", JSON.stringify(tags));

      const response = await axios.post("/api/events", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
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
        <p>
          This is a placeholder create-event page. Implement form and API call
          here.
        </p>
        <form className="flex flex-col w-1/2 gap-2 p-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Title of event"
            className="mb-2 p-2 border"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Slug for event"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            className="mb-2 p-2 border"
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mb-2 p-2 border"
          />
          <input
            type="text"
            placeholder="Overview"
            className="mb-2 p-2 border"
            value={overview}
            onChange={(e) => setOverview(e.target.value)}
          />
          <input
            type="text"
            placeholder="Time"
            className="mb-2 p-2 border"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
          <input
            type="text"
            placeholder="Date"
            className="mb-2 p-2 border"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <input
            type="text"
            placeholder="Location"
            className="mb-2 p-2 border"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <input
            type="text"
            className="mb-2 p-2 border"
            placeholder="Tags (comma-separated)"
            value={tags.join(",")}
            onChange={(e) => setTags(e.target.value.split(","))}
          />
          <input
            type="text"
            className="mb-2 p-2 border"
            placeholder="Agenda"
            value={agenda}
            onChange={(e) => setAgenda(e.target.value)}
          />
          <input
            type="file"
            className="mb-2 p-2 border"
            placeholder="Upload Image"
            onChange={(e) => setImage(e.target.files?.[0] || null)}
          />
          <button type="submit" className="bg-white text-green-950 font-semibold py-2 cursor-pointer hover:opacity-80">Submit</button>
        </form>
      </section>
    </main>
  );
};

export default CreateEventPage;
