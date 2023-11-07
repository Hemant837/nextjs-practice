import Layout from "@/components/layout/Layout";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Maison_Carree_in_Nimes_%2816%29.jpg/1280px-Maison_Carree_in_Nimes_%2816%29.jpg",
    address: "Some address 5, 12345 Some City",
    description: "This is a first meetup!",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Maison_Carree_in_Nimes_%2816%29.jpg/1280px-Maison_Carree_in_Nimes_%2816%29.jpg",
    address: "Some address 6, 67890 Some City",
    description: "This is a second meetup!",
  },
];

function HomePage() {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
}

export default HomePage;
