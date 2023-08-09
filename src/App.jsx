import  Sidenav from './components/Sidenav'
import  Main from './components/Main'
import Resume from './components/Resume'
import Projects from './components/Projects'
import Contact from './components/Contact'
import DateTimeDisplay from './components/DateTimeDisplay'
import Submitted from './components/Submitted '



function App() {
  
  return (
    <div>
          <Sidenav />
          <Main />
          <Resume/>
          <Projects/>
          <Contact/>
          <Submitted/>
         
          <DateTimeDisplay/>
          
         

</div>
  
  )
};

export default App
