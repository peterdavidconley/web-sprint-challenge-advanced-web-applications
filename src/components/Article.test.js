import React from 'react';
import '@testing-library/jest-dom';
import { screen, render} from '@testing-library/react';


import userEvent from '@testing-library/user-event';
import MutationObserver from 'mutationobserver-shim';

import Article from './Article';

const article = {
    headline: 'Here it is.',
    author: "Peter Conley",
    summary: 'Hello world',
    body: 'This is the body',
    createdOn: 'today',
}

test('renders component without errors', ()=> {

    render(<Article article={article}/>)
});

test('renders headline, author from the article when passed in through props', ()=> {

    // Arrange

    render(<Article article={article}/>)

    // Act

    const headline = screen.queryByText(/Here it is./i)
    const author = screen.queryByText(/Peter Conley/i)
    const summary = screen.queryByText(/Hello world/i)
    const body = screen.queryByText(/This is the body/i)

    // Assert

    expect(headline).toBeInTheDocument();
    expect(author).toBeInTheDocument();
    expect(summary).toBeInTheDocument();
    expect(body).toBeInTheDocument();

});

// test('renders "Associated Press" when no author is given', ()=> {

    const noAuthArticle = {
        headline: 'Here it is.',
        author: "",
        summary: 'Hello world',
        body: 'This is the body'
    }

    // Arrange

    render(<Article article={noAuthArticle}/>)

    // Act

    const headline = screen.queryByText(/Associated Press/i);

    // Assert

    expect(headline).toBeInTheDocument();

// });

// test('executes handleDelete when the delete button is pressed', ()=> {

    // Arrange

    render(<Article article={article}/>)

    // Act


    // Assert


// });
