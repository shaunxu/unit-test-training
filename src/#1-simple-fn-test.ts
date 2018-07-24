import { add } from "./#1-simple-fn";

const x = 3;
const y = 5;
const result = add(x, y);
if (result === 8) {
    console.log("test pass");
}
else {
    console.log("test fail");
}