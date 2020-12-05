import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 40vw;
  flex-direction: column;
  background-color: white;
  border-radius: 20px;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
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

export const Image = styled.img`
  height: 70px;
  width: 70px;
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

export const Button = styled.button`
  /* height: 50px; */
  margin-top: 20px;
  padding: 0px 50px;
  align-items: center;
  border-radius: 20px;
  outline:none;
`;