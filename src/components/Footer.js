export default function Footer({concluded, cards}){
    return(

        <div className="footer-concluidos">
  {concluded}/{(cards.length)} CONCLUÍDOS
</div>
    )
}