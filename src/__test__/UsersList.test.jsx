import { fireEvent, render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import PageLayout from "../lib/layout/Layout";
import UsersList from "../module/user/pages/usersList/UsersList";


describe("Users List page", () => {

    test("should renders error", async () => {
        localStorage.setItem("userlist", "userlist");
        render(
            <MemoryRouter initialEntries={['/users-list']}>
                <Routes>
                    <Route exact path="/users-list" element={<PageLayout content={<UsersList />} />} />
                </Routes>
            </MemoryRouter>
        );

        const loadingText = screen.getByRole('heading', { name: /loading/i });
        expect(loadingText).toBeInTheDocument();


        const errorText = await screen.findByText("some error occured");
        expect(errorText).toBeInTheDocument()

    });

    test("should renders users list page", async () => {
        localStorage.removeItem("userlist")
        render(
            <MemoryRouter initialEntries={['/users-list']}>
                <Routes>
                    <Route exact path="/users-list" element={<PageLayout content={<UsersList />} />} />
                </Routes>
            </MemoryRouter>
        );

        const loadingText = screen.getByRole('heading', { name: /loading/i });
        expect(loadingText).toBeInTheDocument();

        const userListTable = await screen.findByText("First Name");
        expect(userListTable).toBeInTheDocument();

    });
});