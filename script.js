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
