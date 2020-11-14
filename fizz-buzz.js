for (let i = 1; i <= 100; i += 1) {
  let fizz = i % 3;
  let buzz = i % 5;
  let fizzBuzz = !fizz && !buzz;

// Using switch conditional
  switch (true) {
    case fizzBuzz:
      console.log('FizzBuzz');
      break;
    case !fizz:
      console.log('Fizz');
      break;
    case !buzz:
      console.log('Buzz');
      break;
    default:
      console.log(i);
      break;
  }

  /* Using if conditional
  if (fizzBuzz) {
    console.log('FizzBuzz');
  } else if (!fizz) {
    console.log('Fizz');
  } else if (!buzz) {
    console.log('Buzz');
  } else {
   console.log(i);
  }
  */
}