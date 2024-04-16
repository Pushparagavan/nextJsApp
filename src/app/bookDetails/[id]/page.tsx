"use client";
import React, { useEffect } from "react";

function BookDetails(props: any) {
  const { params } = props;

  console.log("params", params);

  useEffect(() => {
    const fetchBookDetails = async () => {
      const bookDetail = fetch(
        process.env.NEXT_PUBLIC_API_URL + "/book/" + params.id
      );
    };
    fetchBookDetails();
  }, [params.id]);
  return <div>Book Details</div>;
}

export default BookDetails;
