function sockMerchant(n, ar) {
  let pairs = 0;
  let color = new Array();
  ar.forEach(i => {
    if (!color[i]) color[i] = i;
    else {
      pairs++;
      delete color[i];
    }
  });
  return pairs;
}

console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));
