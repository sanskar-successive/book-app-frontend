import { fireEvent, render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import PageLayout from "../lib/layout/Layout";
import AddBook from "../module/book/pages/addBook/AddBook";


describe("Add Book component", () => {

    test("should renders error", async () => {
        localStorage.setItem("addbook", "addbook");
        render(
            <MemoryRouter initialEntries={['/add-book']}>
                <Routes>
                    <Route exact path="/add-book" element={<PageLayout content={<AddBook />} />} />
                </Routes>
            </MemoryRouter>
        );

        const addButton = screen.getByRole('button', { name: /add/i });
        fireEvent.click(addButton);
    });

    test("should renders pre filled form", async () => {
        localStorage.removeItem("addbook");
        render(
            <MemoryRouter initialEntries={['/add-book']}>
                <Routes>
                    <Route exact path="/add-book" element={<PageLayout content={<AddBook />} />} />
                </Routes>
            </MemoryRouter>
        );

        const addButton = screen.getByRole('button', { name: /add/i });
        fireEvent.click(addButton);
    });
});