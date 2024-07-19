function countdown(numbner) {
    if (numbner <= 0) {
        console.log("done");
        return;
    }
    console.log(numbner);
    countdown(numbner - 1);
}
countdown(5);
