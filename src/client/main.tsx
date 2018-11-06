import * as React from "react";
import * as ReactDOM from "react-dom";
import { injectGlobal, ThemeProvider, theme } from "./theme";
import styled from 'styled-components'
import io from 'socket.io-client'

injectGlobal`
    * { margin: 0; padding: 0; box-sizing: border-box; }
`;

interface HelloProps {
  compiler: string;
  framework: string;
}

interface HelloState {
  isLoaded: boolean,
  imageUrls: any,
  mainImage: string,
  error: any
}

class App extends React.Component<HelloProps, HelloState> {
  constructor () {
    super()
    this.socket = io('192.168.0.16:9009');
    this.state = {
      isLoaded: false,
      imageUrls: [],
      mainImage: '//d9hhrg4mnvzow.cloudfront.net/try.eharmony.com/austin/7e8d8ea3-us-desktop-bg-austin-1.jpg',
      error: null
    }
  }

  componentDidMount() {
    fetch(`192.168.0.16:3000/api/listImages`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            imageUrls: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )

    this.socket.on('connect', () => {
      this.socket.on('newPicture', image => {
        this.setState({
          mainImage: image
        })
      });
      console.log('Connected', this.socket);
    });
  }

  render() {
    let { isLoaded, imageUrls, mainImage } = this.state

    return (
      <Wrapper>
        <ImageWrapper>
          <Image src={mainImage}/>
        </ImageWrapper>

        <Nav/>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  position: relative;
  background: #f5f5f5;
  width: 100%;
  height: 100vh;
  padding: 10px;
  margin: 0;
  overflow: hidden;
`
const Nav = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 65px;
  background: #fff;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
`
const ImageWrapper = styled.div`
  height: calc(100vh - 85px);
  width: 100%;
  background: rgba(0,0,0,.2);
  border-radius: 10px;
  overflow: hidden;
  border: none;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
`
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: none;
`

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App compiler="TypeScript" framework="React" />
  </ThemeProvider>,
  document.getElementById("app")
);
