import './App.css';
import LikeImage from './components/LikeImage';
import LikePost from './components/LikePost';
import React,{Component} from 'react';
import Count from './components/Count';

class App extends Component{
  render(){
  return (
    <div>
      <h3>Some Blog</h3>
      <div className='buttons'>
        <Count 
          render={(count,increment)=>(
            <LikePost count={count} increment={increment}/>
        )}/>
        <Count 
          render={(count,increment)=>(
            <LikeImage count={count} increment={increment}/>
        )}/>
      </div>
    </div>
  );
}
}
export default App;
