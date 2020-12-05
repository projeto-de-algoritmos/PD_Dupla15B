import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  height: 100%;
  width: 100%;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  margin-top: 5%;
  width: 70%;
  height: 13%;
  background-image: linear-gradient(#4aaced, #3e81c4);
  align-items: center;
  justify-content: center;
`;

export const MarketBody = styled.div`
  display: flex;
  height: 70%;
  width: 70%;
  border: 3px solid #333333;
  box-sizing: border-box;
  align-items: center;
  background-color: #eeeeee;
`;

export const ItensDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 85%;
  width: 55%;
  margin-left: 20px;
  background-color: #F8F4D2;
  border: 5px solid #fcbb7d;
  border-radius: 5px;
  box-sizing: border-box;
  overflow: scroll;
`;

export const SingleItem = styled.div`
  height: 120px;
  width: 90%;
  display: flex;
  align-items: center;
  border: 3px dashed #333333;
  border-radius: 5px;
  margin-left: 20px;
  margin-top: 20px;
`;

export const ItenDescription = styled.div`
  display: flex;
  align-self: center;
  justify-content: center;
  height: 100%;
  width: 70%;
`;

export const Price = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 45%;
`;

export const MoneyBox = styled.div`
  display: flex;
  margin-top: 10%;
  background-color: #fff;
  border: 3px solid #333333;
  border-radius: 5px;
  height: 20%;
  width: 70%;
  box-sizing: border-box;
  align-self: flex-end;
  margin-right: 20px;
`;

export const MoneyText = styled.p`
  margin-left: 10px;
  margin-bottom: 0px;
`;

export const MoneyInput = styled.input`
  border-top: 0px;
  border-bottom: 2px solid black;
  border-right: 0px;
  border-left: 0px;
  align-self: flex-end;
  margin-right: 10px;
  margin-bottom: 10px;
`;

export const Image = styled.img`
  height: 70px;
  width: 70px;
`;

export const ButtonCollection = styled.div`
  align-self: start;
  margin-top: 25%;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 40%;
  width: 45%;
`;

export const FocusType = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10%;
  background-color: #fff;
  border: 3px solid #333333;
  border-radius: 5px;
  height: 15%;
  width: 90%;
  box-sizing: border-box;
  align-self: flex-end;
  margin-right: 20px;

  ${(props) =>
    props.selected &&
    css`
      background-color: red;
      p {
        color: white
      }
    `}
`;

export const Button = styled.button`
  /* height: 50px; */
  margin-top: 20px;
  padding: 0px 50px;
  align-items: center;
  border-radius: 20px;
  outline:none;
  margin-left: 20px;
`;