import { fireEvent, render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import PageLayout from "../lib/layout/Layout";
import EditBook from "../module/book/pages/editBook/EditBook";


describe("Add Book component", () => {

    test("should renders add book form", async () => {
        render(
            <MemoryRouter initialEntries={['/add-book/validBookId']}>
                <Routes>
                    <Route exact path="/add-book/:bookId" element={<PageLayout content={<EditBook />} />} />
                </Routes>
            </MemoryRouter>
        );

        const preFilledForm = await screen.findByRole('button', {name : /add/});
        expect(preFilledForm).toBeInTheDocument();

        // const addButton = screen.getByRole('button', {name : /add/i});
        // fireEvent.click(addButton);
    });

    test("should renders error in form submission", async () => {
        render(
            <MemoryRouter initialEntries={['/add-book/invalidBookId']}>
                <Routes>
                    <Route exact path="/add-book/:bookId" element={<PageLayout content={<EditBook />} />} />
                </Routes>
            </MemoryRouter>
        );

        // const addButton = screen.getByRole('button', {name : /add/i});
        // fireEvent.click(addButton);
    });
});