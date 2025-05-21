import React from 'react'
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div><Link to="/pokemon/dex">
  <button>About 페이지로 이동</button>
</Link></div>
  )
}
export default Home;