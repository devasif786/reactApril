import './App.css';
import { Button } from './components/Button/button';
import ReactBenefits from './components/logo/ReactBenefits';
import ReactLogo from './components/ReactLogo/ReactLogo';


function App() {

  //  components -/> small isolated piece of code of you complete ui .
  // components  -/> functions (react function)
  //  js function -/> takes datatype as input and return data types
  // react function -/> takes props as input and return jsx / html likw components .
  //  react functions startWith Capital letter only . 


//   Jsx -/> javascript extension 
//   it provides the power to write the html in js file 

//  ui 
//  functionality 
//  data management 
//  folder structure (Atomic folder structure)


//  css  -> style to style the component
//  js -/> code to ceate the component 



  return (
    <div className="App">
      <ReactLogo/>
      <ReactBenefits/>
      <Button/>
    </div>
  );
}

export default App;
