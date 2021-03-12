const date1 = new Date();

setTimeout(() => {
  const date2 = new Date();
  const calc = date2 - date1;
  console.log(calc < 3000);
}, 3200000000);
