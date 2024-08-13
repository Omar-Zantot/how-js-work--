'use strict';

/* js is high-level :
every program that runs on your computer needs some hardware resources
such as memory and the CPU to do its work.
Now, there are low-level languages, such as C, where you have to manually manage these resources.
for example, asking the computer for memory to create a new variable,On the other side,
you have high-level languages such as JavaScript and Python,
where we do not have to manage resources at all
because these languages have so-called abstractions
that take all of that work away from us.
This makes the language easier to learn and to use,
but the downside is that programs will never be as fast
or as optimized as for example, C programs.
Now, one of the powerful tools
that takes memory management away from us developers is garbage-collection,
*/

/* garbage-collection : 
which is basically an algorithm inside the JavaScript engine,
which automatically removes old, unused objects from the computer memory.
in order not to clog it up with unnecessary stuff.
So it's a little bit like JavaScript has a cleaning guy
who cleans our memory from time to time so that we don't have to do it manually in our code.
*/

/** interpreted or just-in-time compiled language
 * the computer's processor only understands zeros and ones, that's right
 * Ultimately, every single program needs to be written in zeros and ones, which is also called machine code.
 * And since that's not really practical to write, is it?
 * We simply write human-readable JavaScript code,
 * which is an abstraction over machine code,
 * but this code eventually needs to be translated into machine code
 * And that step can be either compiling or interpreting.
 * This step is necessary in every single programming language because no one writes machine code manually.
 * In the case of JavaScript, this happens inside the JavaScript engine.
 * Now, one of the things that makes JavaScript so popular is the fact that it's a multi-paradigm language.
 *
 */

/** multi-paradigm language
 * In programming, a paradigm is an approach and an overall
 * mindset of structuring our code,
 * which will ultimately direct the coding style and technique
 * in a project that uses a certain paradigm.
 * And this definition still sounds kind of abstract, right?
 * three popular paradigms that JavaScript supports:
 * 1. procedural programming : which is basically organizing the code
 * in a linear way,and then with some functions in between.
 * 2. object-oriented programming
 * 3. functional programming
 * Also, we can classify paradigms as imperative or declarative.
 * Now, many languages are only procedural or only object-oriented,
 * or only functional, but JavaScript does all of it.So it's really
 * flexible and versatile And so we can do really whatever
 * we want with it.It's our choice. We can use whatever paradigm we want.
 * So, about the object-oriented nature of JavaScript, it is a prototype-based, object-oriented approach.
 *
 */

/**prototype-based, object-oriented.
 * everything in JavaScript is an object, except for primitive values such as numbers, strings, ect.
 * But arrays, for example, are just object.
 * Now, have you ever wondered why we can create an array
 * and then use the push method on it, for example?
 * Well, it's because of prototypal inheritance
 * Basically, we create arrays from an array blueprint,
 * which is like a template and this is called the prototype.
 * This prototype contains all the array methods
 * and the arrays that we create in our code
 * then inherit the methods from the blueprint
 * so that we can use them on the arrays.
 */

/** first-class functions
 * which simply means that functions are treated just as regular variables.
 * So, we can pass functions into other functions and we can even return functions from functions.
 * And this is extremely powerful and it's one of the reasons why JavaScript is so popular.
 * and also allows for functional-programming, which is one of the paradigms that JavaScript supports.
 * And in fact, we have already used the power of first-class functions without knowing that they are called first-class functions
 * passing a function into another function as an argument: frist class function
 * ```javascript
 * const closeModel = ()=>{
 * model.classList.add('hidden');
 * overlay.classList.add('hidden');
 * };
 *
 * overlay.addEventListener('click', closeModel);
 * ```
 * we pass the closeModal function into the addEventListener function as if it was just a regular variable, right?
 * And actually not all languages have first-class functions, but JavaScript has, and it is amazing.
 */

/** dynamic language
 * dynamic actually means dynamically-typed.
 * in JavaScript, we don't assign data types to variables.Instead, they only became known
 * when the JavaScript engine executes our code.
 * Also, the type of variables can easily be changed as we reassign variables.
 * And this is basically what dynamically-typed means.
 * Now there is a lot of controversy if this is good or bad but this is just how it works.
 * Now, the same is not true for most other programming languages, where we have to manually assign types, to variables
 * And this then usually prevents bugs from happening, which is the reason why many people say that JavaScript
 * should be a strongly-typed language as well. And if you yourself want to use JavaScript with types,
 * then you can always look into TypeScript
 */

