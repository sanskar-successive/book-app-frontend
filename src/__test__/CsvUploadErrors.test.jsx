import { fireEvent, render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import PageLayout from "../lib/layout/Layout";
import CsvUploadErrors from "../module/book/pages/CSVUploadErrors/CsvUploadErrors";


describe("Book Details component", () => {
    test("should render error", async () => {
        render(
            <MemoryRouter initialEntries={["/bulk-uploads/invalidId"]}>
                <Routes>
                    <Route exact path="/bulk-uploads/:session_id" element={<PageLayout content={<CsvUploadErrors />} />} />
                </Routes>
            </MemoryRouter>
        );
        const loadingText = screen.getByRole('heading', { name: /loading/i });
        expect(loadingText).toBeInTheDocument();

        const errorText = await screen.findByRole('heading', { name: "some error occured" });
        expect(errorText).toBeInTheDocument();
    });

    test("should renders csv upload details", async () => {
        render(
            <MemoryRouter initialEntries={['/bulk-uploads/validId']}>
                <Routes>
                    <Route exact path="/bulk-uploads/:session_id" element={<PageLayout content={<CsvUploadErrors />} />} />
                </Routes>
            </MemoryRouter>
        );

        const loadingText = screen.getByRole('heading', { name: /loading/i });
        expect(loadingText).toBeInTheDocument();

        const errorTable = await screen.findByRole('table');
        expect(errorTable).toBeInTheDocument();

    });


});