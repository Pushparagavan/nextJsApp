"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { bookItemsProps } from "@/app/types/bookItems";


function BookDetails(props: any) {
  const { params } = props;
  const [bookDetail, setBookDetail] = useState<bookItemsProps>()

  useEffect(() => {
    const fetchBookDetails = async () => {
      try{
      const response = await fetch(
        process.env.NEXT_PUBLIC_API_URL + "/book/" + params.id
      ).then(response => response.json());
      
        setBookDetail(response);
     
    } catch (error) {
      console.error("Error fetching book details:", error);
    }
    };
    fetchBookDetails();
  }, [params.id]);
  return (
  <>
       {bookDetail && <div className="border border-gray-200 p-4">
            <Image
              className="w-full h-48 object-cover mb-4"
              src="/historyBook.jpeg"
              alt="Post Image"
              width={200}
              height={200}
            />
            <h2 className="text-xl font-semibold mb-2">{bookDetail.title}</h2>
            <p className="text-gray-600">{bookDetail.description}</p>
          </div>
       }
  </>
  )
}

export default BookDetails;