/** single-threaded language with non-blocking event loop
 *  what actually is a concurrency model? Well, it's just a fancy term
 * that means how the JavaScript engine handles multiple tasks happening at the same time.
 * But why do we need that? Well, because JavaScript itself runs in one single-thread,
 * which means that it can only do one thing at a time and therefore we need a way of handling
 * multiple things happening at the same time.
 * a thread is like a set of instructions that is executed in the computer's CPU.
 * So basically, the thread is where our code is actually executed in a machine's processor.
 * All right. But what if there is a long-running task, like fetching data from a remote server?
 * Well, it sounds like that would block the single thread where the code is running, right?
 * But of course we don't want that. What we want is so-called non-blocking behavior
 * and how do we achieve that? Well, by using a so-called event loop.
 * The event loop takes long-running tasks, executes them in the background and then puts them back in the main thread
 * once they are finished. And this is, in a nutshell, JavaScript's non-blocking event loop concurrency model
 * with a single thread It sounds like a mouthful for sure but in the end, it really just compresses to this.
 *
 *
 */

// The JS engin and Runtime.

/** JS engin
 * So a JavaScript engine is simply a computer program that executes JavaScript code.
 * There are a lot of steps involved in doing that, but essentially executing JavaScript code
 * is what an engine does. Now every browser has its own JavaScript engine 
 * but probably the most well known engine is Google's V8 engine.
 * The V eight engine powers Google Chrome, but also Node.js which is that JavaScript runtime
 * that we talked about in the beginning of the course, so the one that we can use to build server side applications
 * with JavaScript, so outside of any browser. And of course all the other browsers have their own JavaScript engines
 * which you can look up online if you're interested. Anyway, it's quite easy to understand what an engine 
 * but what's most important is to actually understand its components and how it works.
 * 
 * So any JavaScript engine always contains a call stack and a heap.
 * The call stack is where our code is actually executed using something called the execution context.
 * 
 * The heap is an unstructured memory pool which stores all the objects that our application needs.
 * Alright, so with this look at the engine, we have answered where our code is executed. But now 
 * the question is how the code is compiled to machine code ? so that it actually can be executed afterwards.
 * 
 * compilation and interpretation.
 * So in compilation, the entire source code And this machine code is then written into 
 * a portable file that can be executed on any computer.
 * So we have two different steps here. First, the machine code is built and then it is executed 
 * in the CPU so in the processor.
 * And the execution can happen way after the compilation of course.
 * For example, any application that you're using on your computer right now 
 * has been compiled before and you're now executing it way after it's compilation.
 * 
 * Now, on the other hand in interpretation, there is an interpreter which runs through the source code and executes it line by line.
 * So here we do not have the same two steps as before.
 * Instead the code is read and executed all at the same time.
 * Of course the source code still needs to be converted into machine code
 * but it simply happens right before it's executed and not ahead of time.
 * 
 * Now JavaScript used to be a purely interpreted language but the problem with interpreted languages
 * is that they are much, much slower than compiled languages.
 * This used to be okay for JavaScript, but now with modern JavaScript
 * and fully fledged web applications that we built and use today, low performance is no longer acceptable.
 * Just imagine you were using Google maps in your browser and you were dragging the map and each time you dragged
 * it would take one second for it to move That would be completely unacceptable, right?
 * Now many people still think that JavaScript is an interpreted language but that's actually not true anymore.
 * So instead of simple interpretation modern JavaScript engine now use a mix between interpretation and compilation.
 * which is called just-in-time compilation or JIT compilation.
 * This approach basically compiles the entire code into machine code at once and then executes it right away.
 * So we still have the two steps of regular ahead of time compilation but there is no portable file to execute.
 * And the execution happens immediately after a compilation. And this is perfect for JavaScript
 * as it's really a lot faster than just executing code line by line.
 * 
 * So as a piece of JavaScript code enters the engine the first step is to parse the code
 * which essentially means to read the code. During the parsing process, the code is parsed
 * into a data structure called the abstract syntax tree or AST.
 * This works by first splitting up each line of code into pieces that are meaningful to the language
 * like the const or function keywords, and then saving all these pieces into a tree structure.
 * This step also checks if there are any syntax errors in the code.
 * and the resulting tree will later be used to generate the machine code.
 * Now let's say we have a very simple program. All it does is to declare a variable like this,
 * const x = 23. So the parser will first split up the code into the const keyword, the variable name x,
 * the assignment operator and the value 23. And then it will save all these pieces into a tree structure
 * like this. So this is the abstract syntax tree for this simple program.
 * So we have a variable declaration which should be a constant with the name X and the value of 23.
 * And besides that there is a lot of other stuff here, So just imagine what it would look like for a large real application.
 * Now sometimes I get asked if this tree has anything to do with the DOM tree and the answer is a very clear no.
 * So this tree has absolutely nothing to do with the DOM. It is not related in any way. It's just a representation
 *   of our entire code inside the engine. Anyway, the next step is compilation which 
 * takes the generated AST and compiles it into machine code This machine code then gets executed right away
 * because remember modern JavaScript engine use just-in-time compilation. And remember execution happens
 * in the JavaScript engines call stack.
 * We have our code running so we can finish here, Right? Well, not so fast because modern JavaScript engines
 * actually have some pretty clever optimization strategies.
 * What they do is to create a very unoptimized version of machine code in the beginning
 * just so that it can start executing as fast as possible. Then in the background, this code is being optimized
 * and recompiled during the already running program execution. And this can be done multiple times
 * and after each optimization the unoptimized code is simply swept for the new more optimized code
 * without ever stopping execution of course.And this process is what makes modern engines such as the V-Eight so fast
 * and all this parsing, compilation and optimization happens in some special threads inside the engine 
 * that we cannot access from our code.So completely separate from the main thread that is basically running into call stack
 * executing our own code.
 * 
 * Now different engines implements in slightly different ways, but in a nutshell this is what modern just-in-time compilation looks like for JavaScript.
 * 

 * */

