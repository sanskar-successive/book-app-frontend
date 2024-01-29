import { fireEvent, render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import PageLayout from "../lib/layout/Layout";
import Profile from "../module/user/pages/profile/Profile";


describe("User details page", () => {

    test("should renders error", async () => {
        localStorage.setItem("profile", "profile");
        render(
            <MemoryRouter initialEntries={['/profile']}>
                <Routes>
                    <Route exact path="/profile" element={<PageLayout content={<Profile />} />} />
                </Routes>
            </MemoryRouter>
        );

        const loadingText = screen.getByRole('heading', { name: /loading/i });
        expect(loadingText).toBeInTheDocument();


        const errorText = await screen.findByText("some error occured");
        expect(errorText).toBeInTheDocument()

    });

    test("should renders user details page", async () => {
        localStorage.removeItem("profile")
        render(
            <MemoryRouter initialEntries={['/profile']}>
                <Routes>
                    <Route exact path="/profile" element={<PageLayout content={<Profile />} />} />
                </Routes>
            </MemoryRouter>
        );

        const loadingText = screen.getByRole('heading', { name: /loading/i });
        expect(loadingText).toBeInTheDocument();

        const myAccountTitle = await screen.findByText("My Account");
        expect(myAccountTitle).toBeInTheDocument();

    });
});