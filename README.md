# LearnJSTSPlaywright

A collection of JavaScript learning examples and small practice exercises, organized by topic:

- **Language basics:** output, arithmetic, the JavaScript engine, declarations and scope (`Var_Let_Const_Hoisting_TDZ/`), literals (`Literal/`), operators (`Operator/`), conditions (`ifelsestatement/`, `Switch/`), and increment/decrement (`incre-decre/`).
- **Loops and input:** `for`, `while`, and `do...while` exercises (`loops/`, `whileloop/`, `dowhile/`) plus user-input examples (`userinput/`).
- **Arrays:** array creation, iteration, searching, sorting, copying, slicing, transformations, and multidimensional arrays (`Array/`, `MultidimensionalArray/`).
- **Functions and asynchronous JavaScript:** function forms, arrow functions, callbacks and callback nesting (`Functions/`, `Callback/`), closures (`function_closure/`), promises (including `all`, `race`, `allSettled`, and `finally`; `Promise/`), and `async`/`await` with sequential and parallel examples (`Asynch_await/`).
- **Objects and modules:** objects, copying and references, classes, and import/export utility examples (`object/`, `Class_object/`, `ExpoImpo/`).
- **Strings:** string operations and search examples (`string/`).
- **Playwright practice:** a few Playwright-oriented spec/API examples are in `Asynch_await/`.

## Run an example

Install [Node.js](https://nodejs.org/), open a terminal at the repository root, and pass an example's path to `node`:

```sh
node HelloWorld.js
node Array/iterate.js
node Promise/promise.js
node Asynch_await/asynch_await.js
```

Each example is intended to be explored independently; replace the path to run another file. Some examples expect interactive input or browser APIs. The Playwright spec examples require a Playwright setup and `@playwright/test`; ES module import/export examples also need to be run in a Node.js environment configured for ES modules. This repository does not define a single application entry point or shared npm script for running every example.
