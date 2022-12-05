import styled from "styled-components"
import logo from "../assets/img/logo.png"
import cards from "../deck"
import FlashCards from "./FlaschCards"

export default function ZapMain() {

  return (
    <>
      <SreenContainer>

        <LogoContainer>
          <img src={logo} alt="logo" />
          <h1>ZapRecall</h1>
        </LogoContainer>

        <FlashCards
          cards={cards}
        />

      </SreenContainer>
    </>


  )
}

const SreenContainer = styled.div`
background-color: #FB6B6B;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
  padding-bottom: 200px;


`

const LogoContainer = styled.div`
 display: flex;
  align-items: center;
  margin: 40px 0 20px 0;
  h1{
  font-family: 'Righteous';
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 45px;
  color: #FFFFFF;
  margin-left: 20px;
  }
  img{
    width: 52px;
  }
`

