# JavaScript Engine and Runtime 🌟

## JavaScript Engine 🏎️

### What is a JS Engine?

- **JavaScript Engine:** A program that executes JavaScript code.
- **Popular Engines:**
  - **V8 Engine:** Powers Google Chrome and Node.js.
  - **Other Engines:** Each browser has its own, like SpiderMonkey for Firefox.

### Components of a JS Engine

- **Call Stack:** Where code is executed using the execution context.
- **Heap:** An unstructured memory pool for storing objects.

### Compilation and Interpretation 📜

- **Compilation:**

  - Source code is converted to machine code in two steps: compilation and execution.
  - Creates a portable file that can be executed on any computer.

- **Interpretation:**

  - Interpreter runs through the source code and executes it line by line.
  - Converts code to machine code right before execution.

### Just-In-Time Compilation (JIT) ⚡

- **JIT Compilation:** Combines interpretation and compilation for faster execution.
- **Process:**
  - Parses code into an **Abstract Syntax Tree (AST)**.
  - Compiles AST into machine code and executes it immediately.
  - Optimizes and recompiles code in the background for better performance.

## JavaScript Runtime 🌍

### What is a JS Runtime?

- **JavaScript Runtime:** A container with everything needed to execute JavaScript code, like in a browser.
- **Key Components:**
  - **JavaScript Engine:** Core of the runtime.
  - **Web APIs:** Provided by the browser for DOM, timers, and more.

### Callback Queue and Event Loop 🔄

- **Callback Queue:** Stores callback functions ready to be executed.
- **Event Loop:**
  - Moves callbacks from the queue to the call stack for execution.
  - Implements JavaScript's non-blocking concurrency model.

### JavaScript in Different Environments 🌐

- **Browser Runtime:** Includes web APIs.
- **Node.js Runtime:** Lacks web APIs but has C++ bindings and a thread pool.
