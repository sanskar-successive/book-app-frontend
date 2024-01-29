import { fireEvent, render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import { MemoryRouter, BrowserRouter, Route, Routes } from "react-router-dom";
import Search from "../module/book/pages/listPage/components/Search";


describe("User details page", () => {

    test("should renders error", async () => {
        localStorage.setItem("profile", "profile");
        render(
            <BrowserRouter>
                <Search />
            </BrowserRouter>
        );

        const loadingText = screen.getByRole('heading', { name: /loading/i });
        expect(loadingText).toBeInTheDocument();


        const errorText = await screen.findByText("some error occured");
        expect(errorText).toBeInTheDocument()

    });
});