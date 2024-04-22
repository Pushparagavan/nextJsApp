"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { bookItemsProps } from "@/app/types/bookItems";


function BooksItems({ bookItems }: { bookItems: bookItemsProps[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {bookItems.map((bookItem, index) => (
        <Link key={index} href={`/bookDetails/${bookItem._id}`}>
          <div key={index} className="border border-gray-200 p-4">
            <Image
              className="w-full h-48 object-cover mb-4"
              src="/historyBook.jpeg"
              alt="Post Image"
              width={200}
              height={200}
            />
            <h2 className="text-xl font-semibold mb-2">{bookItem.title}</h2>
            <p className="text-gray-600">{bookItem.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default BooksItems;
