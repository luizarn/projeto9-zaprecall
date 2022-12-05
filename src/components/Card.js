import { useState } from "react"
import play from "../assets/img/seta_play.png"
import turn from "../assets/img/seta_virar.png"
import wrong from "../assets/img/icone_erro.png"
import almost from "../assets/img/icone_quase.png"
import right from "../assets/img/icone_certo.png"
import styled, { css } from "styled-components"

export default function Card({ number, question, answer, concluded, setConcluded, arrayConcluded }) {

    const [textCard, setTextCard] = useState(number)
    const [classQuestion, setClassQuestion] = useState(true)
    //qquando o estado do CLassQiestin é true, ele estiliza de acordo com uma pergunta fechada, caso seja false, estiliza de acordo com uma pergunta aberta.
    const imageIcon = play
    const [classColorRed, setClassColorR] = useState(false)
    const [classColorYellow, setClassColorY] = useState(false)
    const [classColorGreen, setClassColorG] = useState(false)
    const [complement, setComplement] = useState(<img src={imageIcon} onClick={() => showText()} alt="icon" />)




    function showText() {
        setClassQuestion(false)
        setTextCard(question)
        setComplement(<img src={turn} onClick={() => showAnswer()} alt="icon" />)
    }


    function showAnswer() {
        if (turn) {
            setTextCard(answer)
            setComplement(<ContainerBotoes>
                <Button red onClick={() => checkAnswer("red")}>
                    Não lembrei
                </Button>
                <Button yellow onClick={() => checkAnswer("yellow")}>
                    Quase não lembrei
                </Button>
                <Button green onClick={() => checkAnswer("green")}>
                    Zap!
                </Button>
            </ContainerBotoes>
            )
        }
    }

    function checkAnswer(choice) {

        if (choice === "red") {
            setTextCard(number)
            setClassQuestion("true")
            setComplement(<img src={wrong} alt="icon" />)
            arrayConcluded.push(choice)
            setConcluded((arrayConcluded.length))
            setClassColorR(true)
        }
        if (choice === "yellow") {
            setTextCard(number)
            setClassQuestion("true")
            setComplement(<img src={almost} alt="icon" />)
            arrayConcluded.push(choice)
            setConcluded((arrayConcluded.length))
            setClassColorY(true)
        }

        if (choice === "green") {
            setTextCard(number)
            setClassQuestion("true")
            setComplement(<img src={right} alt="icon" />)
            arrayConcluded.push(choice)
            setConcluded((arrayConcluded.length))
            setClassColorG(true)
        }
    }


    return (
        <UniqueCard classQuestion={classQuestion} >
            <Paragrafo classColorRed={classColorRed} classColorYellow={classColorYellow} classColorGreen={classColorGreen}>
                {textCard}
            </Paragrafo>
            {complement}
        </UniqueCard>
    )
}


const ContainerBotoes = styled.div`
display: flex;
justify-content: space-between;
width: 80%;
justify-content: space-between;
margin: 20px;
`

const Button = styled.button`
  display: flex;
  justify-content: space-between;
  width: 85.17px;
  margin-left: 7.74px;
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #FFFFFF;
  border-radius: 5px;
  padding:5px;
  border-style: none;
  cursor: pointer;
  ${props =>
        props.red && css`
   background-color:#FF3030;
  `};
  ${props =>
        props.yellow && css`
   background-color:#FF922E;
  `};
  ${props =>
        props.green && css`
   background-color:#2FBE34;
  `};
`

const UniqueCard = styled.div`
font-family: 'Recursive';
  width: 300px;
  min-height: ${props => props.classQuestion ? "" : "100px"};
  background-color: ${props => props.classQuestion ? "#FFFFFF" : "#FFFFD5"};
  margin: 12px;
  padding: 15px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: flex;
  flex-direction: ${props => props.classQuestion ? "" : "column"};
  align-items: center;
  justify-content: ${props => props.classQuestion ? "space-between" : "flex-start"};
  position: relative;
img{
    position: ${props => props.classQuestion ? "" : "absolute"}; 
    bottom: ${props => props.classQuestion ? "" : "10px"};
    right: ${props => props.classQuestion ? "" : "10px"};
    cursor: pointer;
}
`

const Paragrafo = styled.p`
font-size: ${props => props.classQuestion ? "16px" : "18px"};
font-weight: ${props => props.classQuestion ? "700px" : "400px"};
text-decoration: ${props => props.classColorRed && "line-through"};
color: ${props => props.classColorRed && "#FF3030"};
text-decoration: ${props => props.classColorYellow && "line-through"};
color: ${props => props.classColorYellow && "#FF922E"};
text-decoration: ${props => props.classColorGreen && "line-through"};
color: ${props => props.classColorGreen && "#2FBE34"};
`