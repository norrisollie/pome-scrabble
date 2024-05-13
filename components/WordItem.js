import React from "react"
import { getLetterScore, getWordScore } from "../utils/word-score"

export default function WordItem(props) {
    const { word } = props
    return (
        <li className="word-list__item">
            <div className="word-list__word">{word.toUpperCase()}</div>
            <div className="word-list__tile-container">
                {word.split("").map((w, index) => {
                    return (
                        <div className="word-list__letter" key={index}>
                            {w.toUpperCase()}
                            <div className="word-list__tile-score">{getLetterScore(w)}</div>
                        </div>
                    )
                })}
            </div>
            <div className="word-list__letter-scores">
                =
                {word.split("").map((w, i, arr) => {
                    if (arr.length !== i + 1) {
                        return getLetterScore(w) + "+"
                    } else {
                        return getLetterScore(w)
                    }
                })}
            </div>
            <div className="word-list__score">
                =<span className="word-list__score-purple">{getWordScore(word)}</span>
            </div>
        </li>
    )
}
