// Type (型態) ＆ Value (值)
// undefined -> Value 
// null -> Value

let str: (string | undefined); // 沒有設值 or 設的值就是 `undefined`
// What is the value of str? -> `undefined`

console.log(str);

let str2: (string | null) = null;
// What is the value of str?

console.log(str2);

let str3: (string | null) = null;

function test(): (string | null) {
    return null;
}
