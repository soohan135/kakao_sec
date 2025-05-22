import React from 'react'
import { Link } from "react-router-dom";
import { Button, Img_logo, Div_Main } from './style_components';

export const Home = () => {
  return (
    <Div_Main>
      <Img_logo src="pokemonlogo.png"/>
      <Link to="/pokemon/dex">
  <Button>포켓몬 덱 만들러 가기</Button>
</Link>
</Div_Main>
  )
}
export default Home;