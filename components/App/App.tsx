import React, { JSXElementConstructor } from 'react';
import Button from '../Header/components/Navbar/Button/Button';
import Header from '../Header/Header';
import Pages from '../Pages/Pages';
import Footer from '../Footer/Footer';

type Props={};
type State={
    buttonDrop:boolean,
}

class App extends React.Component<Props, State>{
    constructor(props:any){
        super(props);

        this.state = {
            buttonDrop : false,
        };
        this.buttonAction = this.buttonAction.bind(this);
    }
    buttonAction (drop:boolean){
        this.setState({
            buttonDrop: drop ,
        });
    }
   
    render() {
        const buttonActionObj = {
            buttonAction : this.buttonAction,
            test1 : "aaa",
        }
       return(
           <div>
               <Header {...buttonActionObj}/>
               <Pages />
               <Footer />
           </div>
       )
   }

}
export default App;