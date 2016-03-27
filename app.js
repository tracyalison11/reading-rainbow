(function(){
  'use strict';

    angular.module('readingRainbow', [ ])

    .controller('BookController', function(){
      this.books = books;
      this.genres = genres;
    })
  
    .directive('bookGenres', function(){
      return {
        restrict: 'E',
        templateUrl: 'partials/book-genres.html',
        scope: {
          genres: '='
        }
      }
    })

    .directive('bookCover', function(){
      return {
        restrict: 'E',
        templateUrl: 'partials/book-cover.html',
        replace: true
      }
    })

    .directive('reviewForm', function(){
      return {
        restrict: 'E',
        templateUrl: 'partials/review-form.html',
        replace: true,
        controller: function(){
          this.showForm = false;
          this.book = {genres:{}};

          this.addReview = function(form) {
            books.push(this.book);
            this.book = {genres:{}};

            form.$setPristine();
          }
        },
        controllerAs: 'reviewFormController',
        scope: {
          books: '=',
          genres: '='
        }
      }
    });
  

  var genres = [ 'fable', 'fantasy', 'fiction', 'folklore', 'horror', 'humor', 'legend', 'metafiction', 'mystery', 'mythology', 'non-fiction', 'poetry' ];

  var books = [
    {
      title: 'The Hard Thing About Hard Things: Building a Business When There Are No Easy Answers',
      author: 'Ben Horowitz',
      isbn: '0062273205',
      review: 'Great book with wonderful anecdotes about how to handle tough situations. Ben is a great story teller.',
      rating: 4,
      genres: { 'non-fiction': true }
    },{
      title: 'Zero to One: Notes on Startups, or How to Build the Future',
      author: 'Peter Thiel',
      isbn: '0804139296',
      review: "A great book to allow you to consider business and the future from alternative perspectives. A must read.",
      rating: 5,
      genres: { 'non-fiction': true }
    },{
      title: 'A Smarter Way to Learn JavaScript: The new approach that uses technology to cut your effort in half',
      author: 'Mark Myers',
      isbn: '1497408180',
      review: 'The best way to introduce you developers to javascript. A lot easier to commit to memory with all of the exercises.',
      rating: 4,
      genres: { 'non-fiction': true }
    },{
      title: 'The Poisonwood Bible: A Novel',
      author: 'Barbara Kingsolver',
      isbn: '0061577073',
      review: 'An amazing story',
      rating: 4,
      genres: { 'fiction': true }
    },{
      title: 'Sprint: How to Solve Big Problems and Test New Ideas in Just Five Days',
      author: 'Jake Knapp',
      isbn: '150112174X',
      review: 'Still reading this book',
      rating: 4,
      genres: { 'non-fiction': true }
    },{
      title: 'Love, Loss, and What We Ate: A Memoir',
      author: 'Padma Lakshmi',
      isbn: '0062202618',
      review: 'Still reading this book',
      rating: 4,
      genres: { 'non-fiction': true }
    },
    {
      title: 'I Drink for a Reason',
      author: 'David Cross',
      isbn: '0446697710',
      review: 'Hilarious book. Lots of interesting stories and hypothetical situations. I recommend the audio version as well. Cross does a great job reading it.',
      rating: 4,
      genres: { 'fiction': true }
    },
    {
      title: 'This Charming Man',
      author: 'Marian Keyes',
      isbn: '0061124044',
      review: 'One of the best books I have ever read. It starts off slowly but is well worth the read. A fascinating story.',
      rating: 5,
      genres: { 'fiction': true }
    },
    {
      title: 'The Brightest Star in the Sky',
      author: 'Marian Keyes',
      isbn: '0143118498',
      review: 'Another one of Marian Keyes best books. She truly is an amazing story teller',
      rating: 4,
      genres: { 'fiction': true }
    }
  ];

})();

