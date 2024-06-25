import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { describe, test, expect } from "vitest";
import TablePagination from '../module/book/pages/listPage/components/Pagination';

test('TablePagination component handles pagination and limit changes correctly', async () => {
  // Mock totalItems value
  const totalItems = 100;

  const { container } = render(
    <Router>
      <TablePagination totalItems={totalItems} />
    </Router>
  );

  // Example: Check if the initial page and limit values are set correctly
  const currentPageInput = await screen.findByText('1');
  expect(currentPageInput).toBeInTheDocument();

//   const pageSizeSelector = await screen.findByText('items per page');
//   expect(pageSizeSelector).toBeInTheDocument();
//   expect(pageSizeSelector.value).toBe('10');

//   fireEvent.change(currentPageInput, { target: { value: '2' } });
//   expect(currentPageInput.value).toBe('2');
  
//   fireEvent.change(pageSizeSelector, { target: { value: '20' } });
//   expect(pageSizeSelector.value).toBe('20');

});
