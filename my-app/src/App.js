import './App.css';
import React, { useState, useEffect } from 'react';
import ChitterClient from './clients/chitterClient'
import ChitterModel from './models/chitterModel'

const client = new ChitterClient();


const App = () => {

  const [model] = useState(new ChitterModel());
  const [client] = useState(new ChitterClient());

  this.mainContainerEl = document.querySelector('#main-container');

  const displayPeeps = () => {
    const peeps = model.getPeeps();

    const oldPeeps = document.querySelectorAll('div.peep')
    oldPeeps.forEach(e => e.remove())

    peeps.forEach(peep => {
      const peepDiv = document.create('div')
      peepDiv.className = 'peep'
      peepDiv.body = peep.body
      peepDiv.created = peep.created_at
      peepDiv.handle = peep.user.id
      peepDiv.likes = peep.likes.length
      this.mainContainerEl.append(peepDiv)
    });
  };

  const displayPeepsFromApi = async () => {
    const credentials = this.model.getCredentials();
    if(credentials.sessionKey && credentials.userId){
        const loaded = await client.loadNotes();
        this.model.setPeeps();
        this.displayPeeps();
    }
  };

  const createNewPeep = async () => {
    await this.client.createPeep();
    model.setPeeps();
    displayPeepsFromApi();
  };

  return (
    <div className="App">
      <header>
        <h1 id="web-title">Chitter</h1>
        <nav id="nav">
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </nav>
      </header>
      <div id="main-container">
        
      </div>
    </div>
  );
}

export default App;

