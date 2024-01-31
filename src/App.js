import React from 'react';
import Header from './component/header';
import './app.scss';
import Headline from './component/headline';

function App() {
  return (
    <div className="App">
      <Header />
      <section className='main'>
        <Headline header="posts"  desc="Click the button to render the post."/>
      </section>
    </div>
  );
}

export default App;
