import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { updateProgress } from '../utils/api';
import courses from '../data/courses';
import '../styles/LessonPage.css';

const LessonPage = () => {
  const { courseId, sectionIndex, lessonIndex } = useParams();
  const [course, setCourse] = useState(null);
  const [section, setSection] = useState(null);
  const [lesson, setLesson] = useState(null);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const foundCourse = courses.find(c => c.id === parseInt(courseId));
    if (foundCourse) {
      setCourse(foundCourse);
      
      const sectionIdx = parseInt(sectionIndex);
      const lessonIdx = parseInt(lessonIndex);
      
      if (foundCourse.content && 
          foundCourse.content[sectionIdx] && 
          foundCourse.content[sectionIdx].lessons[lessonIdx]) {
        setSection(foundCourse.content[sectionIdx]);
        setLesson({
          title: foundCourse.content[sectionIdx].lessons[lessonIdx],
          content: getLessonContent(foundCourse.id, sectionIdx, lessonIdx)
        });
      }
      
      // Calculate progress
      const totalLessons = foundCourse.content.reduce((total, section) => total + section.lessons.length, 0);
      const currentLessonNumber = foundCourse.content.slice(0, sectionIdx).reduce((total, section) => total + section.lessons.length, 0) + lessonIdx + 1;
      const newProgress = Math.round((currentLessonNumber / totalLessons) * 100);
      setProgress(newProgress);
      
      // Update progress in API and localStorage
      updateProgress(courseId, newProgress);
    }
    
    setLoading(false);
  }, [courseId, sectionIndex, lessonIndex]);

  // Generate text-based lesson content based on the lesson title and course
  const getLessonContent = (courseId, sectionIdx, lessonIdx) => {
    const course = courses[courseId - 1];
    const sectionTitle = course.content[sectionIdx].title;
    const lessonTitle = course.content[sectionIdx].lessons[lessonIdx];
    
    // Generate different content based on the course, section, and lesson
    let mainContent = '';
    let codeExample = '';
    
    // HTML & CSS Course
    if (course.id === 1) {
      // HTML Sections
      if (sectionTitle.includes('HTML')) {
        // Different content based on lesson index
        if (lessonTitle.includes('What is HTML')) {
          mainContent = `
            <p>HTML (HyperText Markup Language) is the standard language for creating web pages. It uses a series of elements or tags to define the structure of content.</p>
            
            <p>In this lesson on <strong>${lessonTitle}</strong>, we'll explore the fundamentals of HTML and its role in web development.</p>
            
            <h4>The Role of HTML</h4>
            <p>HTML is the backbone of any webpage. It provides the basic structure that is later enhanced by CSS (for styling) and JavaScript (for behavior). Think of HTML as the skeleton of a webpage - it defines all the parts and how they're organized.</p>
            
            <p>HTML was created by Tim Berners-Lee in 1991 and has evolved through various versions, with HTML5 being the latest standard.</p>
            
            <h4>How HTML Works</h4>
            <p>Browsers read HTML documents and render them into visible or audible web pages. The browser doesn't display the HTML tags, but uses them to determine how to display the content.</p>
          `;
          
          codeExample = `<!DOCTYPE html>
<html>
<head>
  <title>My First Web Page</title>
  <meta charset="UTF-8">
  <meta name="description" content="A simple HTML example">
</head>
<body>
  <h1>Hello, World!</h1>
  <p>This is my first web page.</p>
  <p>HTML is the standard markup language for creating web pages.</p>
</body>
</html>`;
        } 
        else if (lessonTitle.includes('development environment')) {
          mainContent = `
            <p>Setting up a proper development environment is crucial for efficient HTML coding. In this lesson, we'll explore the tools and setup you need to start creating HTML pages.</p>
            
            <h4>Essential Tools for HTML Development</h4>
            <p>To start developing HTML pages, you'll need:</p>
            <ul>
              <li><strong>Text Editor or IDE</strong>: Programs like Visual Studio Code, Sublime Text, or Atom that help you write and edit HTML code with helpful features like syntax highlighting and auto-completion.</li>
              <li><strong>Web Browser</strong>: Modern browsers like Chrome, Firefox, or Edge have developer tools built-in that help you inspect and debug your HTML.</li>
              <li><strong>Version Control</strong>: Tools like Git help you track changes to your code and collaborate with others.</li>
            </ul>
            
            <h4>Setting Up Your Workspace</h4>
            <p>Creating a well-organized workspace will save you time and frustration. Here's a simple project structure to get started:</p>
          `;
          
          codeExample = `my-website/
├── index.html      # Main HTML file
├── about.html      # About page
├── contact.html    # Contact page
├── css/            # CSS folder
│   └── style.css   # Main stylesheet
├── js/             # JavaScript folder
│   └── script.js   # Main JavaScript file
└── images/         # Images folder
    └── logo.png    # Website logo`;
        }
        else if (lessonTitle.includes('first HTML page')) {
          mainContent = `
            <p>Creating your first HTML page is an exciting step in your web development journey. In this lesson, we'll walk through the process of creating a basic HTML page from scratch.</p>
            
            <h4>Basic Structure of an HTML Document</h4>
            <p>Every HTML document follows a standard structure that includes:</p>
            <ul>
              <li>The <code>!DOCTYPE</code> declaration</li>
              <li>The <code>html</code> element as the root</li>
              <li>A <code>head</code> section for metadata</li>
              <li>A <code>body</code> section for visible content</li>
            </ul>
            
            <h4>Step-by-Step Guide</h4>
            <p>Follow these steps to create your first HTML page:</p>
            <ol>
              <li>Open your text editor</li>
              <li>Create a new file and save it with a .html extension (e.g., index.html)</li>
              <li>Add the basic HTML structure</li>
              <li>Add some content to the body section</li>
              <li>Save the file and open it in a web browser</li>
            </ol>
          `;
          
          codeExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My First Web Page</title>
</head>
<body>
  <h1>Hello, World!</h1>
  <p>This is my first HTML page created by myself!</p>
  
  <h2>About Me</h2>
  <p>I'm learning HTML to become a web developer.</p>
  
  <h2>My Hobbies</h2>
  <ul>
    <li>Coding</li>
    <li>Reading</li>
    <li>Playing games</li>
  </ul>
</body>
</html>`;
        }
        else {
          mainContent = `
            <p>HTML (HyperText Markup Language) is the standard language for creating web pages. It uses a series of elements or tags to define the structure of content.</p>
            
            <p>In this lesson on <strong>${lessonTitle}</strong>, we'll explore how to use HTML to create well-structured web content that browsers can understand and display correctly.</p>
            
            <h4>Understanding HTML Elements</h4>
            <p>HTML elements are the building blocks of HTML pages. An HTML element is defined by a start tag, some content, and an end tag:</p>
            
            <p><code>&lt;tagname&gt;Content goes here...&lt;/tagname&gt;</code></p>
            
            <p>Elements can be nested (placed inside other elements), which allows you to build complex structures from simple components.</p>
          `;
          
          codeExample = `<!DOCTYPE html>
<html>
<head>
  <title>My First Web Page</title>
</head>
<body>
  <h1>Welcome to My Website</h1>
  <p>This is a paragraph of text.</p>
  <ul>
    <li>This is a list item</li>
    <li>This is another list item</li>
  </ul>
</body>
</html>`;
        }
      } 
      // CSS Sections
      else if (sectionTitle.includes('CSS')) {
        if (lessonTitle.includes('Box Model')) {
          mainContent = `
            <p>The CSS Box Model is a fundamental concept that describes how elements are rendered on a webpage. It's essential to understand this model for effective layout design.</p>
            
            <h4>Components of the Box Model</h4>
            <p>Every HTML element can be considered as a box with the following properties:</p>
            <ul>
              <li><strong>Content</strong>: The actual content of the element (text, images, etc.)</li>
              <li><strong>Padding</strong>: The space between the content and the border</li>
              <li><strong>Border</strong>: A line that surrounds the padding</li>
              <li><strong>Margin</strong>: The space outside the border</li>
            </ul>
            
            <h4>Box Sizing Property</h4>
            <p>The <code>box-sizing</code> property determines how the width and height of an element are calculated:</p>
            <ul>
              <li><code>content-box</code> (default): Width and height only include the content</li>
              <li><code>border-box</code>: Width and height include content, padding, and border</li>
            </ul>
          `;
          
          codeExample = `/* CSS Box Model Example */
.box {
  /* Content dimensions */
  width: 300px;
  height: 200px;
  
  /* Padding */
  padding: 20px;
  
  /* Border */
  border: 5px solid #333;
  
  /* Margin */
  margin: 30px;
  
  /* Using border-box for easier calculations */
  box-sizing: border-box;
  
  /* Additional styling */
  background-color: #f0f0f0;
}`;
        }
        else if (lessonTitle.includes('Flexbox')) {
          mainContent = `
            <p>Flexbox (Flexible Box Layout) is a one-dimensional layout method designed for arranging items in rows or columns. It's particularly powerful for creating responsive designs.</p>
            
            <h4>Key Flexbox Concepts</h4>
            <p>Flexbox involves two main components:</p>
            <ul>
              <li><strong>Flex Container</strong>: The parent element with <code>display: flex</code> applied</li>
              <li><strong>Flex Items</strong>: The direct children of the flex container</li>
            </ul>
            
            <h4>Main Axis vs. Cross Axis</h4>
            <p>Flexbox operates on two axes:</p>
            <ul>
              <li><strong>Main Axis</strong>: Defined by <code>flex-direction</code> (row or column)</li>
              <li><strong>Cross Axis</strong>: Perpendicular to the main axis</li>
            </ul>
            
            <h4>Common Flexbox Properties</h4>
            <p>For the container:</p>
            <ul>
              <li><code>display: flex</code>: Creates a flex container</li>
              <li><code>flex-direction</code>: Sets the main axis direction</li>
              <li><code>justify-content</code>: Aligns items along the main axis</li>
              <li><code>align-items</code>: Aligns items along the cross axis</li>
            </ul>
          `;
          
          codeExample = `/* Flexbox Container */
.container {
  display: flex;
  flex-direction: row; /* or column */
  justify-content: space-between; /* main axis alignment */
  align-items: center; /* cross axis alignment */
  flex-wrap: wrap; /* allows items to wrap to next line */
  gap: 20px; /* spacing between items */
}

/* Flex Items */
.item {
  flex: 1; /* grow and shrink equally */
  /* or use specific values */
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: auto;
}

/* Example of a common layout */
.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.card {
  flex: 0 0 calc(33.333% - 20px); /* fixed width with gap consideration */
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}`;
        }
        else if (lessonTitle.includes('Grid')) {
          mainContent = `
            <p>CSS Grid Layout is a two-dimensional layout system designed for organizing content in rows and columns. It's perfect for creating complex layouts with precise control.</p>
            
            <h4>Grid Terminology</h4>
            <ul>
              <li><strong>Grid Container</strong>: The element with <code>display: grid</code> applied</li>
              <li><strong>Grid Items</strong>: The direct children of the grid container</li>
              <li><strong>Grid Lines</strong>: The horizontal and vertical lines that divide the grid</li>
              <li><strong>Grid Tracks</strong>: The rows and columns of the grid</li>
              <li><strong>Grid Cells</strong>: The individual units where content is placed</li>
              <li><strong>Grid Areas</strong>: Named regions spanning multiple grid cells</li>
            </ul>
            
            <h4>Creating a Grid</h4>
            <p>To create a grid layout, you need to:</p>
            <ol>
              <li>Define a grid container with <code>display: grid</code></li>
              <li>Set up the grid structure with <code>grid-template-columns</code> and <code>grid-template-rows</code></li>
              <li>Place items within the grid using various placement properties</li>
            </ol>
          `;
          
          codeExample = `/* Grid Container */
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 equal columns */
  grid-template-rows: auto auto 200px; /* 2 auto-sized rows and 1 fixed */
  gap: 20px; /* spacing between grid items */
}

/* Grid Item Placement */
.header {
  grid-column: 1 / -1; /* spans all columns */
}

.sidebar {
  grid-row: 2 / 4; /* spans from row line 2 to 4 */
}

.main-content {
  grid-column: 2 / 4; /* spans from column line 2 to 4 */
  grid-row: 2 / 3; /* spans from row line 2 to 3 */
}

/* Named Grid Areas */
.layout {
  display: grid;
  grid-template-columns: 200px 1fr 200px;
  grid-template-rows: auto 1fr auto;
  grid-template-areas: 
    "header header header"
    "sidebar content ads"
    "footer footer footer";
  min-height: 100vh;
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.content { grid-area: content; }
.ads { grid-area: ads; }
.footer { grid-area: footer; }`;
        }
        else {
          mainContent = `
            <p>CSS (Cascading Style Sheets) is the language used to style HTML documents. It describes how HTML elements should be displayed on screen, paper, or other media.</p>
            
            <p>In this lesson on <strong>${lessonTitle}</strong>, we'll learn how to use CSS to control the layout and appearance of web pages.</p>
            
            <h4>CSS Syntax</h4>
            <p>A CSS rule consists of a selector and a declaration block. The selector points to the HTML element you want to style, and the declaration block contains one or more declarations separated by semicolons.</p>
            
            <p>Each declaration includes a CSS property name and a value, separated by a colon.</p>
          `;
          
          codeExample = `/* CSS Syntax Example */
selector {
  property: value;
  property: value;
}

/* Practical Example */
body {
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
  margin: 0;
  padding: 20px;
}

h1 {
  color: #333;
  text-align: center;
}`;
        }
      }
      // Other HTML/CSS sections
      else {
        mainContent = `
          <p>In this lesson on <strong>${lessonTitle}</strong>, we'll explore important concepts related to ${sectionTitle.toLowerCase()}.</p>
          
          <h4>Key Concepts</h4>
          <p>Understanding ${lessonTitle} is essential for creating modern, responsive websites. This lesson will cover the fundamentals and best practices.</p>
          
          <h4>Practical Applications</h4>
          <p>We'll explore how to apply these concepts in real-world scenarios, with examples and code snippets to help you understand the implementation details.</p>
        `;
        
        codeExample = `/* Example related to ${lessonTitle} */
/* This is a placeholder for specific code examples */
/* that would be relevant to this particular lesson */

.example {
  /* Properties would be specific to the lesson topic */
  display: block;
  margin: 20px;
  padding: 15px;
  border-radius: 8px;
}`;
      }
    } 
    // JavaScript Course
    else if (course.id === 2) {
      if (sectionTitle.includes('Control Flow')) {
        if (lessonTitle.includes('Conditional')) {
          mainContent = `
            <p>Conditional statements are a fundamental part of JavaScript that allow your code to make decisions and execute different actions based on different conditions.</p>
            
            <h4>Types of Conditional Statements</h4>
            <p>JavaScript supports several types of conditional statements:</p>
            <ul>
              <li><strong>if statement</strong>: Executes a block of code if a specified condition is true</li>
              <li><strong>if...else statement</strong>: Executes one block if the condition is true, and another block if it's false</li>
              <li><strong>if...else if...else statement</strong>: Tests multiple conditions in sequence</li>
              <li><strong>switch statement</strong>: Selects one of many code blocks to be executed based on a value</li>
            </ul>
            
            <h4>Comparison Operators</h4>
            <p>Conditional statements use comparison operators to evaluate conditions:</p>
            <ul>
              <li><code>==</code>: Equal to (value only)</li>
              <li><code>===</code>: Equal to (value and type)</li>
              <li><code>!=</code>: Not equal to (value only)</li>
              <li><code>!==</code>: Not equal to (value and type)</li>
              <li><code>&lt;</code>, <code>&gt;</code>, <code>&lt;=</code>, <code>&gt;=</code>: Less than, greater than, etc.</li>
            </ul>
          `;
          
          codeExample = `// if statement
let age = 18;

if (age >= 18) {
  console.log("You are an adult");
}

// if...else statement
let time = 14;

if (time < 12) {
  console.log("Good morning");
} else {
  console.log("Good afternoon/evening");
}

// if...else if...else statement
let score = 85;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: D or F");
}

// switch statement
let day = 3;
let dayName;

switch (day) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  default:
    dayName = "Weekend";
}

console.log("Today is " + dayName);`;
        }
        else if (lessonTitle.includes('Loops')) {
          mainContent = `
            <p>Loops are used in JavaScript to perform repeated tasks based on a condition. Conditions typically return true or false when analyzed. A loop will continue running until the defined condition returns false.</p>
            
            <h4>Types of Loops in JavaScript</h4>
            <ul>
              <li><strong>for loop</strong>: Repeats until a specified condition evaluates to false</li>
              <li><strong>while loop</strong>: Executes as long as a specified condition is true</li>
              <li><strong>do...while loop</strong>: Executes once before checking if the condition is true, then repeats as long as the condition is true</li>
              <li><strong>for...in loop</strong>: Iterates over the properties of an object</li>
              <li><strong>for...of loop</strong>: Iterates over the values in an iterable object (like arrays)</li>
            </ul>
            
            <h4>Loop Control Statements</h4>
            <p>JavaScript provides special statements to control the flow of loops:</p>
            <ul>
              <li><strong>break</strong>: Terminates the current loop and transfers control to the statement following the loop</li>
              <li><strong>continue</strong>: Skips the current iteration and continues with the next one</li>
            </ul>
          `;
          
          codeExample = `// for loop
for (let i = 0; i < 5; i++) {
  console.log("For loop iteration: " + i);
}

// while loop
let count = 0;
while (count < 5) {
  console.log("While loop iteration: " + count);
  count++;
}

// do...while loop
let num = 0;
do {
  console.log("Do-while loop iteration: " + num);
  num++;
} while (num < 5);

// for...in loop (for objects)
const person = {
  name: "John",
  age: 30,
  job: "Developer"
};

for (let property in person) {
  console.log(property + ": " + person[property]);
}

// for...of loop (for iterables like arrays)
const colors = ["red", "green", "blue"];

for (let color of colors) {
  console.log("Color: " + color);
}

// break and continue
for (let i = 0; i < 10; i++) {
  if (i === 3) {
    continue; // Skip iteration 3
  }
  if (i === 7) {
    break; // Stop the loop at iteration 7
  }
  console.log("Iteration with control: " + i);
}`;
        }
        else {
          mainContent = `
            <p>Control flow is the order in which the computer executes statements in a script. In JavaScript, code is executed from top to bottom unless the computer runs across structures that change the control flow, such as conditionals and loops.</p>
            
            <p>In this lesson on <strong>${lessonTitle}</strong>, we'll explore how to control the flow of your JavaScript programs to create more dynamic and responsive applications.</p>
            
            <h4>Understanding Control Flow</h4>
            <p>Control flow allows you to specify when and under what conditions certain blocks of code should be executed. This is essential for creating interactive web applications that respond to user input and changing conditions.</p>
          `;
          
          codeExample = `// Example of control flow in JavaScript
let userLoggedIn = true;
let userHasPermission = false;
let time = new Date().getHours();

// Conditional logic
if (userLoggedIn) {
  console.log("Welcome back!");
  
  if (userHasPermission) {
    console.log("You have access to all features.");
  } else {
    console.log("You have limited access.");
  }
} else {
  console.log("Please log in to continue.");
}

// Time-based greeting
let greeting;
if (time < 12) {
  greeting = "Good morning";
} else if (time < 18) {
  greeting = "Good afternoon";
} else {
  greeting = "Good evening";
}

console.log(greeting + "! Thanks for visiting.");`;
        }
      }
      else if (sectionTitle.includes('Functions')) {
        if (lessonTitle.includes('declarations and expressions')) {
          mainContent = `
            <p>Functions are one of the fundamental building blocks in JavaScript. A function is a reusable block of code designed to perform a particular task.</p>
            
            <h4>Function Declarations vs. Function Expressions</h4>
            <p>There are two main ways to define functions in JavaScript:</p>
            
            <p><strong>Function Declaration:</strong></p>
            <p>A function declaration defines a named function and is hoisted (available before the code execution reaches the line where it's defined).</p>
            
            <p><strong>Function Expression:</strong></p>
            <p>A function expression defines a function as part of a larger expression syntax (typically a variable assignment). Function expressions are not hoisted.</p>
            
            <h4>Key Differences</h4>
            <ul>
              <li><strong>Hoisting</strong>: Function declarations are hoisted, function expressions are not</li>
              <li><strong>Usage</strong>: Function expressions can be anonymous, used as arguments, or immediately invoked</li>
              <li><strong>Context</strong>: Function expressions are often used in closures and callbacks</li>
            </ul>
          `;
          
          codeExample = `// Function Declaration
function greet(name) {
  return "Hello, " + name + "!";
}

// This works because function declarations are hoisted
console.log(greet("Alice")); // Output: Hello, Alice!

// Function Expression
const sayHello = function(name) {
  return "Hello, " + name + "!";
};

// Anonymous Function Expression
const add = function(a, b) {
  return a + b;
};

// Arrow Function Expression (ES6)
const multiply = (a, b) => a * b;

// Immediately Invoked Function Expression (IIFE)
(function() {
  console.log("This function runs immediately!");
})();

// Function Expression as an argument (callback)
setTimeout(function() {
  console.log("This runs after 1 second");
}, 1000);

// Named Function Expression
const factorial = function fact(n) {
  if (n <= 1) return 1;
  return n * fact(n - 1);
};

console.log(factorial(5)); // Output: 120`;
        }
        else if (lessonTitle.includes('Arrow functions')) {
          mainContent = `
            <p>Arrow functions were introduced in ES6 (ECMAScript 2015) as a new syntax for writing JavaScript functions. They provide a more concise way to write functions and solve some common issues with the <code>this</code> keyword.</p>
            
            <h4>Arrow Function Syntax</h4>
            <p>The basic syntax of an arrow function is:</p>
            <pre>(parameters) => expression</pre>
            <p>If the function body contains more than one expression, you need to use curly braces and an explicit return statement:</p>
            <pre>(parameters) => { statements; return value; }</pre>
            
            <h4>Key Features of Arrow Functions</h4>
            <ul>
              <li><strong>Shorter Syntax</strong>: More concise than traditional function expressions</li>
              <li><strong>Lexical <code>this</code></strong>: Arrow functions don't have their own <code>this</code> context; they inherit it from the surrounding code</li>
              <li><strong>No <code>arguments</code> object</strong>: Arrow functions don't have their own <code>arguments</code> object</li>
              <li><strong>Cannot be used as constructors</strong>: You can't use <code>new</code> with arrow functions</li>
            </ul>
          `;
          
          codeExample = `// Basic arrow function
const greet = (name) => "Hello, " + name + "!";
console.log(greet("Bob")); // Output: Hello, Bob!

// Arrow function with no parameters
const sayHi = () => "Hi there!";
console.log(sayHi()); // Output: Hi there!

// Arrow function with one parameter (parentheses optional)
const square = x => x * x;
console.log(square(5)); // Output: 25

// Arrow function with multiple statements
const calculateArea = (width, height) => {
  const area = width * height;
  return "The area is " + area + " square units";
};
console.log(calculateArea(5, 3)); // Output: The area is 15 square units

// Lexical 'this' example
function Counter() {
  this.count = 0;
  
  // Arrow function preserves 'this' from the Counter context
  this.increment = () => {
    this.count++;
    console.log(this.count);
  };
  
  // Regular function creates its own 'this' context
  this.incrementTraditional = function() {
    this.count++;
    console.log(this.count);
  };
}

const counter = new Counter();
const incrementFn = counter.increment;
incrementFn(); // Works correctly, outputs: 1

const traditionalFn = counter.incrementTraditional;
// traditionalFn(); // Would fail with "Cannot read property 'count' of undefined"`;
        }
        else {
          mainContent = `
            <p>Functions are one of the most important concepts in JavaScript. They allow you to define reusable blocks of code that can be executed whenever needed.</p>
            
            <p>In this lesson on <strong>${lessonTitle}</strong>, we'll explore how to create and use functions effectively in your JavaScript programs.</p>
            
            <h4>Why Functions Matter</h4>
            <p>Functions help you organize your code, make it more readable, and reduce repetition. They also enable you to create modular code that's easier to test, debug, and maintain.</p>
          `;
          
          codeExample = `// Basic function definition
function sayHello(name) {
  return "Hello, " + name + "!";
}

// Calling the function
const greeting = sayHello("World");
console.log(greeting); // Output: Hello, World!

// Function with multiple parameters
function calculateArea(width, height) {
  return width * height;
}

const area = calculateArea(5, 10);
console.log("The area is: " + area); // Output: The area is: 50

// Function with default parameters
function greet(name = "Guest") {
  return "Welcome, " + name + "!";
}

console.log(greet()); // Output: Welcome, Guest!
console.log(greet("John")); // Output: Welcome, John!`;
        }
      }
      else {
        mainContent = `
          <p>JavaScript is a programming language that allows you to implement complex features on web pages. It's an essential technology for creating interactive websites.</p>
          
          <p>In this lesson on <strong>${lessonTitle}</strong>, we'll explore key JavaScript concepts and how to apply them in real-world scenarios.</p>
          
          <h4>JavaScript Fundamentals</h4>
          <p>JavaScript is a versatile language that runs in the browser, enabling dynamic content, interactive features, and much more. Understanding its core concepts is essential for web development.</p>
        `;
        
        codeExample = `// JavaScript Example
function greetUser(name) {
  return "Hello, " + name + "! Welcome to JavaScript.";
}

// Using the function
const username = "Learner";
const message = greetUser(username);
console.log(message);  // Outputs: Hello, Learner! Welcome to JavaScript.

// Try changing the username and see what happens!`;
      }
    }
    // React Course
    else if (course.id === 3) {
      if (sectionTitle.includes('Components')) {
        if (lessonTitle.includes('Functional vs. Class')) {
          mainContent = `
            <p>React offers two main types of components: Functional Components and Class Components. Understanding the differences and when to use each type is essential for effective React development.</p>
            
            <h4>Class Components</h4>
            <p>Class components are ES6 classes that extend from React.Component and have a render method that returns React elements.</p>
            <p><strong>Key features:</strong></p>
            <ul>
              <li>Can hold and manage local state</li>
              <li>Have lifecycle methods (componentDidMount, componentDidUpdate, etc.)</li>
              <li>Can use refs</li>
              <li>More verbose syntax</li>
            </ul>
            
            <h4>Functional Components</h4>
            <p>Functional components are JavaScript functions that accept props as an argument and return React elements.</p>
            <p><strong>Key features:</strong></p>
            <ul>
              <li>Simpler syntax and easier to understand</li>
              <li>Can use state and lifecycle features through Hooks (since React 16.8)</li>
              <li>Generally preferred in modern React development</li>
              <li>Better performance in most cases</li>
            </ul>
            
            <h4>When to Use Each</h4>
            <p>In modern React (16.8+), functional components with Hooks can do everything class components can do, often with cleaner code. However, understanding both is important, especially when working with existing codebases.</p>
          `;
          
          codeExample = `// Class Component Example
import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.increment = this.increment.bind(this);
  }
  
  increment() {
    this.setState({ count: this.state.count + 1 });
  }
  
  componentDidMount() {
    console.log('Component mounted');
  }
  
  componentDidUpdate() {
    console.log('Component updated');
  }
  
  render() {
    return (
      <div>
        <h2>Count: {this.state.count}</h2>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

// Functional Component Example (with Hooks)
import React, { useState, useEffect } from 'react';

function CounterFunction() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    console.log('Component mounted or updated');
    
    return () => {
      console.log('Component will unmount');
    };
  }, [count]);
  
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default CounterFunction;`;
        }
        else if (lessonTitle.includes('Component composition')) {
          mainContent = `
            <p>Component composition is a fundamental concept in React that involves combining smaller, focused components to build more complex UIs. This approach promotes reusability, maintainability, and separation of concerns.</p>
            
            <h4>Benefits of Component Composition</h4>
            <ul>
              <li><strong>Reusability</strong>: Components can be reused across different parts of your application</li>
              <li><strong>Maintainability</strong>: Smaller components are easier to understand, test, and modify</li>
              <li><strong>Separation of Concerns</strong>: Each component handles a specific part of the UI or functionality</li>
              <li><strong>Testability</strong>: Smaller components are easier to test in isolation</li>
            </ul>
            
            <h4>Composition Patterns</h4>
            <p>There are several patterns for component composition in React:</p>
            <ul>
              <li><strong>Containment</strong>: Using the <code>children</code> prop to pass elements directly into a component</li>
              <li><strong>Specialization</strong>: Creating specific versions of more generic components</li>
              <li><strong>Render Props</strong>: Sharing code between components using a prop whose value is a function</li>
              <li><strong>Higher-Order Components (HOCs)</strong>: Functions that take a component and return a new enhanced component</li>
            </ul>
          `;
          
          codeExample = `// Basic Component Composition
import React from 'react';

// Simple components
function Button({ onClick, children }) {
  return (
    <button onClick={onClick} className="button">
      {children}
    </button>
  );
}

function Card({ title, children }) {
  return (
    <div className="card">
      <div className="card-header">
        <h2>{title}</h2>
      </div>
      <div className="card-body">
        {children}
      </div>
    </div>
  );
}

// Composing components together
function ProfileCard({ name, bio, onEdit }) {
  return (
    <Card title={name}>
      <p>{bio}</p>
      <Button onClick={onEdit}>Edit Profile</Button>
    </Card>
  );
}

// Using the composed component
function App() {
  return (
    <div className="app">
      <ProfileCard 
        name="John Doe"
        bio="Frontend developer with a passion for React"
        onEdit={() => console.log('Edit clicked')}
      />
    </div>
  );
}

export default App;`;
        }
        else {
          mainContent = `
            <p>React components are the building blocks of any React application. They allow you to split the UI into independent, reusable pieces, and think about each piece in isolation.</p>
            
            <p>In this lesson on <strong>${lessonTitle}</strong>, we'll explore how to create and use React components effectively.</p>
            
            <h4>What Are React Components?</h4>
            <p>Components are like JavaScript functions that accept inputs (called "props") and return React elements describing what should appear on the screen. They can be defined as classes or functions, with functional components being the modern preferred approach.</p>
          `;
          
          codeExample = `// Basic React Component
import React from 'react';

function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// Using the component
function App() {
  return (
    <div>
      <Greeting name="World" />
      <Greeting name="React" />
      <Greeting name="Developer" />
    </div>
  );
}

export default App;`;
        }
      }
      else if (sectionTitle.includes('Hooks')) {
        if (lessonTitle.includes('useState')) {
          mainContent = `
            <p>The <code>useState</code> hook is one of the most important hooks in React. It allows functional components to manage state, which was previously only possible in class components.</p>
            
            <h4>Understanding useState</h4>
            <p><code>useState</code> is a function that returns an array with exactly two values:</p>
            <ol>
              <li>The current state value</li>
              <li>A function that lets you update the state</li>
            </ol>
            
            <p>When you call the update function, React re-renders the component with the new state value.</p>
            
            <h4>Basic Syntax</h4>
            <pre>const [state, setState] = useState(initialValue);</pre>
            
            <h4>Key Characteristics</h4>
            <ul>
              <li>The initial state is only used during the first render</li>
              <li>State updates are asynchronous</li>
              <li>You can use multiple <code>useState</code> hooks in a single component</li>
              <li>Unlike <code>this.setState</code> in class components, <code>useState</code> does not automatically merge update objects</li>
            </ul>
          `;
          
          codeExample = `import React, { useState } from 'react';

function Counter() {
  // Declare a state variable called "count" with initial value 0
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

// Using multiple state variables
function UserForm() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, age, email });
    // Submit to server, etc.
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        placeholder="Age"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <button type="submit">Submit</button>
    </form>
  );
}

// Using useState with objects
function Profile() {
  const [profile, setProfile] = useState({
    name: '',
    bio: '',
    location: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({
      ...profile, // Important: spread the existing state
      [name]: value
    });
  };
  
  return (
    <div>
      <input
        name="name"
        value={profile.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <textarea
        name="bio"
        value={profile.bio}
        onChange={handleChange}
        placeholder="Bio"
      />
      <input
        name="location"
        value={profile.location}
        onChange={handleChange}
        placeholder="Location"
      />
    </div>
  );
}`;
        }
        else if (lessonTitle.includes('useEffect')) {
          mainContent = `
            <p>The <code>useEffect</code> hook allows you to perform side effects in functional components. Side effects might include data fetching, subscriptions, manual DOM manipulations, logging, and more.</p>
            
            <h4>Understanding useEffect</h4>
            <p><code>useEffect</code> serves the same purpose as <code>componentDidMount</code>, <code>componentDidUpdate</code>, and <code>componentWillUnmount</code> in React class components, but unified into a single API.</p>
            
            <h4>Basic Syntax</h4>
            <pre>useEffect(() => {
  // Side effect code
  
  // Optional cleanup function
  return () => {
    // Cleanup code
  };
}, [dependencies]);</pre>
            
            <h4>Key Characteristics</h4>
            <ul>
              <li>Runs after every render by default</li>
              <li>The dependencies array controls when the effect runs</li>
              <li>An empty dependencies array (<code>[]</code>) means the effect runs only once after the initial render</li>
              <li>The cleanup function runs before the component unmounts and before the effect runs again</li>
            </ul>
          `;
          
          codeExample = `import React, { useState, useEffect } from 'react';

// Basic useEffect example
function Timer() {
  const [seconds, setSeconds] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds + 1);
    }, 1000);
    
    // Cleanup function
    return () => clearInterval(interval);
  }, []); // Empty dependency array means run once on mount
  
  return <div>Seconds: {seconds}</div>;
}

// useEffect with dependencies
function WindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup: remove event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Only run on mount and unmount
  
  return <div>Window width: {width}px</div>;
}

// useEffect that depends on props or state
function DataFetcher({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    setLoading(true);
    
    fetch(\`https://api.example.com/users/\${userId}\`)
      .then(response => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.json();
      })
      .then(data => {
        setUser(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, [userId]); // Re-run when userId changes
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!user) return null;
  
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
}`;
        }
        else {
          mainContent = `
            <p>Hooks are a feature introduced in React 16.8 that allow you to use state and other React features without writing a class. They let you "hook into" React state and lifecycle features from function components.</p>
            
            <p>In this lesson on <strong>${lessonTitle}</strong>, we'll explore how to use React Hooks to create more concise and reusable components.</p>
            
            <h4>Why Hooks?</h4>
            <p>Hooks solve several problems in React:</p>
            <ul>
              <li>They let you reuse stateful logic between components without changing your component hierarchy</li>
              <li>They let you split one component into smaller functions based on related pieces</li>
              <li>They let you use React features without classes</li>
            </ul>
          `;
          
          codeExample = `import React, { useState, useEffect } from 'react';

// A simple component using hooks
function Example() {
  // Declare a state variable called "count"
  const [count, setCount] = useState(0);
  
  // Similar to componentDidMount and componentDidUpdate
  useEffect(() => {
    // Update the document title using the browser API
    document.title = \`You clicked \${count} times\`;
  });
  
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Example;`;
        }
      }
      else {
        mainContent = `
          <p>React is a JavaScript library for building user interfaces, particularly single-page applications where you need a fast, interactive user experience.</p>
          
          <p>In this lesson on <strong>${lessonTitle}</strong>, we'll explore how React components work and how to build efficient UIs with React.</p>
          
          <h4>React Components</h4>
          <p>Components are the building blocks of any React application. A component is a self-contained module that renders some output. Components can be nested inside other components to create complex applications from simple building blocks.</p>
        `;
        
        codeExample = `// React Component Example
import React from 'react';

function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Alice" />
      <Welcome name="Bob" />
      <Welcome name="Charlie" />
    </div>
  );
}

export default App;`;
      }
    }
    // Default content for other courses
    else {
      mainContent = `
        <p>Welcome to this lesson on <strong>${lessonTitle}</strong>.</p>
        
        <p>In this comprehensive text-based lesson, you'll learn the key concepts and practical applications of this topic. As a 10-year-old developer, I've designed this content to be accessible and engaging for learners of all ages.</p>
        
        <h4>Learning Objectives</h4>
        <p>By the end of this lesson, you will be able to:</p>
        <ul>
          <li>Understand the core principles of ${lessonTitle}</li>
          <li>Apply these concepts in practical scenarios</li>
          <li>Recognize common patterns and best practices</li>
          <li>Solve problems related to this topic</li>
        </ul>
      `;
      
      codeExample = `// Example code related to ${lessonTitle}
function exampleFunction() {
  console.log("This demonstrates the concept we're learning");
  return "Learning is fun!";
}

// Try modifying this code to see what happens
exampleFunction();`;
    }
    
    return (
      <div className="lesson-text">
        <h3>{lessonTitle}</h3>
        <div className="lesson-introduction" dangerouslySetInnerHTML={{ __html: mainContent }}></div>
        
        <h4>Code Example</h4>
        <div className="code-block">
          <pre>
            <code>{codeExample}</code>
          </pre>
        </div>
        
        <h4>Practice Exercise</h4>
        <p>Now it's your turn to practice what you've learned:</p>
        <ol>
          <li>Read through the lesson content carefully</li>
          <li>Try the code examples in your own development environment</li>
          <li>Modify the examples to see how changes affect the outcome</li>
          <li>Complete the challenge below to test your understanding</li>
        </ol>
        
        <div className="practice-challenge">
          <h5>Challenge</h5>
          <p>Based on what you've learned in this lesson, try to:</p>
          <ul>
            <li>Create your own version of the example</li>
            <li>Add at least one new feature or modification</li>
            <li>Test your solution to make sure it works as expected</li>
          </ul>
        </div>
        
        <div className="lesson-note">
          <h4>Note from Prime</h4>
          <p>I created this lesson based on my own learning experience. Remember, making mistakes is part of learning - don't be afraid to experiment and try new things! If you have questions, you can always ask in our community forum.</p>
        </div>
      </div>
    );
  };
    
    return (
      <div className="lesson-text">
        <h3>{lessonTitle}</h3>
        <div className="lesson-introduction" dangerouslySetInnerHTML={{ __html: mainContent }}></div>
        
        <h4>Code Example</h4>
        <div className="code-block">
          <pre>
            <code>{codeExample}</code>
          </pre>
        </div>
        
        <h4>Practice Exercise</h4>
        <p>Now it's your turn to practice what you've learned:</p>
        <ol>
          <li>Read through the lesson content carefully</li>
          <li>Try the code examples in your own development environment</li>
          <li>Modify the examples to see how changes affect the outcome</li>
          <li>Complete the challenge below to test your understanding</li>
        </ol>
        
        <div className="practice-challenge">
          <h5>Challenge</h5>
          <p>Based on what you've learned in this lesson, try to:</p>
          <ul>
            <li>Create your own version of the example</li>
            <li>Add at least one new feature or modification</li>
            <li>Test your solution to make sure it works as expected</li>
          </ul>
        </div>
        
        <div className="lesson-note">
          <h4>Note from Prime</h4>
          <p>I created this lesson based on my own learning experience. Remember, making mistakes is part of learning - don't be afraid to experiment and try new things! If you have questions, you can always ask in our community forum.</p>
        </div>
      </div>
    );
  };

  const navigateToNextLesson = () => {
    const currentSectionIdx = parseInt(sectionIndex);
    const currentLessonIdx = parseInt(lessonIndex);
    
    if (course.content[currentSectionIdx].lessons.length > currentLessonIdx + 1) {
      // Next lesson in same section
      navigate(`/courses/${courseId}/learn/${currentSectionIdx}/${currentLessonIdx + 1}`);
    } else if (course.content.length > currentSectionIdx + 1) {
      // First lesson in next section
      navigate(`/courses/${courseId}/learn/${currentSectionIdx + 1}/0`);
    } else {
      // Course completed
      navigate(`/courses/${courseId}`);
    }
  };

  const navigateToPrevLesson = () => {
    const currentSectionIdx = parseInt(sectionIndex);
    const currentLessonIdx = parseInt(lessonIndex);
    
    if (currentLessonIdx > 0) {
      // Previous lesson in same section
      navigate(`/courses/${courseId}/learn/${currentSectionIdx}/${currentLessonIdx - 1}`);
    } else if (currentSectionIdx > 0) {
      // Last lesson in previous section
      const prevSectionLessons = course.content[currentSectionIdx - 1].lessons.length;
      navigate(`/courses/${courseId}/learn/${currentSectionIdx - 1}/${prevSectionLessons - 1}`);
    } else {
      // Already at first lesson
      navigate(`/courses/${courseId}`);
    }
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading lesson content...</p>
      </div>
    );
  }

  if (!course || !section || !lesson) {
    return (
      <div className="error-container">
        <h2>Lesson Not Found</h2>
        <p>Sorry, we couldn't find the lesson you're looking for.</p>
        <Link to="/courses" className="btn btn-primary">Back to Courses</Link>
      </div>
    );
  }

  return (
    <div className="lesson-page">
      <div className="lesson-header">
        <div className="container">
          <div className="course-info">
            <Link to={`/courses/${courseId}`} className="back-link">
              <i className="fas fa-arrow-left"></i> Back to {course.title}
            </Link>
            <div className="progress-container">
              <div className="progress-bar">
                <div 
                  className="progress-fill"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <span className="progress-text">{progress}% Complete</span>
            </div>
          </div>
          <h1 className="lesson-title">{lesson.title}</h1>
          <p className="lesson-subtitle">
            {section.title} • Lesson {parseInt(lessonIndex) + 1} of {section.lessons.length}
          </p>
        </div>
      </div>
      
      <div className="lesson-content container">
        {lesson.content}
        
        <div className="lesson-navigation">
          <button 
            className="btn btn-secondary"
            onClick={navigateToPrevLesson}
          >
            <i className="fas fa-arrow-left"></i> Previous Lesson
          </button>
          
          <button 
            className="btn btn-primary"
            onClick={navigateToNextLesson}
          >
            Next Lesson <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LessonPage;