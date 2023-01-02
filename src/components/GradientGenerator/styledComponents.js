import styled from 'styled-components'

export const BgContainer = styled.div`
  background: linear-gradient(
    to ${props => props.direction},
    ${props => props.colorOne},
    ${props => props.colorTwo}
  );
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`
export const RowContainer = styled.div`
  display: flex;
  justify-content: space-evenly;

  text-align: center;
`
export const InputContainer = styled.input`
  border: none;
  height: 6vh;
  width: 8vw;
  background-color: transparent;
`
export const CustomButton = styled.button`
  background-color: #00c9b7;
  color: #1e293b;
  width: 100px;
  border: none;
  padding: 10px;
  border-radius: 5px;
  margin-top: 2vh;
  text-align: center;
`

export const Button = styled.button`
  background-color: (${props => (props.direction ? '#fff' : '#ffffff79')});
  margin-left: 2vw;
  width: 80px;
  padding: 5px;
  text-align: center;
  border: none;
  width: 80px;
`
export const Heading = styled.h1`
  font-size: 40px;
  font-family: 'Roboto';
  color: #fff;
  font-family: @media screen and (min-width: 767px) {
    font-size: 20px;
  }
`
export const Paragraph = styled.p`
  font-size: 20px;
  color: #ffffff79;
  font-family: Roboto;
`
