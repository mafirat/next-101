import React from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Head from "next/head";
const UserDetail = ({ user }) => {
  // const router = useRouter();
  // const { id } = router.query;
  // useEffect içerisinde apicall

  // 1 - SSG - Buil anında html generate edilmesi
  // 2 - SSR - İstek anında html generate edilmesi
  // console.log({ router });

  return (
    <div>
      <Head>
        <title>{user.name}</title>
      </Head>
      <h3>Hello, {user.name}</h3>
      <p>Email: {user.email}</p>
    </div>
  );
};

export const getStaticPaths = async () => {
  const users = await axios
    .get("https://jsonplaceholder.typicode.com/users?_limit=5")
    .then((r) => r.data);
  // const paths = [{ params: { id: "1" } }, { params: { id: "2" } }];
  const paths = users.map((u) => ({ params: { id: u.id.toString() } }));
  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  // console.log({ context });
  const { id } = context.params;
  const user = await axios
    .get("https://jsonplaceholder.typicode.com/users/" + id)
    .then((r) => r.data);
  delete user.address;
  return {
    props: {
      user,
    },
  };
};

export default UserDetail;
