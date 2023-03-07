import {Component} from 'react'
import {
  InputContainer,
  BackgroundContainer,
  GenerateButton,
  DisplayContainer,
  ParaElement,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here
class MemeGenerator extends Component {
  state = {
    display: false,
    imageUrl: '',
    topText: '',
    bottomText: '',
    fontSize: fontSizesOptionsList[0].displayText,
  }

  displayPic = () => {
    this.setState(prevState => ({display: !prevState.display}))
  }

  imageUrlFunction = event => {
    this.setState({imageUrl: event.target.value})
  }

  topTextFunction = event => {
    this.setState({topText: event.target.value})
  }

  bottomTextFunction = event => {
    this.setState({bottomText: event.target.value})
  }

  fontSizeFuntion = event => {
    this.setState({fontSize: event.target.value})
  }

  displayPic = event => {
    event.preventDefault()
    const {imageUrl, topText, bottomText} = this.state
    console.log(imageUrl)
    switch ('') {
      case imageUrl:
        return alert('Enter Image Url')
      case topText:
        return alert('Enter Top Text')
      case bottomText:
        return alert('Enter Bottom Text')
      default:
        this.setState(prevState => ({display: !prevState.display}))
        return null
    }
  }

  render() {
    const {display, imageUrl, topText, bottomText, fontSize} = this.state
    return (
      <BackgroundContainer>
        <form
          className="css-all-input-container"
          type="submit"
          onSubmit={this.displayPic}
        >
          <h1>Meme Generator</h1>
          <InputContainer>
            <label htmlFor="imageurl">Image Url</label>
            <input
              type="text"
              placeholder="Enter the Image URL"
              id="imageurl"
              onChange={this.imageUrlFunction}
              value={imageUrl}
              style={{borderRadius: '5px', height: '30px', width: '400px'}}
            />
          </InputContainer>
          <InputContainer>
            <label htmlFor="toptext">Top Text</label>
            <input
              type="text"
              placeholder="Enter the Top Text"
              id="toptext"
              onChange={this.topTextFunction}
              value={topText}
              style={{borderRadius: '5px', height: '30px', width: '400px'}}
            />
          </InputContainer>
          <InputContainer>
            <label htmlFor="bottomtext">Bottom Text</label>
            <input
              type="text"
              placeholder="Enter the Bottom Text"
              id="bottomtext"
              onChange={this.bottomTextFunction}
              value={bottomText}
              style={{borderRadius: '5px', height: '30px', width: '400px'}}
            />
          </InputContainer>
          <InputContainer>
            <label htmlFor="bottomtext">Font Size</label>
            <select
              style={{borderRadius: '5px', height: '30px', width: '400px'}}
              onChange={this.fontSizeFuntion}
            >
              {fontSizesOptionsList.map(eachItem => (
                <option key={eachItem.optionId}>{eachItem.displayText}</option>
              ))}
            </select>
          </InputContainer>
          <GenerateButton>Generate</GenerateButton>
        </form>
        {display && (
          <DisplayContainer bgImage={imageUrl} data-testid="meme">
            <ParaElement fontsize={fontSize}>{topText}</ParaElement>
            <ParaElement fontsize={fontSize}>{bottomText}</ParaElement>
          </DisplayContainer>
        )}
      </BackgroundContainer>
    )
  }
}

export default MemeGenerator
