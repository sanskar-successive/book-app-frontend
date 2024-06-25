import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { describe, test, expect } from "vitest";
import { BrowserRouter as Router } from 'react-router-dom';
import Filters from '../module/book/pages/listPage/components/Filters';

test('Filters component handles filters correctly', async () => {
  const { container } = render(
    <Router>
      <Filters />
    </Router>
  );

  // Your test logic here

  // Example: Check if the "from" input is rendered and can be modified
//   const fromInput = screen.getByLabelText('Price From');
//   expect(fromInput).toBeInTheDocument();
//   fireEvent.change(fromInput, { target: { value: 100 } });
//   expect(fromInput.value).toBe('100');

//   // Example: Check if the "to" input is rendered and can be modified
//   const toInput = screen.getByLabelText('Price To');
//   expect(toInput).toBeInTheDocument();
//   fireEvent.change(toInput, { target: { value: 500 } });
//   expect(toInput.value).toBe('500');

  // Example: Check if the "3+" checkbox is rendered and can be checked
  const aboveThreeCheckbox = await screen.findByText('3+');
  expect(aboveThreeCheckbox).toBeInTheDocument();
  fireEvent.click(aboveThreeCheckbox);
//   expect(aboveThreeCheckbox).toBeChecked();


  const applyButton = await screen.findByText('Apply');
  expect(applyButton).toBeInTheDocument();
  fireEvent.click(applyButton);

});
