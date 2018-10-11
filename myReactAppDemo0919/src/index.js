import React from 'react';
import ReactDOM from 'react-dom';
import { shuffle, sample } from 'underscore';

import App from './App';
// import  AppTest from "./pages.test";
// import BasicExample from "./test";
// import AppRouting from "./demoOnRouting";
// import DemoAApp from "./demoA/components/demoAApp";
// import DemoBOnRoutingApp from "./demoBOnRouting/demoBOnRoutingApp";

// import TableComponent from './components/grid/grid-basic';
// import AuthorQuiz from './pluralsight/AuthorQuiz';
// import AllExamples from './pluralsight/allExamples';

// import SampleGrid from './components/grid/SampleGrid';
// import SampleGridTwo from './components/grid/SampleGridTwo';
// import GridUsingSQLData from './components/grid/gridUsingSQLData';

// import DemoRoute from "./demoRoute";

import LandingPage from './layoutCreation/landingPage';

import "./styles/style.scss";

import { BrowserRouter } from 'react-router-dom';

const PRODUCTS = [
  { category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' },
  { category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball' },
  { category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball' },
  { category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch' },
  { category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5' },
  { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' }
];

const authors = [
  {
    name: 'Mark Twain',
    imageUrl: '../public/images/authors/marktwain.jpg',
    imageSource: 'Wikimedia Commons',
    books: ['The Adventures of Huckleberry Finn', 'Life on the Mississippi', 'Roughing It']
  },
  {
    name: 'Joseph Conrad',
    imageUrl: '../public/images/authors/josephconrad.png',
    imageSource: 'Wikimedia Commons',
    books: ['Heart of Darkness']
  },
  {
    name: 'J.K. Rowling',
    imageUrl: '../public/images/authors/jkrowling.jpg',
    imageSource: 'Wikimedia Commons',
    imageAttribution: 'Daniel Ogren',
    books: ['Harry Potter and the Sorcerers Stone']
  },
  {
    name: 'Stephen King',
    imageUrl: '../public/images/authors/stephenking.jpg',
    imageSource: 'Wikimedia Commons',
    imageAttribution: 'Pinguino',
    books: ['The Shining', 'IT']
  },
  {
    name: 'Charles Dickens',
    imageUrl: '../public/images/authors/charlesdickens.jpg',
    imageSource: 'Wikimedia Commons',
    books: ['David Copperfield', 'A Tale of Two Cities']
  },
  {
    name: 'William Shakespeare',
    imageUrl: '../public/images/authors/williamshakespeare.jpg',
    imageSource: 'Wikimedia Commons',
    books: ['Hamlet', 'Macbeth', 'Romeo and Juliet']
  }
];

function getTurnData(authors) {
  const allBooks = authors.reduce(function (p, c, i) {
    return p.concat(c.books);
  }, []);
  const fourRandomBooks = shuffle(allBooks).slice(0, 4);
  const answer = sample(fourRandomBooks);

  return {
    books: fourRandomBooks,
    author: authors.find((author) =>
      author.books.some((title) =>
        title === answer))
  }
}

const state = {
  // turnData: {
  //   author: authors[0],
  //   books: authors[0].books
  // },
  turnData: getTurnData(authors),
  highlight: ''
};

function onAnswerSelected(answer) {
  const isCorrect = state.turnData.author.books.some((book) => book === answer);
  state.highlight = isCorrect ? 'correct' : 'wrong';
  render();
}

//XXXXXXXXXXXXXXXXXXXXXXXX
const posts = [
  { id: 1, title: 'Hello World', content: 'Welcome to learning React!' },
  { id: 2, title: 'Installation', content: 'You can install React from npm.' }
];

function render() {
  ReactDOM.render((
    <BrowserRouter>
      {/* <App /> */}
      <LandingPage/>
      {/* <TableComponent products={PRODUCTS} /> */}
      {/* <AppTest /> */}
      {/* <AuthorQuiz {...state} onAnswerSelected={onAnswerSelected} /> */}
      {/* {<DemoBOnRoutingApp/>} */}
      {/* <DemoAApp/> */}
      {/* <SampleGrid posts={posts}/> */}
      {/* <TestComp/> */}
      {/* <SampleGrid/> */}
      {/* {<SampleGridTwo posts={posts}/>} */}
      {/* <GridUsingSQLData/> */}
      {/* <AllExamples/> */}
    </BrowserRouter>
  ), document.getElementById('root'));
}
render();