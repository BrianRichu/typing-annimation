# Typing Text Animation (JavaScript)

This project implements a letter-by-letter text animation using plain HTML, CSS, and JavaScript. The animation simulates a natural reading or typing effect by rendering text sequentially into the DOM.

---

## Project Structure

typing-text-animation/
├── index.html
├── style.css
└── script.js


---

## JavaScript Flow Overview

The core logic lives in `script.js` and follows a clear, sequential flow.

---

### 1. Text Initialization

Two strings are defined:
- One for the title
- One for the body content

Each string is processed one character at a time.

---

### 2. DOM Element Selection

The script selects:
- A heading element for the title
- A paragraph element for the body text

These elements start empty and are populated dynamically.

---

### 3. Index Tracking

Two index variables are initialized:
- One tracks the current character position in the title
- One tracks the current character position in the body text

These indices maintain state across timed function calls.

---

### 4. Title Typing Function

The title typing function:
1. Checks if there are remaining characters
2. Appends the current character to the heading
3. Increments the index
4. Calls itself again after a short delay

Once the title finishes typing, it triggers the body typing function after a brief pause.

---

### 5. Body Typing Function

The body typing function:
1. Checks if there are remaining characters
2. Appends the current character to the paragraph
3. Increments the index
4. Calls itself again at a faster interval

The function stops automatically when all characters are rendered.

---

### 6. Execution Start

The animation begins by invoking the title typing function.  
The body typing function runs only after the title has fully completed.

---

## Key Concepts Demonstrated

- DOM manipulation
- Controlled recursion using `setTimeout`
- Sequential execution
- Dependency-free JavaScript animation
