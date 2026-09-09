const ip=/\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/;

console.log(ip.test("517.5.0.1"));
console.log(ip.test("51726421"));
console.log(ip.test("2563.5433.5333.7563"));
console.log(ip.test(" "));
console.log(ip.test("2563.54.5"));
console.log(ip.test("983.55.498.4"));