/** runtime
 * what a JavaScript runtime is and in particular, the most common one, which is the browser
 * and by doing this, we can get the bigger picture of how all the pieces fit together when we use JavaScript.
 * So we can imagine a JavaScript runtime as a big box or a big container which includes all the things that we need
 * in order to use JavaScript in this case, in the browser. And to heart of any JavaScript, runtime is always a JavaScript engine.
 * Without an engine there is no runtime and there is no JavaScript at all. However the engine alone is not enough.
 * In order to work properly, we also need access to the web APIs, and we talked about web APIs before, remember?
 * So that's everything related to the DOM or timers or even the console.log that we use all the time.
 * So essentially web APIs are functionalities provided to the engine, but which are actually not part of the JavaScript language itself.
 * JavaScript simply gets access to these APIs through the global window object. But it still makes sense that the web APIs
 * are also part of the runtime, because again a runtime is just like a box that contains all the JavaScript related stuff that we need.
 *
 * Next a typical JavaScript runtime also includes a so called callback queue. This is a data structure that contains
 * all the callback functions that are ready to be executed. For example we attach event handler functions to DOM elements like a button
 * to react to certain events, right? And these event handler functions are also called callback functions okay.
 *
 * So as the event happens, for example a click, the callback function will be called.   
 * And here is how that actually works behind the scenes
 * So the first thing that actually happens after the event
 * is that the callback function is put into the callback queue.
 * Then when the stack is empty 
the callback function is passed to the call stack so that it can be executed.
And this happens by something called the event loop.
So basically the event loop takes callback functions from the callback queue and puts them in the call stack
so that they can be executed. And remember how I said in the last lecture that the event loop
is how JavaScript's nonblocking concurrency model is implemented? Well, here is an overview of how that works.
Now we will go over why this makes JavaScript nonblocking in a special lecture about the event loop
However, it's also important to remember that JavaScript can exist outside of browsers, for example, in Node.js.
And so here is what the node JS JavaScript runtime looks like. It's pretty similar, but since we don't have a browser
of course, we can't have the web APIs because it's the browser who provides these.
Instead we have multiple C ++ bindings and a so called thread pool
Now details don't matter here at all.  I just want you to know that different JavaScript runtimes do exist.
 */
