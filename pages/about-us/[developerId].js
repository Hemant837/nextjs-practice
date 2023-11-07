// our-domain.com/about-us/developer
import { useRouter } from "next/router";

function DevDetail() {
  const details = [
    { id: 1, name: "Hemant", role: "Senior Developer" },
    { id: 2, name: "Anurag", role: "Junior Developer" },
    { id: 3, name: "Udit", role: "Intern" },
  ];
  const router = useRouter();
  const { developerId } = router.query;

  let newName = "";
  let newRole = "";

  if (developerId) {
    // Convert newsId to a number because it's a string
    const id = parseInt(developerId);

    // Find the corresponding detail using the id
    const detail = details.find((item) => item.id === id);

    if (detail) {
      newName = detail.name;
      newRole = detail.role;
    } else {
      return <h1>Developer not found.</h1>;
    }
  }
  return (
    <div>
      <h1>Developer Details</h1>
      <p>Name: {newName}</p>
      <p>Role: {newRole}</p>
    </div>
  );
}

export default DevDetail;
