import { useEffect, useState } from "react"
import Head from "next/head"
import scrabble from "@nosweat/scrabble" //use scrabble.find(letters)
import WordItem from "../components/WordItem"
import Hero from "../components/Hero"
import { getWordScore } from "../utils/word-score"

/* 
TODO:
- rewrite parts of the JSX to sort words by wordscore (highest scoring at the top)
*/

export default function Index() {
    const [letters, setLetters] = useState("cyigjuw")
    const [wordsArr, setWords] = useState([])

    useEffect(() => {
        if (letters.length >= 2) {
            const words = scrabble.find(letters)
            let wordScoreArray = []

            for (let i = 0; i < words.length; i++) {
                const obj = {
                    word: words[i],
                    score: getWordScore(words[i]),
                }

                wordScoreArray.push(obj)
            }
            setWords(wordScoreArray.sort((a, b) => b.score - a.score))
        }
    }, [letters])

    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <Hero setLetters={setLetters} letters={letters} wordsArr={wordsArr} />
                <section className="word-list">
                    <div className="word-list__inner">
                        <p class="word-list__title">Other words...</p>
                        <ul className="word-list__wrapper">
                            {wordsArr.map((word, i) => {
                                if (i >= 1) return <WordItem key={i} word={word.word} />
                            })}
                        </ul>
                    </div>
                </section>
            </main>
        </>
    )
}
