import MeetupDetail from "@/components/meetups/MeetupDetails";

function MeetupDetails() {
  return (
    <MeetupDetail
      image="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Maison_Carree_in_Nimes_%2816%29.jpg/1280px-Maison_Carree_in_Nimes_%2816%29.jpg"
      title="A First Meetup"
      address="Some Street 5, Some City"
      description="The meetup description"
    />
  );
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
      {
        params: {
          meetupId: "m3",
        },
      },
    ],
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  console.log(meetupId);

  return {
    props: {
      meetupData: {
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Maison_Carree_in_Nimes_%2816%29.jpg/1280px-Maison_Carree_in_Nimes_%2816%29.jpg",
        id: "m1",
        title: "A First Meetup",
        address: "Some Street 5, Some City",
        description: "The meetup description",
      },
    },
  };
}

export default MeetupDetails;
