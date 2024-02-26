// სიტყვების მასივი
const words = ["თამაში", "ჯავასკრიპტი", "აკადემია", "კომპიუტერი", "პროგრამირება", "დეველოპერი", "ანგულარი", "ლექცია", "გამოცდა", "პროექტი"];

// სიტყვი შერჩევა მასივიდან
const chosenWord = words[Math.floor(Math.random() * words.length)];

// გამოცნობილი ასობგერის შენახვა
const guessedLetters = new Set();

// რამდენი ცდა აქვს მოთამაშეს
let remainingTries = 10;

// ფუნქცია, რომელიც ანახებს დაშიფრულ სიტყვას
function displayWord() {
    let display = "";
    for (const char of chosenWord) {
        if (guessedLetters.has(char)) {
            display += char + " ";
        } else {
            display += "_ ";
        }
    }
    return display.trim();
}

// ფუნქცია, რომელიც ამოწმებს გამოიცნო თუ არა მოთამაშემ მთლიანი ასიტყვა
function hasGuessedWord() {
    return displayWord().replace(/ /g, "") === chosenWord;
}

// ფუნქცია, რომელიც აცხადებს გამარჯვებას
function handleWin() {
    console.log("გილოცავ! შენ გამოიცანი სიტყვა " + chosenWord);
    alert("გილოცავ! შენ გამოიცანი სიტყვა: " + chosenWord);
}

// თამაშის ლუპი
while (remainingTries > 0) {
    // აჩვენებს დაშიფრულ სიტყვას და რამდენი ცდა არის დარჩენილი
    console.log("ჩაფიქრებული სიტყვა: " + displayWord());
    console.log("დარჩენილი ცდა: " + remainingTries);

    // უგდებს მოთამაშეს ასობგერის ჩასაწერ ველს
    const guess = prompt("ჩაწერე ასობგერა:");

    // ამოწმებს მოთამაშის მიერ ჩაწერილი ასობგერის სისწორეს (ვალიდაცია)
    if (guess === null) {
        // თამაშის გაუქმება cancel ღილაკით
        console.log("თქვენ გააუქმეთ თამაში.");
        break;
    } else if (guess.length === 1 && /^[ა-ჰ]$/.test(guess)) {
        // ამოწმებს გამოყენებული ჰქონდა თუ არა უკვე ეს ასობგერა მომხარებელს და არ აკლებს ცდას
        if (guessedLetters.has(guess)) {
            console.log("აღნიშნული ასობგერა უკვე გამოიყენე.");
        } else {
            // ამატებს ჩაწერილ ასობგერას ცვლადში
            guessedLetters.add(guess);

            // ამოწმებს შეყვანილი ასობგერა შედის თუ არა შერჩეულ სიტყვაში
            if (chosenWord.includes(guess)) {
                // ამოწმებს აღნიშნული ასობგერის შეყვანის შემდეგ გამოიცნო თუ არა მოთამაშემ მთლიანი სიტყვა
                if (hasGuessedWord()) {
                    handleWin();
                    break;
                }
                console.log("სწორია! აღნიშნული ასობგერა არის სიტყვაში");
            } else {
                // არასწორი ასობგერა და დაკლებული ცდა
                console.log("არასწორია! კიდევ სცადე სხვა ასობგერა.");
                remainingTries--;
            }
        }
    } else {
        console.log("ჩაწერე ვალიდური ასობგერა (ა-ჰ)");
    }
}

// ცდა ამოიწურა და მოთამაშემ წააგო
if (remainingTries === 0) {
    console.log("სამწუხაროდ წააგე! ჩაფიქრებული სიტყვა იყო: " + chosenWord);
    alert("სამწუხაროდ წააგე! ჩაფიქრებული სიტყვა იყო: " + chosenWord);
}
