import connectMongo from "../../../../../utils/connectMongo";
import BooksModel from "../../../model/postBooks";

export async function GET(req, { params }) {
  try {
    await connectMongo();
    console.log("params......", params);
    const book = await BooksModel.findOne({ _id: params.id });
    return Response.json(book);
  } catch (error) {
    return Response.json({ message: error });
  }
}
