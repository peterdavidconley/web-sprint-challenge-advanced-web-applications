import React from 'react';
import '@testing-library/jest-dom';
import { screen, render} from '@testing-library/react';


import userEvent from '@testing-library/user-event';
import MutationObserver from 'mutationobserver-shim';

import Article from './Article';

test('renders component without errors', ()=> {

    render(<Article />)
});

test('renders headline, author from the article when passed in through props', ()=> {

    const article = {
        headline: 'Here it is.',
        author: "Peter Conley",
        summary: 'Hello world',
        body: 'This is the body'
    }

    // Arrange

    render(<Article article={article}/>)

    // Act


    // Assert



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


    // Assert

// });

// test('executes handleDelete when the delete button is pressed', ()=> {

    const article = {
        headline: 'Here it is.',
        author: "Peter Conley",
        summary: 'Hello world',
        body: 'This is the body'
    }

    // Arrange

    render(<Article article={article}/>)

    // Act


    // Assert


// });
