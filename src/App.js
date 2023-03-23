import {Routes, Route} from 'react-router-dom'
import Home from './page/Home';
import Room from './page/Room';
function App() {
  return (
    <Routes>
      <Route>
        <Route path='/' element={<Home/>}/>
        <Route path='/room/:roomid' element={<Room/>}/>
      </Route>
    </Routes>
  );
}

export default App;
