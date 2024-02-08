
import './App.css';
import React  from 'react';
import Greeting from './Greeting';
import ToDoList from './ToDoList';
import Info from './Info';
import StatusIndicator from './StatusIndicator';
import SlideShow from './SlideShow';
import Button from './Button';
import BackgroundSwitch from './BackgroundSwitch';

function App() {

  const handleClick = () => {
    alert('Button was clicked!');
  }

  const slides = [
    'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmV0cm98ZW58MHx8MHx8fDA%3D',
    'https://storage.googleapis.com/pod_public/1300/152326.jpg',
    'https://nationaltoday.com/wp-content/uploads/2021/10/retro-day.jpg',
    'https://avada.website/retro/wp-content/uploads/sites/174/2023/01/hero-image-4.jpg'
  ];
  const todoItems = ['Master React', 'Build a React App', 'Explore advanced concepts'];

  return (
    <div className="App">
      <header className="App-header">
        <Greeting />
      </header>
      <main>
        <ToDoList items={todoItems} />
        <Info />
        <StatusIndicator status="success" label="All tasks completed!" />
        <StatusIndicator status="warning" label="Awaiting Review" />
        <StatusIndicator status="error" label="Network Error" />
        <StatusIndicator status="info" />
        <SlideShow slides={slides} />
        <Button text={'Click me'} onClick={handleClick}/>
        <BackgroundSwitch />
      </main>
    </div>

  );
}


export default App;


/////
