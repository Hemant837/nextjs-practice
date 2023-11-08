import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Maison_Carree_in_Nimes_%2816%29.jpg/1280px-Maison_Carree_in_Nimes_%2816%29.jpg",
    address: "Some address 5, 12345 Some City",
    description: "This is my first meetup!",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Maison_Carree_in_Nimes_%2816%29.jpg/1280px-Maison_Carree_in_Nimes_%2816%29.jpg",
    address: "Some address 6, 67890 Some City",
    description: "This is my second meetup!",
  },
];

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

// export async function getStaticProps() {
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//     revalidate: 1,
//   };
// }

export async function getServerSideProps() {
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
  };
}

export default HomePage;
