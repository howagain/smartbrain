import React, { Component } from "react";
import Clarifai from "clarifai";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import SignIn from "./components/SignIn/SignIn";
import Register from "./components/Register/Register";
import ImageDisplay from "./components/ImageDisplay/ImageDisplay";
import "tachyons";
import Particles from "react-particles-js";

const app = new Clarifai.App({
  apiKey: "d7f37960fa9343aa84cae4c30c3714dc"
});

const ParticleOptions = {
  particles: {
    number: {
      value: 200,
      density: {
        enable: true,
        value_area: 1500
      }
    },
    line_linked: {
      enable: true,
      opacity: 0.02
    },
    move: {
      direction: "right",
      speed: 0.05
    },
    size: {
      value: 1
    },
    opacity: {
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.05
      }
    }
  },
  interactivity: {
    events: {
      onclick: {
        enable: true,
        mode: "push"
      }
    },
    modes: {
      push: {
        particles_nb: 1
      }
    }
  },
  retina_detect: true
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imageUrl: "",
      box: {},
      route: "signin",
      isSignedIn: false
    };
  }

  onInputHandler = event => {
    this.setState({ input: event.target.value });
  };

  onSubmitHandler = () => {
    this.setState({ imageUrl: this.state.input }, () => {
      app.models
        .predict("a403429f2ddf4b49b307e318f00e528b", this.state.imageUrl)
        .then(response => {
          const box =
            response.outputs[0].data.regions[0].region_info.bounding_box;
          this.setState({ box });
        })
        .catch(err => {
          console.log("Response Error" + err);
        });
    });
  };

  onRouteChange = (r) => {
    if (r === 'signin') {
      this.setState({isSignedIn: false})
    } else if (r === 'home') {
      this.setState({isSignedIn: true})
    }
    this.setState({route: r});
  }

  render() {
    const { imageUrl, box, route, isSignedIn } = this.state;
    return (
      <div className="App">
        <Particles params={ParticleOptions} className="particles" />
        <Navbar  onRouteChange={this.onRouteChange} isSignedIn={isSignedIn} />
        {route === "home" ? 
          <div>
            <Rank />
            <ImageLinkForm
              onInputHandler={this.onInputHandler}
              onSubmitHandler={this.onSubmitHandler}
            />
            <ImageDisplay imageUrl={imageUrl} box={box} />
          </div>
         : (route==="signin" 
            ? <SignIn onRouteChange={this.onRouteChange} />
          : <Register onRouteChange={this.onRouteChange}/>
        )}
      </div>
    );
  }
}

export default App;
