import React from "react";
import axios from "axios";
const BlogDetail = ({ blog }) => {
  return (
    <div>
      <h2>{blog.title}</h2>
      <p>{blog.body}</p>
    </div>
  );
};
export const getServerSideProps = async (context) => {
  //   console.log({ context });
  const { bid } = context.params;
  const blog = await axios
    .get("https://jsonplaceholder.typicode.com/posts/" + bid)
    .then((r) => r.data);
  return {
    props: {
      blog,
    },
  };
};
export default BlogDetail;
