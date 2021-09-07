import axios from "axios";
import { useState, useEffect } from "react";
import Head from "next/head";
const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users?_limit=2")
      .then((r) => {
        setUsers(r.data);
      });
  }, []);
  if (users.length > 0) {
    return (
      <div>
        <Head>
          <title>{users[0].name}</title>
        </Head>
        {users[0].name}
      </div>
    );
  }
  return (
    <div>
      Loading
    </div>
  );
};

export default Users;
