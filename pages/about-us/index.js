import Link from "next/link";

const developers = [
  { id: 1, name: "Hemant" },
  { id: 2, name: "Anurag" },
  { id: 3, name: "Udit" },
];

const AboutUsPage = () => (
  <div>
    <h1>This is About Us Page</h1>
    <ul>
      {developers.map((developer) => (
        <li key={developer.id}>
          <Link href={`/about-us/${developer.id}`}>{developer.name}</Link>
        </li>
      ))}
    </ul>
  </div>
);

export default AboutUsPage;
