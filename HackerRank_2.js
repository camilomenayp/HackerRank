// 1 | 2, 3 | 4, 5

function pageCount(n, p) {
  let total = Math.trunc(n / 2);
  let ltr = Math.trunc(p / 2);
  let rtl = total - ltr;
  return Math.min(ltr, rtl);
}

console.log(pageCount(5, 4));
