# JavaScript Key Concepts

## 🌐 Interpreted or Just-In-Time Compiled Language

- **Machine Code**: The processor understands only zeros and ones (machine code).
- **Human-Readable Code**: We write code in JavaScript, which is an abstraction over machine code.
- **Translation**: JavaScript code must be translated into machine code via:
  - **Compilation**: Translates the entire code before execution.
  - **Interpretation**: Translates and executes code line-by-line.
- **JavaScript Engine**: Handles the translation process, making JavaScript versatile and efficient.

## 🏷️ Dynamic Language

- **Dynamically-Typed**: Variables do not have fixed types; their types are determined at runtime.
- **Type Flexibility**: Variable types can change during program execution.
- **Pros and Cons**:
  - **Pro**: Flexibility and ease of use.
  - **Con**: Potential for type-related bugs.
- **TypeScript**: Use TypeScript for type safety in JavaScript projects.

## 🌐 Multi-Paradigm Language

- **Paradigm**: An approach or mindset for structuring code, influencing coding style and technique.
- **Popular Paradigms in JavaScript**:
  1. **Procedural Programming**: Organizing code in a linear fashion with functions.
  2. **Object-Oriented Programming (OOP)**: Based on objects and classes.
  3. **Functional Programming**: Using functions as first-class citizens.
- **Imperative vs. Declarative**:
  - **Imperative**: Specifies how to perform tasks.
  - **Declarative**: Specifies what the result should be.
- **Flexibility**: JavaScript supports multiple paradigms, allowing developers to choose the most suitable one for their project.

## 🏗️ Prototype-Based, Object-Oriented

- **Objects**: Everything in JavaScript (except primitives) is an object, including arrays.
- **Prototypal Inheritance**:
  - Arrays and other objects inherit methods from their prototypes (blueprints).
  - Example: The `push` method is inherited from the array prototype.

## 🥇 First-Class Functions

- **Definition**: Functions are treated as regular variables.
- **Capabilities**:
  - Passing functions as arguments to other functions.
  - Returning functions from other functions.
- **Example**:

  ```javascript
  const closeModal = () => {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  };

  overlay.addEventListener('click', closeModal);
  ```

- **Significance**: Enables functional programming, enhancing JavaScript's versatility and power.

## 🗑️ Garbage Collection

- **Automatic Memory Management**: JavaScript automatically frees up memory by removing unused objects.
- **Garbage Collector**: An algorithm that cleans up memory to prevent leaks and optimize performance.
- **Benefit**: Developers don't need to manually manage memory, reducing complexity.

## 🧵 Single-Threaded with Non-Blocking Event Loop

- **Concurrency Model**: JavaScript handles multiple tasks concurrently using a single thread.
- **Single Thread**: Only one set of instructions can be executed at a time.
- **Non-Blocking**: Long-running tasks are executed in the background, preventing the main thread from being blocked.
- **Event Loop**: Manages the execution of long-running tasks and puts them back in the main thread when they're done.
- **Benefit**: Efficient handling of multiple tasks without blocking the main execution thread.
