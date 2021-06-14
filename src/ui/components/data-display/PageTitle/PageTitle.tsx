import React from "react"; //importar o React
import {
  PageTitleContainer,
  PageTitleStyled,
  PageSubtitleStyled,
} from "./PageTitle.style";

interface PageTitleProps {
  title: string;
  subtitle?: string | JSX.Element; //uso do "| = ou"
} /*as declarações da interface serve para poupar o tempo no decorrer da programação 
de um projeto, onde pode ser usado no props o comando "CTRL+tecla Space".*/

const PageTitle: React.FC<PageTitleProps> = (props) => {
  return (
    <PageTitleContainer>
      <PageTitleStyled>{props.title}</PageTitleStyled>
      <PageSubtitleStyled>{props.subtitle}</PageSubtitleStyled>
    </PageTitleContainer>
  ); //criar a função page title e retornar algum elemento.
};

export default PageTitle; // exportar o elemento
