import { fireEvent, render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import AuthPage from "../module/user/pages/auth/Auth";



describe("Auth page", () => {

    test("should renders error", async () => {
        render(
            <MemoryRouter initialEntries={['/auth']}>
                <Routes>
                    <Route exact path="/auth" element={<AuthPage />} />
                </Routes>
            </MemoryRouter>
        );

        // const addButton = screen.getByRole('button', { name: /add/i });
        // fireEvent.click(addButton);
    });

    test("should renders auth page", async () => {
        render(
            <MemoryRouter initialEntries={['/auth']}>
                <Routes>
                    <Route exact path="/auth" element={<AuthPage />} />
                </Routes>
            </MemoryRouter>
        );

        const createAccountBtn = screen.getByRole('button', { name: "Create an Account!" });
        fireEvent.click(createAccountBtn);
    });
});