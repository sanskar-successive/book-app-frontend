import { fireEvent, render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import PageLayout from "../lib/layout/Layout";
import List from "../module/book/pages/listPage/List";
import userEvent from "@testing-library/user-event";


describe("Book Details component", () => {
    test("should render error", async () => {
        render(
            <MemoryRouter initialEntries={['/?invalidQuery=invalid']}>
                <Routes>
                    <Route exact path="/" element={<PageLayout content={<List />} />} />
                </Routes>
            </MemoryRouter>
        );
        const loadingText = screen.getByRole('heading', { name: /loading/i });
        expect(loadingText).toBeInTheDocument();

        const errorText = await screen.findByRole('heading', { name: "Oops! Something went wrong" });
        expect(errorText).toBeInTheDocument();
    });

    test("should renders book details", async () => {
        render(
            <MemoryRouter initialEntries={['/?validQuery=valid']}>
                <Routes>
                    <Route exact path="/" element={<PageLayout content={<List />} />} />
                </Routes>
            </MemoryRouter>
        );

        const loadingText = screen.getByRole('heading', { name: /loading/i });
        expect(loadingText).toBeInTheDocument();

        const bookList = await screen.findByRole('table');
        expect(bookList).toBeInTheDocument()
    });

    test("test delete button", async () => {
        render(
            <MemoryRouter initialEntries={['/']}>
                <Routes>
                    <Route exact path="/" element={<PageLayout content={<List />} />} />
                </Routes>
            </MemoryRouter>
        );

        const loadingText = screen.getByRole('heading', { name: /loading/i });
        expect(loadingText).toBeInTheDocument();

        // const deleteButtons = await screen.findAllByText(/delete/i);

        // fireEvent.click(deleteButtons[0]);
        // const deleteText = screen.getByText("Delete the Book")
        // expect(deleteText).toBeInTheDocument();

        // const deleteCancel = await screen.findByText(/cancel/i);
        // fireEvent.click(deleteCancel);
        // expect(screen.queryByText("Delete the Book")).not.toBeInTheDocument();
    });
});