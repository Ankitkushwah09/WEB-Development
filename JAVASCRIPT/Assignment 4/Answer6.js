function curry(fn) {
    return function curried(...args) {
      if (args.length >= fn.length) {
        return fn(...args);
      } else {
        return function (...moreArgs) {
          return curried(...args, ...moreArgs);
        };
      }
    };
}
  
// Testing the curry function with a function that adds two numbers
  function add(a, b) {
    return a + b;
  }
  
  const curriedAdd = curry(add);
  const result = curriedAdd(2)(3); // Returns 5
  