import styled from "styled-components";

export const Container = styled.div`
  height: 150px;
  text-align: center;
  background: teal;
`;

export const Header = styled.h1``;

export const TitleBack = styled.div`
  padding-top: 0px;
  color: #fff;
  font-family: 'Roboto Slab', serif;
  font-size: 170px;
  opacity: 0.2;
`;

export const Title = styled.div`
  padding-top: 0px;
  color: #fff;
  font-family: 'Roboto Slab', serif;
  font-size: 70px;
  position: absolute;
  top: 0;
  width: 100%;
  text-align: center;

  @media (max-width: 750px) {
    font-size: 11vw;
  }
`;


