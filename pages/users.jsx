import axios from "axios";
import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";

const Users = ({ users }) => {
  return (
    <div>
      <Head>
        <title>{users[0].name}</title>
      </Head>
      {users.map((u) => (
        <Link key={u.id} href={`/users/${u.id}`}>
          <div className="user-link">
            <h2>{u.name}</h2>
            <h4>@{u.username}</h4>
          </div>
        </Link>
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
