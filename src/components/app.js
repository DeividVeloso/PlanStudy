import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';


const style = {
    margin: 50
};

export default class App extends Component {

  render() {
    return (
      <MuiThemeProvider>
         <RaisedButton label="Meu" primary={true} style={style} />
      </MuiThemeProvider>
    );
  }
}



