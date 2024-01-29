import { fireEvent, render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import PageLayout from "../lib/layout/Layout";
import CsvUploads from "../module/book/pages/CSVUploads/CsvUploads";


describe("Book Details component", () => {


    test("should renders csv upload details", async () => {
        render(
            <MemoryRouter initialEntries={['/bulk-uploads']}>
                <Routes>
                    <Route exact path="/bulk-uploads" element={<PageLayout content={<CsvUploads />} />} />
                </Routes>
            </MemoryRouter>
        );

        const loadingText = screen.getByRole('heading', { name: /loading/i });
        expect(loadingText).toBeInTheDocument();

        const bookList = await screen.findByRole('table');
        expect(bookList).toBeInTheDocument()

    });

    test("should renders error", async () => {

        localStorage.setItem("check", "test");
        render(
            <MemoryRouter initialEntries={['/bulk-uploads']}>
                <Routes>
                    <Route path="/bulk-uploads" element={<PageLayout content={<CsvUploads />} />} />
                </Routes>
            </MemoryRouter>
        );

        const loadingText = screen.getByRole('heading', { name: /loading/i });
        expect(loadingText).toBeInTheDocument();

        const errorText = await screen.findByText("some error occured");
        expect(errorText).toBeInTheDocument()
    });

});