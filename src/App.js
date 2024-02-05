import React from 'react';
import Header from './component/header';
import './app.scss';
import Headline from './component/headline';

const tempArr=[{
  fName: 'Tony',
  lName: 'Stark',
  email: 'iron.man@hotmail.com',
  age: 35,
  onlineStatus: true
}]

function App() {
  return (
    <div className="App">
      <Header />
      <section className='main'>
        <Headline 
          header="posts"
          desc="Click the button to render the post."
          tempArr={tempArr}
        />
      </section>
    </div>
  );
}

export default App;
