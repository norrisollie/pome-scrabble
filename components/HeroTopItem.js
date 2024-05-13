import React from "react"
import { getLetterScore, getWordScore } from "../utils/word-score"

export default function HeroTopItem(props) {
    const { word } = props
    return (
        <div className="hero-top-item__item">
            <div className="hero-top-item__tile-container">
                {word.split("").map((w, index) => {
                    return (
                        <div className="hero-top-item__letter" key={index}>
                            {w.toUpperCase()}
                            <div className="hero-top-item__tile-score">{getLetterScore(w)}</div>
                        </div>
                    )
                })}
            </div>
            <div className="hero-top-item__letter-scores">
                =
                {word.split("").map((w, i, arr) => {
                    if (arr.length !== i + 1) {
                        return getLetterScore(w) + "+"
                    } else {
                        return getLetterScore(w)
                    }
                })}
            </div>
            <div className="hero-top-item__score">
                =<span className="hero-top-item__score-purple">{getWordScore(word)}</span>
            </div>
        </div>
    )
}
