"use client";

import { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";

const CreateEventPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    description: "",
    overview: "",
    time: "",
    date: "",
    location: "",
    tags: [],
    agenda: "",
    image: null,
  });


  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Basic client-side validation
      if (
        !formData.title ||
        !formData.slug ||
        !formData.description ||
        !formData.overview ||
        !formData.time ||
        !formData.date ||
        !formData.location ||
        !formData.agenda ||
        !formData.image
      ) {
        throw new Error("Please fill in all required fields");
      }

      const response = await fetch("/api/events/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || `Server responded with status ${response.status}`
        );
      }

      console.log("Form submitted successfully:", data);
      router.push("/events");

      // Reset form on success
      setFormData({
        title: "",
        slug: "",
        description: "",
        overview: "",
        time: "",
        date: "",
        location: "",
        tags: [],
        agenda: "",
        image: null,
      });
    } catch (error) {
      console.log(error);
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
            name="title"
            placeholder="Title of event"
            className="mb-2 p-2 border"
            value={formData.title}
            onChange={(e) => handleChange(e)}
          />
          <input
            type="text"
            name="slug"
            placeholder="Slug for event"
            value={formData.slug}
            onChange={(e) => handleChange(e)}
            className="mb-2 p-2 border"
          />
          <textarea
            placeholder="Description"
            name="description"
            value={formData.description}
            onChange={(e) => handleChange(e)}
            className="mb-2 p-2 border"
          />
          <input
            type="text"
            placeholder="Overview"
            className="mb-2 p-2 border"
            value={formData.overview}
            onChange={(e) => handleChange(e)}
          />
          <input
            type="text"
            placeholder="Time"
            className="mb-2 p-2 border"
            value={formData.time}
            onChange={(e) => handleChange(e)}
          />
          <input
            type="text"
            placeholder="Date"
            className="mb-2 p-2 border"
            value={formData.date}
            onChange={(e) => handleChange(e)}
          />
          <input
            type="text"
            placeholder="Location"
            className="mb-2 p-2 border"
            value={formData.location}
            onChange={(e) => handleChange(e)}
          />
          <input
            type="text"
            className="mb-2 p-2 border"
            placeholder="Tags (comma-separated)"
            value={formData.tags.join(",")}
            onChange={(e) => handleChange(e)}
          />
          <input
            type="text"
            className="mb-2 p-2 border"
            placeholder="Agenda"
            value={formData.agenda}
            onChange={(e) => handleChange(e)}
          />
          <input
            type="file"
            className="mb-2 p-2 border"
            placeholder="Upload Image"
            onChange={(e) => handleChange(e)}
          />
          <button
            type="submit"
            className="bg-white text-green-950 font-semibold py-2 cursor-pointer hover:opacity-80"
          >
            Submit
          </button>
        </form>
      </section>
    </main>
  );
};

export default CreateEventPage;
