// our-domain.com/news
import { Fragment } from "react";
import Link from "next/link";

function NewsPage() {
  return (
    <Fragment>
      <h1>This is News Page</h1>
      <ul>
        <li>
          <Link href="/news/someone">NextJS</Link>
        </li>
        <li>Something Else</li>
      </ul>
    </Fragment>
  );
}

export default NewsPage;
