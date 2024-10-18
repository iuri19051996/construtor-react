import { Header } from "../header/header";
import teste from "./main.module.css";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #BF4F74;
`;

const Paragrafo = styled.p`
  font-size: 1.5em;
  text-align: center;
  color: #BF4F74;
`;

export function Main(props) {

    return (
      <div>
        <Header></Header>
        <div className={teste.texto}>
          <Title>titulo teste</Title>
          <Paragrafo>teste teste teste</Paragrafo>
        </div>
      </div>
    )
}