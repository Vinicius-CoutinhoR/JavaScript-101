function shopping(work1, work2) {
    const buyIceCream = work1 || work2;
    const buyFiftyInchIv = work1 && work2;
    // const buyThirtyTwoInchTv = !!(work1 ^ work2) // bitwise xor
    const buyThirtyTwoInchTv = work1 != work2;
    const keepHealthy = !work2; // Unary Operator

    return { buyIceCream, buyFiftyInchIv, buyThirtyTwoInchTv, keepHealthy }
}

console.log(shopping(true, true));
console.log(shopping(true, false));
console.log(shopping(false, true));
console.log(shopping(false, false));