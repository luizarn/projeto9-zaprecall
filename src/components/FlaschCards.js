import Card from "./Card";

export default function FlashCards({ cards, textCard, setTextCard, clicked, setClicked, showQuestion}) {
    return (
        <div>
            {cards.map((c) => (
                <Card
                    key={c.number}
                    number={c.number}
                    question={c.question}
                    answer={c.answer}
                    textCard={textCard}
                    setTextCard={setTextCard}
                    clicked={clicked}
                    showQuestion={showQuestion}
                />
            ))}
        </div>
    )
}