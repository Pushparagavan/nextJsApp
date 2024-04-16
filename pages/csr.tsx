import React, { useEffect, useState } from "react";

const CSR = () => {
  const [resultData, setResultData] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      const data = await fetch("https://jsonplaceholder.typicode.com/todos")
        .then((response) => response.json())
        .then((data) => data);
      setResultData(data);
    };
    fetchAPI();
  }, []);
  return (
    <div>
      {!resultData.length && <p>Loading...</p>}
      {resultData.map((data) => (
        <p key={data["id"]}>{data["title"]}</p>
      ))}
    </div>
  );
};

export default CSR;
