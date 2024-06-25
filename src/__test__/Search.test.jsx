// import { fireEvent, render, screen } from "@testing-library/react";
// import { describe, test, expect } from "vitest";
// import { MemoryRouter, BrowserRouter, Route, Routes } from "react-router-dom";
// import Search from "../module/book/pages/listPage/components/Search";


// describe("Search component", () => {

//     test("should renders search component", async () => {
//         render(
//             <BrowserRouter>
//                 <Search />
//             </BrowserRouter>
//         );
//     });
// });

import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { describe, test, expect } from "vitest";
import { BrowserRouter as Router } from 'react-router-dom';
import Search from '../module/book/pages/listPage/components/Search';

test('SearchBar handles search input correctly', () => {
  const { container } = render(
    <Router>
      <Search />
    </Router>
  );

  expect(screen.getByPlaceholderText('input search text').value).toBe('');
  fireEvent.change(screen.getByPlaceholderText('input search text'), { target: { value: 'test' } });
  expect(screen.getByPlaceholderText('input search text').value).toBe('test');
  fireEvent.click(screen.getByRole('button', { name: /search/i }));
});
