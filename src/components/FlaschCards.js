import Card from "./Card";

export default function FlashCards({ cards}) {
    return (
        <div>
            {cards.map((c) => (
                <Card
                    key={c.number}
                    number={c.number}
                    question={c.question}
                    answer={c.answer}
                    
                />
            ))}
        </div>
    )
}