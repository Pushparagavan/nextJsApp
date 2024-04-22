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
    let booksData ;
    const query = req.nextUrl.searchParams.get('q');
    if(query){
      console.log('query....', query);
      booksData = await BooksModel.find({
        $or : [
          {title: new RegExp(query, 'i')},
          {description: new RegExp(query, 'i')}
        ]
      });
      console.log('booksData....', booksData)
    }else{
      booksData = await BooksModel.find({});
    }
   
   
    // console.log('Type:', type)

    return Response.json(booksData);
  } catch (error) {
    return Response.json({ message: error });
  }
}
export async function POST() {
  return Response.json(booksList);
}
