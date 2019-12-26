let r_factorial = n => {
  if (n == 0) return 1;
  return n * r_factorial(n - 1);
};

console.log(r_factorial(100));
