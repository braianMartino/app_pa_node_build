import ons from 'onsenui/esm';
import 'onsenui/esm/elements/ons-button';
import 'onsenui/esm/elements/ons-navigator';
import 'onsenui/esm/elements/ons-page';
import 'onsenui/esm/elements/ons-tabbar';
import 'onsenui/esm/elements/ons-toolbar';
import 'onsenui/esm/elements/ons-button';
import 'onsenui/esm/elements/ons-card';
import 'onsenui/esm/elements/ons-icon';
import 'onsenui/esm/elements/ons-list';
import 'onsenui/esm/elements/ons-list-header';
import 'onsenui/esm/elements/ons-list-item';
import './App.css';
import React, { Component } from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
   renderToolbar() {
    return (
      <ons-toolbar>
        <div className='center'>Card</div>
      </ons-toolbar>
    )
  }
  render(){
    return (
        <ons-page renderToolbar={this.renderToolbar}>
          <ons-card>
            <img src={"https://monaca.io/img/logos/download_image_onsenui_01.png"} alt="Onsen UI" style={{width: '100%'}} />
            <div className="title right">Awesome framework</div>
            <div className="content">
              <ons-button><ons-icon icon="ion-thumbsup"></ons-icon></ons-button>
              <ons-button><ons-icon icon="ion-share"></ons-icon></ons-button>
              <ons-list>
                <ons-list-header>Bindings</ons-list-header>
                <ons-list-item>Vue</ons-list-item>
                <ons-list-item>Angular</ons-list-item>
                <ons-list-item>React</ons-list-item>
              </ons-list>
            </div>
          </ons-card>
        </ons-page>
      
    
  )}
}


export default App;
