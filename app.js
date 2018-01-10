let friends = ['Dylan', 'Miranda', 'Kyle', 'Thomas', 'Jordan'];

for (i = 0; i < friends.length; i++) {
    console.log(friends[i] + ':');
    for (j = 99; j > 2; j--) {
        console.log(`${j} lines of code in the file, ${j} lines of code; ' + ${friends[i]}strikes one out, clears it all out, ${(j - 1)} lines of code in the file.`);
    }
    console.log(`2 lines of code in the file, 2 lines of code; ${friends[i]} strikes one out, clears it all out, 1 line of code in the file.`);
    console.log(`1 line of code in the file, 1 line of code in the file; ${friends[i]} strikes one out, clears it all out, no more lines of code in the file.`);
}
