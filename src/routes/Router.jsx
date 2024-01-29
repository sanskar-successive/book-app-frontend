import { BrowserRouter, Route, Routes } from "react-router-dom";
// import PageLayout from "../lib/layout/Layout";
// import List from "../module/book/pages/listPage/page";
// import CsvUploads from "../module/book/pages/CSVUploads/page";
// import AddBook from "../module/book/pages/addBook/page";
// import BookDetails from "../module/book/pages/bookDetails/page";
// import EditBook from "../module/book/pages/editBook/page";
// import AuthPage from "../module/user/pages/auth/page";
// import UploadFile from "../module/book/pages/uploadFile/page";
// import ProtectedRoutes from "./ProtectedRoutes";
// import UsersList from "../module/user/pages/usersList/UsersList";
// import CsvUploadErrors from "../module/book/pages/CSVUploadErrors/page";
// import UserDetails from "../module/user/pages/userDetails/UserDetails";
// import Profile from "../module/user/pages/profile/Profile";
import { lazy } from "react";

import ProtectedRoutes from "./ProtectedRoutes";

const PageLayout = lazy(()=>import("../lib/layout/Layout"));
const List = lazy(()=>import("../module/book/pages/listPage/List"));
const CsvUploads = lazy(()=>import("../module/book/pages/CSVUploads/CsvUploads"));
const AddBook = lazy(()=>import("../module/book/pages/addBook/AddBook"));
const BookDetails = lazy(()=>import("../module/book/pages/bookDetails/BookDetails"));
const EditBook = lazy(()=>import("../module/book/pages/editBook/EditBook"));
const AuthPage = lazy(()=>import("../module/user/pages/auth/Auth"));
const UploadFile = lazy(()=>import("../module/book/pages/uploadFile/page"));
const UsersList = lazy(()=>import("../module/user/pages/usersList/UsersList"));
const CsvUploadErrors = lazy(()=>import("../module/book/pages/CSVUploadErrors/CsvUploadErrors"));
const UserDetails = lazy(()=>import("../module/user/pages/userDetails/UserDetails"));
const Profile = lazy(()=>import("../module/user/pages/profile/Profile"));

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/auth" element={<AuthPage />} />
                <Route element={<ProtectedRoutes />}>
                    {/* <Route element={<Layout />}> */}
                    {/* <Route exact path="/" element={<BookList />} /> */}
                    <Route exact path="/" element={<PageLayout content={<List />} />} />
                    <Route exact path="book/:bookId" element={<PageLayout content={<BookDetails />} />} />
                    <Route exact path="/add-book" element={<PageLayout content={<AddBook />} />} />
                    {/* <Route exact path="/add-book/:bookId" element={<AddBook2 />} /> */}
                    <Route exact path="/add-book/:bookId" element={<PageLayout content={<EditBook />} />} />

                    <Route exact path="/upload-file" element={<PageLayout content={<UploadFile />} />} />
                    <Route exact path="/bulk-uploads" element={<PageLayout content={<CsvUploads />} />} />

                    <Route exact path="/users-list" element={<PageLayout content={<UsersList />} />} />
                    <Route exact path="/profile" element={<PageLayout content={<Profile />} />} />

                    <Route exact path="/users-list/:userId" element={<PageLayout content={<UserDetails />} />} />


                    <Route exact path="/bulk-uploads/:session_id" element={<PageLayout content={<CsvUploadErrors />} />} />
                    {/* <Route path="*" element={<NotFound />} /> */}
                    {/* </Route> */}
                </Route>
            </Routes>
        </BrowserRouter>
    );
};
export default Router;







