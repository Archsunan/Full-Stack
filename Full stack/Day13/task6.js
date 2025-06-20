let w = 52;
let h = 1.65;
function main(w, h) {
    let ans = Math.round(w / (h * h));
    if (ans >= 18.7) {
        console.log("normal");
    } else {
        console.log("high");
    }
}
main(w,h);