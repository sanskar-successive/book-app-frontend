import { http, HttpResponse } from "msw";
import { mockBook } from "./mockBook";
import { mockBulkError } from "./mockBulkError";
import { mockBulkUploadList } from "./mockBulkUploadList";
import { mockBookList } from "./mockBookList";


export const handlers = [

  http.get("http://localhost:5000/users", async () => {

    if (localStorage.getItem("userlist")) {
      return HttpResponse.error();
    }
    else {
      return HttpResponse.json({ firstName: 'John' })
    }

  }),

  http.get(`http://localhost:5000/api/books/:bookId`, ({ params }) => {
    const { bookId } = params;

    if (bookId === "invalidBookId") {
      return HttpResponse.error()
    }
    else {
      return HttpResponse.json({ book: mockBook });

    }
  }),

  http.post(`http://localhost:5000/api/books`, async ({ request }) => {
    if (localStorage.getItem("addbook")) return HttpResponse.error();
    else {
      return new HttpResponse.json(mockBook)
    }
    // const newMockBook = await request.json();
  }),

  http.patch(`http://localhost:5000/api/books/:bookId`, async ({ params }) => {
    const { bookId } = params;
    if (bookId === "validId") {
      const newMockBook = await request.json();
      return HttpResponse.json(newMockBook);
    }
    else {
      return HttpResponse.error();
    }

  }),

  http.get("http://localhost:5000/api/bulk-uploads-errors/:session_id", ({ params }) => {
    const { session_id } = params;

    if (session_id === "invalidId") {
      return HttpResponse.error();
    }
    else {
      return HttpResponse.json(mockBulkError)
    }
  }),

  http.get(`http://localhost:5000/api/bulk-uploads-list`, () => {
    if (localStorage.getItem("check")) return HttpResponse.error();
    else return HttpResponse.json({ bulkUploads: mockBulkUploadList });
  }),

  http.get(`http://localhost:5000/api/search`, ({ request }) => {
    const url = new URL(request.url);
    const query = url.searchParams
    if (query.has("invalidQuery")) return HttpResponse.error();
    else return HttpResponse.json({ books: mockBookList });
  }),

  http.post('http://localhost:5000/api/bulk-upload', async ({ request }) => {
    const data = await request.formData()
    const file = data.get('file')

    if (!file) {
      return new HttpResponse('Missing document')
    }

    if (!(file instanceof File)) {
      return new HttpResponse('Uploaded document is not a File')
    }

    return HttpResponse.json("file uploaded")
  }),

  http.post("http://localhost:5000/users/login", async ({ request }) => {
    const user = await request.json();
    return HttpResponse.json(user);
  }),

  http.post("http://localhost:5000/users", async ({ request }) => {
    const user = await request.json();
    return HttpResponse.json(user);
  }),



  http.get(`http://localhost:5000/users/:userId`, async ({ params }) => {

    const { userId } = params;

    if (userId === "invalidUserId") {
      return HttpResponse.error();
    }
    else {
      return HttpResponse.json({ firstName: 'John' })
    }

  }),

  http.get("http://localhost:5000/users/account/home", async () => {
    if (localStorage.getItem("profile")) {
      return HttpResponse.error();
    }
    else return HttpResponse.json({ firstName: 'John' })
  })


  // http.delete(`http://localhost:5000/api/books/:bookId`, async ({params})=>{
  //   const {bookId} = params;
  //   return HttpResponse.json("book deleted")
  // })
];
