import { useState } from "react";
import Card from "./Card";
import Footer from "./Footer";

export default function FlashCards({ cards}) {

    const [concluded, setConcluded] = useState(0)
    const arrayConcluded = []

    return (
        <>
        <div>
            {cards.map((c) => (
                <Card
                    key={c.number}
                    number={c.number}
                    question={c.question}
                    answer={c.answer}
                    concluded={concluded}
                    setConcluded={setConcluded}
                    arrayConcluded={arrayConcluded}
                />

            ))}
          

        </div>
          <Footer
          cards={cards}
          concluded={concluded}
          />
          </>
    )
}