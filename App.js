import React from 'react';
import './App.css';

const App = () => {
  return (
  	<div className = 'app-wrapper'>
  	<header className = 'header'>
  	</header>
  		<nav className = 'nav'>
  			<div>
  			<a>Home</a>
  			</div>
  			<div>
			<a>Pictures</a>
   		    </div>
   	    	<div>
 			<a>Messages</a>
 			</div>
 		</nav>
  	<div className = 'content'></div>
  	</div>
  );
}

export default App;
