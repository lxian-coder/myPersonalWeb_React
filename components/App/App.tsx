import React, { JSXElementConstructor } from 'react';
import Button from '../Header/components/Navbar/Button/Button';
import Header from '../Header/Header';
import Pages from '../Pages/Pages';
import Footer from '../Footer/Footer';
import { PAGE  } from '../../constraints';

type Props={};
type State={
    currentPage:string,
    buttonDrop?:boolean,
}

class App extends React.Component<Props, State>{
    constructor(props:any){
        super(props);

        this.state = {
            currentPage : PAGE.HOME,
        };
        // constructor  this alway points to APP, so we bind this to changePage method 
      this.changePage = this.changePage.bind(this);
    }
  changePage(pageName:string){
      this.setState({
          currentPage: pageName,
      })
  }

    render() {
       const { currentPage } = this.state;

       return(
           <div>
               <Header currentPage={currentPage} changePage={this.changePage}/>
               <Pages currentPage={currentPage} changePage={this.changePage}/>
               <Footer />
           </div>
       )
   }
}

export default App;