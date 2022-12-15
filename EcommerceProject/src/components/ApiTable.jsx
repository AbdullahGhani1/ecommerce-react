import React, { useState } from "react";
import { useEffect } from "react";

function ApiTable() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      await fetch(`https://jsonplaceholder.typicode.com/users?_limit=20`)
        .then((response) => response.json())
        .then((json) => setData([...json]));
    };
    getData();
  }, []);
  console.log("Game On", data && data.length > 0 ? data : "adss");
  // api fetch
  //   await function
  return (
    <React.Fragment>
      <table className="table caption-top container">
        <caption>List of users</caption>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">name</th>
            <th scope="col">user Name</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((item) => {
              return (
                <tr key={item.id}>
                  <th scope="row">{item.id}</th>
                  <td>{item.name}</td>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </React.Fragment>
  );
}

export default ApiTable;
