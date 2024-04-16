import connectMongo from "../../../../utils/connectMongo";

import BooksModel from "@/app/model/postBooks";

const booksList = [
  {
    id: 1,
    name: "Blog one"
  },
  {
    id: 2,
    name: "Blog two"
  },
  {
    id: 3,
    name: "Blog three"
  }
];
export async function GET(req) {
  try {
    await connectMongo();
    const booksData = await BooksModel.find({});
    console.log("booksData", booksData);
    // const type = req.nextUrl.searchParams.get('type');
    // console.log('Type:', type)
    return Response.json(booksData);
  } catch (error) {
    return Response.json({ message: error });
  }
}
export async function POST() {
  return Response.json(booksList);
}
