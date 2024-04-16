// import React, { useEffect, useState } from "react";

// interface DataType {
//   userId: number;
//   id: number;
//   title: string;
//   completed: boolean;
// }
// const SSR = ({ resultData }: { resultData: DataType[] }) => {
//   return (
//     <div>
//       {!resultData.length && <p>Loading...</p>}
//       {resultData.map((data) => (
//         <p key={data["id"]}>{data["title"]}</p>
//       ))}
//     </div>
//   );
// };

// export default SSR;

// export async function getServerSideProps() {

//     const data: DataType[] = await fetch('https://jsonplaceholder.typicode.com/todos').then(response => response.json()).then(data => data);

//     console.log(data);
//     return {
//         props: {
//             resultData: data
//         }
//     }

// }

import React from "react";

const ssr = () => {
  return <div>Testing</div>;
};

export default ssr;
