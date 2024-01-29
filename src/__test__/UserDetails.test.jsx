import { fireEvent, render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import UserDetails from "../module/user/pages/userDetails/UserDetails";
import PageLayout from "../lib/layout/Layout";


describe("User details page", () => {

    test("should renders error", async () => {
        render(
            <MemoryRouter initialEntries={['/users-list/invalidUserId']}>
                <Routes>
                    <Route exact path="/users-list/:userId" element={<PageLayout content={<UserDetails />} />} />
                </Routes>
            </MemoryRouter>
        );

        const loadingText = screen.getByRole('heading', { name: /loading/i });
        expect(loadingText).toBeInTheDocument();


        const errorText = await screen.findByText("some error occured");
        expect(errorText).toBeInTheDocument()

    });

    test("should renders user details page", async () => {
        render(
            <MemoryRouter initialEntries={['/users-list/validUserId']}>
                <Routes>
                    <Route exact path="/users-list/:userId" element={<PageLayout content={<UserDetails />} />} />
                </Routes>
            </MemoryRouter>
        );

        const loadingText = screen.getByRole('heading', { name: /loading/i });
        expect(loadingText).toBeInTheDocument();

        const userDetailsTitle = await screen.findByText("User Details");
        expect(userDetailsTitle).toBeInTheDocument();

    });
});