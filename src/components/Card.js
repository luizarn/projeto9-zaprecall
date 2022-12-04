export default function Card({textCard, clicked, setclicked, number, question, answer, showQuestion}){

    return(
        <div className="pergunta-fechada">
{number}
 <ion-icon name="play-outline" onClick={() => showQuestion()}></ion-icon>
        </div>
    )


}

