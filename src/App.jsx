
import Hader from "./component/Hader";
import Hero from "./component/Hero";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import Demo from "./Demo";
import Blog from "./component/Blog";
import TernaryOperator from "./component/TernaryOperator";
import If_else from "./component/If_else";
import Loop from './component/Loop';
import Conditionl_Ifelse from "./component/Conditionl_Ifelse";
import ShortHandCondition from "./component/ShortHandCondition";
import Imedite_invock_funcation from "./component/Imedite_invock_funcation";
import DrivenData from "./component/DrivenData";
import DataDrivenObject from "./component/DataDrivenObject";




const App = () => {
  const trump = {
    firstName: "Donald",
    lastName: "Trump",
    age: 77, // As of 2023
    occupation: "Politician, Businessman",
    isPresident: true,
    famousQuote: "Make America Great Again"
};
  return (
    <div>
      <Hader/>
      <Demo/>
      <Conditionl_Ifelse/>
      <ShortHandCondition/>
      <Imedite_invock_funcation/>
      <DrivenData title="i am hasibul" mess="do some thing for world"/>
      <Hero/>
      <TernaryOperator/>
      <If_else/>
      <Loop/>
      <Blog/>
      <DataDrivenObject itme={trump}/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default App;
