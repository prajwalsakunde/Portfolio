
import {BrowerRouter,Router,Route} from 'react-router-dom';
import Startpage from './components/startpage';

function App(){
  return(
    <main>
      <BrowerRouter>
      
      <Router>
        <Route path='/' element={<Startpage/>}/>
      </Router> 
      
      </BrowerRouter>
    </main>
  )
}

export default App;