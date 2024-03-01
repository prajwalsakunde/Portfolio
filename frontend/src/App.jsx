
import {BrowerRouter,Routers,Route, Router} from 'react-router-dom';
import Startpage from './components/startpage';

function App(){
  return(
    <main>
      <BrowerRouter>
      
      <Routers>
        <Route path='/' element={<Startpage/>}/>
      </Routers> 
      
      </BrowerRouter>
    </main>
  )
}