import axios from "axios";
import { useState, useEffect } from "react";
import Head from "next/head";
const Users = ({ users }) => {
  return (
    <div>
      <Head>
        <title>{users[0].name}</title>
      </Head>
      {users.map((u) => (
        <h1 key={u.id}>{u.name}</h1>
      ))}
    </div>
  );
};

export default Users;

export const getStaticProps = async () => {
  const users = await axios
    .get("https://jsonplaceholder.typicode.com/users?_limit=5")
    .then((r) => r.data);
  return {
    props: {
      users,
    },
  };
};
