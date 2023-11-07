// our-domain.com/news/something-important
import { useRouter } from "next/router";

function DetailPage() {
  const router = useRouter();

  const { newsId } = router.query;

  return <h1>This is Detail Page</h1>;
}

export default DetailPage;
