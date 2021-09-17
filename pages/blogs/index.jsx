import React from "react";
import axios from "axios";
import Link from "next/link";
const index = ({ blogs }) => {
  return (
    <div>
      <h2>Blog List</h2>
      <hr />
      <ul>
        {blogs.map((b) => (
          <li key={b.id}>
            <div>
              <Link href={`/blogs/${b.id}`}>
                <a>
                  <h3>{b.title.substr(0, 35)}...</h3>
                </a>
              </Link>
              <p>{b.body.substr(0, 75)}...</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  //   console.log({ context });
  const blogs = await axios
    .get("https://jsonplaceholder.typicode.com/posts?_limit=10")
    .then((r) => r.data);
  return {
    props: {
      blogs,
    },
  };
};

export default index;
