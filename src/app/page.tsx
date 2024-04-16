"use client";
import BooksItems from "@/components/booksItems/booksItems";
import { useEffect, useState } from "react";

export default function Home() {
  const [bookItems, setBookItems] = useState([]);
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const books = await fetch(
          process.env.NEXT_PUBLIC_API_URL + "/books"
        ).then((res) => res.json());
        setBookItems(books);
      } catch (error) {
        console.log("Fetch Error", error);
      }
    };
    fetchBooks();
  }, []);
  return (
    <>
      <main className="container mx-auto px-4 py-6">
        <h2 className="text-4xl font-bold mb-4">Welcome to Our Blog</h2>
        <p>The blogs are listed here</p>
      </main>
      <div className="flex justify-end px-4">
        <input
          type="text"
          className="px-4 py-2 border border-gray-300 rounded-md"
          placeholder="Search..."
        />
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md ml-4">
          Search
        </button>
      </div>

      <BooksItems bookItems={bookItems} />
    </>
  );
}
