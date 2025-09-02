import Bun from "./lua.js";
// Bun.hello = (input)=>{
//     // replace every word into hello
//     const words = input[0].split(" ");
//     const helloWords = words.map(()=>{
//         return "hello";
//     });
//     console.log(helloWords.join(" "));
// }

await Bun.lua`
function add(a, b)
    return a + b
end

function subtract(a, b)
    return a - b
end

print("add(5, 3) = ".. add(5, 3))  -- Output: 8
print("subtract(5, 3) = ".. subtract(5, 3))  -- Output: 2`