import { useState } from "react"
import play from "../assets/img/seta_play.png"
import turn from "../assets/img/seta_virar.png"

export default function Card({number, question, answer }) {
   
    const [textCard, setTextCard] = useState(number)
    const [classQuestion, setClassQuestion] = useState("pergunta-fechada")
    const [imageIcon, setImageIcon] = useState(play)

    function showQuestion() {
        setTextCard(question)
        setClassQuestion("pergunta-aberta")
        setImageIcon(turn)
    }


    return (
        <div className={classQuestion}>
            {textCard}
            <img src={imageIcon} onClick={() => showQuestion()} alt="icon"/>
        </div>
    )


}

