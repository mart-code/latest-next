export type Event = {
  title: string;
  image: string;
  slug: string;
  location: string;
  date: string;
  time: string;
  description?: string;
  link?: string;
};

export const events: Event[] = [
  {
    title: "Next.js Conf",
    image: "/images/event1.png",
    slug: "nextjs-conf-2026",
    location: "Amsterdam, Netherlands (hybrid)",
    date: "2026-03-18",
    time: "09:00",
    description:
      "The official Next.js conference with talks, workshops, and networking for Next.js developers.",
    link: "https://nextjs.org/conf",
  },
  {
    title: "React Summit",
    image: "/images/event2.png",
    slug: "react-summit-2026",
    location: "Remote & Amsterdam",
    date: "2026-04-10",
    time: "10:00",
    description:
      "A conference focused on the React ecosystem: patterns, performance, and community-led talks.",
    link: "https://reactsummit.com",
  },
  {
    title: "JSConf Global",
    image: "/images/event3.png",
    slug: "jsconf-global-2026",
    location: "Berlin, Germany",
    date: "2026-05-21",
    time: "09:30",
    description:
      "Independent JavaScript conference featuring a broad range of JS-related topics and workshops.",
    link: "https://jsconf.com",
  },
  {
    title: "Google I/O (Community Track)",
    image: "/images/event4.png",
    slug: "google-io-2026",
    location: "Mountain View, CA & Online",
    date: "2026-05-15",
    time: "08:00",
    description:
      "Google's developer conference with announcements, deep dives, and hands-on sessions.",
    link: "https://events.google.com/io/",
  },
  {
    title: "Hack the North",
    image: "/images/event5.png",
    slug: "hack-the-north-2026",
    location: "Waterloo, Canada",
    date: "2026-09-12",
    time: "18:00",
    description:
      "One of North America's largest student-run hackathons — 36 hours of building and learning.",
    link: "https://hackthenorth.com",
  },
  {
    title: "Local Dev Meetup: Serverless & Edge",
    image: "/images/event6.png",
    slug: "local-dev-meetup-serverless-edge",
    location: "San Francisco, CA",
    date: "2026-02-05",
    time: "18:30",
    description:
      "An evening meetup covering serverless architectures, edge runtimes and demos from local companies.",
    link: "https://www.meetup.com/",
  },
];

export default events;
