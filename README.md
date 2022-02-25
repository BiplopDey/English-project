# Learn English

It's web page to learn english (or any language) by watching youtube videos and adding new words and sentences in your dicctionary.

## Home
You can select a youtube video to practice, and in below there is a list of the words and sentences you learned. You can filter them usign the search bar o add some news.

## Features
- The search bar can detect if a request is a word, sentence or a youtube video(in this case you can play it).
- Can do CRUD of words and senteces, and add to favorites.
- Can add youtube videos in your play list and play them in a loop.
- Uses Rest Api to comunicate with back-end in Spring boot.

## Stack
- Programming language: Javascript
- Framework: React
- For styles: Boostrap
- For test: Jest

## Test
Implemented unit tests of domain and service layer. 
To run tests: 
```bash
npm test
```

## Future improvements
- Create a local storage repository to persist if user is offline.
- Implement integration test.
- Implement hexagonal arquitecuture.

## Things you have to know before writing code
- React's component lifecycle
- Reack hooks, useEffect, useState and custom hooks
- Error handling
- Unit testing with jest
- Rest Api CRUD methods: get, post, put, delete.
- Javascript async, await and promises.
