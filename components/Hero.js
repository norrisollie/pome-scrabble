import React from "react"
import HeroTopItem from "../components/HeroTopItem"

export default function Hero(props) {
    const { setLetters, wordsArr, letters } = props
    return (
        <section className="hero">
            <div className="hero__inner">
                <h1 className="hero__title">Pome Scrabble</h1>
                <p className="hero__slogan">Cheat to win!</p>
                <input
                    className="hero__input"
                    type="text"
                    value={letters}
                    maxLength={7}
                    onChange={(e) => {
                        setLetters(e.target.value)
                    }}
                />
                <div>
                    <p class="hero__top-hit">Top hit</p>
                    <div>
                        {wordsArr.map((word, i) => {
                            if (i < 1) return <HeroTopItem key={i} word={word.word} />
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}
