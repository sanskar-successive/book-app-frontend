import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import BookDetails from "../module/book/pages/bookDetails/BookDetails";
import PageLayout from "../lib/layout/Layout";


describe("Book Details component", () => {
    test("should render error", async () => {
        render(
            <MemoryRouter initialEntries={['/book/invalidBookId']}>
                <Routes>
                    <Route exact path="book/:bookId" element={<PageLayout content={<BookDetails />} />} />
                </Routes>
            </MemoryRouter>
        );

        const loadingText = screen.getByRole('heading', { name: /loading/i });
        expect(loadingText).toBeInTheDocument();

        const errorText = await screen.findByRole('heading', { name: "some error occured" });
        expect(errorText).toBeInTheDocument();
    });

    test("should renders book details", async () => {
        render(
            <MemoryRouter initialEntries={['/book/validBookId']}>
                <Routes>
                    <Route exact path="book/:bookId" element={<PageLayout content={<BookDetails />} />} />
                </Routes>
            </MemoryRouter>
        );

        const loadingText = screen.getByRole('heading', { name: /loading/i });
        expect(loadingText).toBeInTheDocument();

        const bookDescription = await screen.findByText('Book Details');
        expect(bookDescription).toBeInTheDocument()
    });
});