import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { describe, test, expect } from "vitest";
import { BrowserRouter as Router } from 'react-router-dom';
import Sort from '../module/book/pages/listPage/components/Sort';

test('Sort component handles sorting correctly', () => {
    const { container } = render(
        <Router>
            <Sort />
        </Router>
    );

    // Example: Check if the "newest" option is selected by default
    const newestOption = screen.getByRole('radio', { name: /newest/i });
    expect(newestOption).toBeInTheDocument();
    expect(newestOption).toBeChecked();

    // Example: Check if clicking another option updates the selected option
    const priceLowToHighOption = screen.getByRole('radio', { name: /price low to high/i });
    fireEvent.click(priceLowToHighOption);
    expect(priceLowToHighOption).toBeChecked();
    // expect(queryParams.get('sortBy')).toBe('price low to high');

    // You can add more assertions based on your expected behavior
    // For example, check that the query parameters are updated correctly

    // Example: Check if clicking the "newest" option again removes the sortBy parameter
    fireEvent.click(newestOption);
    expect(newestOption).toBeChecked();
    // expect(queryParams.get('sortBy')).toBeNull();
});
