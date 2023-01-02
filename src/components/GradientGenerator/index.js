import {Component} from 'react'
import {
  BgContainer,
  RowContainer,
  InputContainer,
  CustomButton,
  Button,
  Heading,
  Paragraph,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    colorBoxOne: '#8ae323',
    colorBoxTwo: '#014f7b',
    direction: gradientDirectionsList[0].value,
  }

  onChangeColorOne = event => {
    this.setState({colorBoxOne: event.target.value})
  }

  onChangeColorTwo = event => {
    this.setState({colorBoxTwo: event.target.value})
  }

  changeDirection = event => {
    const {direction} = this.state
    this.setState({
      direction: event.target.value,
    })
    console.log(direction)
  }

  onGenerate = event => {
    event.preventDefault()
    const {colorBoxOne, colorBoxTwo, direction} = this.state
    this.setState({colorBoxOne, colorBoxTwo, direction})
  }

  renderInput = () => {
    const {colorBoxOne, colorBoxTwo, direction} = this.state
    return (
      <BgContainer
        data-testid="gradientGenerator"
        direction={direction}
        colorOne={colorBoxOne}
        colorTwo={colorBoxTwo}
      >
        <div>
          <Heading>Generate a CSS Color Gradient</Heading>
          <Paragraph>Choose Direction</Paragraph>
          <form onSubmit={this.onGenerate}>
            {gradientDirectionsList.map(each => (
              <Button
                direction={each.directionId}
                key={each.directionId}
                value={each.value}
                type="button"
                id={each.directionId}
                onClick={this.changeDirection}
              >
                {each.displayText}
              </Button>
            ))}

            <Paragraph>Pick the Colors</Paragraph>
            <RowContainer>
              <p>{colorBoxOne}</p>
              <p>{colorBoxTwo}</p>
            </RowContainer>
            <RowContainer>
              <InputContainer
                type="color"
                value={colorBoxOne}
                onChange={this.onChangeColorOne}
              />
              <InputContainer
                type="color"
                value={colorBoxTwo}
                onChange={this.onChangeColorTwo}
              />
            </RowContainer>
            <CustomButton type="submit">Generate</CustomButton>
          </form>
        </div>
      </BgContainer>
    )
  }

  render() {
    return <>{this.renderInput()}</>
  }
}

export default GradientGenerator
