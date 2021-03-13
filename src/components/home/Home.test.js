import React from 'react';
import { render } from '@testing-library/react';
import Home from './Home';

test('renders name', () => {
    const { getByText } = render(<Home />);
    const myBeautifulName = getByText('rodrigo', {exact: false});
    const myBeautifulLastName = getByText('Ramirez', {exact: false});
    
    //exact: false, matches substrings and is not case-sensitive
    expect(myBeautifulName).toBeInTheDocument();
    expect(myBeautifulLastName).toBeInTheDocument();
});

test('renders job title', () => {
    const { getByText } = render(<Home />);
    const myJob = getByText('Front end developer', {exact: false});
    expect(myJob).toBeInTheDocument();
});