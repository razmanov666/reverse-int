function reverse (n) {
    n=+(Math.abs(n).toString().split('').reverse().join(''));

    return n;
}

console.log(reverse(12));