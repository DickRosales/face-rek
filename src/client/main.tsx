import * as React from "react";
import * as ReactDOM from "react-dom";
import { injectGlobal, ThemeProvider, theme } from "./theme";

injectGlobal`
    * { margin: 0; padding: 0; }
`;

interface HelloProps {
  compiler: string;
  framework: string;
}

interface HelloState {
  isLoaded: boolean,
  imageUrls: any,
  error: any
}

class App extends React.Component<HelloProps, HelloState> {
  constructor () {
    super()
    this.state = {
      isLoaded: false,
      imageUrls: [],
      error: null
    }
  }

  componentDidMount() {
    fetch("http://localhost:3000/api/listImages")
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
  }

  render() {
    let { isLoaded, imageUrls } = this.state

    return (
      <div>
        Images: 
        <ul>
          { imageUrls.map((image, index) => <li key={index}><a href={image}>{ image }</a></li>)}
        </ul>
      </div>
    );
  }
}

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App compiler="TypeScript" framework="React" />
  </ThemeProvider>,
  document.getElementById("app")
);
