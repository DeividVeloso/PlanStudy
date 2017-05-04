import React, { Component } from 'react';
import {Button, Icon} from 'react-materialize';

export default class App extends Component {
  render() {
    return (
      <div>
        React simple starter
        <Button node='a' waves='light'><Icon right>file_cloud</Icon>button</Button>
        <Button floating large className='red' waves='light' icon='add' />
      </div>
    );
  }
}
