// Style your components here
import styled from 'styled-components'

export const BackgroundContainer = styled.div`
  display: flex;
  width: 80vw;
  padding: 20px;
  margin: 20px;
  gap: 300px;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin-top: 20px;
  gap: 10px;
`

export const GenerateButton = styled.button`
  background-color: #0b69ff;
  border-radius: 11px;
  color: white;
  border-width: 0px;
  margin-top: 20px;
  width: 130px;
  height: 40px;
`

export const DisplayContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  justify-content: space-between;
  align-items: center;
  background-image: url(${props => props.bgImage});
  background-size: cover;
  width: 300px;
  height: 300px;
`
export const ParaElement = styled.p`
  font-size: ${props => props.fontsize}px;
`
