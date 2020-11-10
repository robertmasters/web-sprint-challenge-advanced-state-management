# Advanced State Management Sprint Challenge

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This challenge allows you to practice the concepts and techniques learned over the past sprint and apply them in a concrete project. This sprint explored **advanced state management**. During this sprint, you studied **the reducer pattern, redux, and context APIs**. In your challenge this week, you will demonstrate your mastery of these skills by creating **Smurfs village**!

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the sprint challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your TL if you need direction. 

_You have **three hours** to complete this challenge. Plan your time accordingly._


## Introduction

In this challenge, you are to build a Smurfs village utilizing Redux as your state management system. Build this challenge from the ground up using what you have learned about state management.

### Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons) and your team lead as the evaluate your solution.

## Interview Questions

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. You might prepare by writing down your own answers before hand.

1. What problem does the context API help solve? 
  - global state management without having to manage actions in order to manage state, instead context api lets your manage the state directly.
2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    - actions is the file(s) that determine what the users interactions with state are going to do.
    - reducers take in those actions and update the state then returns the updated state back to the application.
    - store stores the state inside of it and gives the application access to functions that manage that state.
    - it is called the truth because it is what makes state management more generic and easy to manage by centralizing it in one place.
3. What is the difference between Application state and Component state? When would be a good time to use one over the other?
  - application state is when you manage state globally throughout the app, and component state, is when that particular piece of state within that component is managed only within that component and its children but its not accessible by the app entirely.
  - component state may be better when dealing with a small app that doesnt require the centralized aspect of managing state, because it would be adding more complexity when that is not needed. application state would be better used in a large application that manages many components.
4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    it allows us to return a function with a dispatch method instead of an action object. 
5. What is your favorite state management system you've learned and this sprint? Please explain why!
    Context API because its made specifically for react, and its a lot less code than redux.

You are expected to be able to answer questions in these areas. Your responses contribute to your Sprint Challenge grade. 

## Instructions

### Task 1: Project Set Up

- [x] `fork & clone` this repository.
- [x] `cd` into the forked copy of this repository.
- [x] **RUN** `npm install` to retrieve all `server-side` the dependencies.
- [x] **RUN** `npm start` to get your API up and running on `http://localhost:3333`. This is the **URL** you're going to need to use within your React app in order to make AJAX requests for data.
- [x] After your API is up and running, you can open chrome and type in `http://localhost:3333/smurfs`. You should see an array with one smurf in it returned to you. This is an array that your **API** will be using to store our Smurf Data.
- [x] **LOOK** at your `smurfs` directory and notice it's just a plain ol' React App that we've built using `create-react-app`.
- [x] **Open** `src/index.js` to make sure that your app is ready to roll with the proper middleware.
- [x] **cd** into `smurfs` and run `npm install` to retrieve the client side dependencies.
- [x] **RUN** `npm start` to fire up your React application. There ought to be a pretty little message awaiting you welcoming you to the app. `Follow` the prompting.

**LOOK** at all the files you've been given for this project. One important file to note is `server.js`. This file contains an **API** that you are going to be interfacing with. Below is documentation on how to interact with the **API**.

### Task 2: Project Requirements

Your finished project must include all of the following requirements:

- [ ] Plan and implement how you are going to manage your state for your application
- [ ] You _must_ use Redux as your state management system
- [ ] Once you have planned out your state management system, fetch data from the smurf server and display the data it returns
- [ ] Add a form to collect info for a new smurf, and make a POST request to the server to add a new smurf to your village

In your solution, it is essential that you follow best practices and produce clean and professional results. You will be scored on your adherence to proper code style and good organization. Schedule time to review, refine, and assess your work and perform basic professional polishing including spell-checking and grammar-checking on your work. It is better to submit a challenge that meets MVP than one that attempts too much and does not.

#### Resource: API documentation 

##### GET '/smurfs'

- [ ] Retrieve an array all the Smurfs in the Smurf DB by writing a `GET` to the endpoint `/smurfs`.
- [ ] Double check that your response from the server is an array of smurfs.

```js
[
  {
    name: "Brainey",
    age: 200,
    height: "5cm",
    id: 0
  }
];
```

##### POST '/smurfs'

- [ ] Design the functionality to add a smurf to the Smurf DB you'll need all three fields. `name`, `age`, and `height`.

Example of the shape of data to be sent to the `POST` endpoint:

```js
{
  name: 'Brainey',
  age: 200,
  height: '5cm'
}
```

- [ ] Double check to make sure that a smurf is created correctly once your functionality is built out.

Initially Brainey will be in the array, but it takes more than one smurf to make the village. Be sure to add a few smurfs to populate our smurf village.

**HINT** if you are going to be working on Stretch Problem, you'll need to use that unique `id`.

Example of object created in Smurf DB:

```js
[
  {
    name: "Brainey",
    age: 200,
    height: "5cm",
    id: 0
  },
  {
    name: "Sleepy",
    age: 200,
    height: "5cm",
    id: 1
  }
];
```


### Task 3: Stretch Goals 

After finishing your required elements, you can push your work further. These goals may or may not be things you have learned in this module but they build on the material you just studied. Time allowing, stretch your limits and see if you can deliver on the following optional goals:

* [ ] Build a smurf profile page with using react-router and dynamic url params  
* [ ] Using React Testing Library, test one or more of your components (not any component that fetches data though)

## Submission format

Follow these steps for completing your project.

- [ ] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's  Repo). **Please don't merge your own pull request**
- [ ] Add your team lead as a reviewer on the pull-request
- [ ] Your team lead will count the project as complete after receiving your pull-request


Challenge in the 1st objective: A finite state machine bundles all the state management in a box that handles the process of state being true or false and the aspect of it being in progress from true to false, as well as the aspect of there being an error in the attempt of changing the state from true to false or from false to true.
