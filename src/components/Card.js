import { useState } from "react"
import play from "../assets/img/seta_play.png"
import turn from "../assets/img/seta_virar.png"
import wrong from "../assets/img/icone_erro.png"
import almost from "../assets/img/icone_quase.png"
import right from "../assets/img/icone_certo.png"

export default function Card({number, question, answer, concluded, setConcluded, arrayConcluded}) {
   
    const [textCard, setTextCard] = useState(number)
    const [classQuestion, setClassQuestion] = useState("pergunta-fechada")
    const imageIcon = play
    const [complement, setComplement] = useState( <img src={imageIcon} onClick={() => showText()} alt="icon"/>)



    
    function showText() {
        if(imageIcon === play){
            setTextCard(question)
            setClassQuestion("pergunta-aberta")
   
            setComplement ( <img src={turn} onClick={() => showAnswer()} alt="icon"/>)
        } 
    }

    function showAnswer(){
        if(turn){
            setTextCard(answer)
            setComplement ( <div className="container-botoes">
            <button className="red"  onClick={() => checkAnswer("red")}> 
            <p>Não lembrei</p>
            </button>

            <button className="yellow"  onClick={() => checkAnswer("yellow")}> 
            Quase não lembrei
            </button>
            
            <button className="green"  onClick={() => checkAnswer("green")}> 
            Zap!
            </button>
            </div>
            )
        }
    }

    function checkAnswer(choice){
  
        if(choice === "red"){
            setTextCard(number)
            setClassQuestion("pergunta-fechada")
            setComplement ( <img src={wrong} alt="icon"/>)
            arrayConcluded.push(choice)
            setConcluded((arrayConcluded.length))
        } 
        if(choice === "yellow"){
            setTextCard(number)
            setClassQuestion("pergunta-fechada")
            setComplement ( <img src={almost} alt="icon"/>)
            arrayConcluded.push(choice)
            setConcluded((arrayConcluded.length))
        }
        
        if(choice === "green"){
            setTextCard(number)
            setClassQuestion("pergunta-fechada")
            setComplement ( <img src={right} alt="icon"/>)
            arrayConcluded.push(choice)
            setConcluded((arrayConcluded.length))
        }
    }
 

    // function clickQuestion(){
    //     const newConcluded = concluded 
    //     setConcluded(newConcluded + 1)
    //     console.log(newConcluded)
    //   }



    return (
        <div className={classQuestion}>
            {textCard}
            {complement}
        </div>
    )


}

