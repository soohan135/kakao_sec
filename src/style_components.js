import styled from "styled-components";

export const Button = styled.button`
background-color: #f0e9d9;
  border: 1px solid black;
  text-align: center;
  border-radius: 5px;
`;

export const Card_Container = styled.div`
display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Div_pokedex = styled.div`
display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: 250px;
  width: 60%;
  margin: auto;
  padding-top: 0px;
  padding-bottom: 10px;
  background-color: #f0e9d9;
  border: 2px solid #db2a27;
  border-radius: 15px;
`;

export const Div_Pokemon = styled.div`
display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  background-color: whitesmoke;
  border-radius: 5px;
  text-align: center;
  box-shadow: 0px 2px 2px #666;
`;

export const Div_Details = styled.div`
display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0e9d9;
  border: 2px solid #db2a27;
  border-radius: 15px;
  margin: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const Img_Details = styled.img`
width: 150px;
  height: 150px;
  object-fit: cover;
`;

export const H2_Details = styled.h2`
font-size: 24px;
  font-weight: 700;
  margin-bottom: 10px;
  color: #db2a27;
`;

export const P_Details = styled.p`
font-size: 18px;
  font-weight: 500;
  margin-bottom: 5px;
  color: #404040;
`;

export const Type_and_Ability_Details = styled.span`
display: inline-block;
  background-color: #e8e8e8;
  padding: 5px 10px;
  border-radius: 20px;
  margin-right: 10px;
  font-weight: 600;
  color: #404040;
`;