var points = {
    1: "AEIOULNSTR",
    2: "DG",
    3: "BCMP",
    4: "FHVWY",
    5: "K",
    8: "JX",
    10: "QZ",
}

export function getWordScore(word) {
    let score = 0
    for (let i = 0; i < word.length; i++) {
        for (let point in points) {
            if (points[point].includes(word[i].toUpperCase())) {
                score += parseInt(point)
            }
        }
    }
    return score
}

export function getLetterScore(letter) {
    console.log(letter)
    for (let point in points) {
        if (points[point].includes(letter.toUpperCase())) {
            return point
        }
    }
}
