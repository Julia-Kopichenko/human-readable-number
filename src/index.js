module.exports = function toReadable (number) {
    let numbersToTen = ['zero','one','two','three','four','five','six','seven','eight','nine'];
    let numbersToTwenty = ['','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
    let tens = ['','ten','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
    let result = '';
    let numberToString = String(number);

    if (number < 10) {
        return result += numbersToTen[numberToString[0]];
    }
    if (number < 100) {
        if (number % 10 == 0) {
            return result += tens[numberToString[0]];
        } else if (numberToString[0] == 1) {
            return result += numbersToTwenty[numberToString[1]];
        }
        else {
            return result += tens[numberToString[0]] + ' ' + numbersToTen[numberToString[1]];
        }
    }
    if (number < 1000) {
        if (number % 10 == 0) {
            return (result += numbersToTen[numberToString[0]] + ' ' + 'hundred' + ' ' + tens[numberToString[1]]).trim();
        } else if (numberToString[1] == 0) {
            return result += numbersToTen[numberToString[0]] + ' ' + 'hundred' + ' '+ numbersToTen[numberToString[2]];
        } else if (numberToString[1] == 1) {
            return result += numbersToTen[numberToString[0]] + ' ' + 'hundred' + ' '+ numbersToTwenty[numberToString[2]];
        } else {
            return result += numbersToTen[numberToString[0]] + ' ' + 'hundred' + ' '+ tens[numberToString[1]] + ' ' + numbersToTen[numberToString[2]];
        }
    }
}

// toReadable(999);
