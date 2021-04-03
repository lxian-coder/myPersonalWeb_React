import React, { JSXElementConstructor } from 'react';
import Button from '../Header/components/Navbar/Button/Button';
import Header from '../Header/Header';
import Pages from '../Pages/Pages';
import Footer from '../Footer/Footer';
import { PAGE  } from '../../constraints';

type Props={};
type State={
    currentPage:string,
    dropMenu:boolean,
}

class App extends React.Component<Props, State>{
    constructor(props:any){
        super(props);

        this.state = {
            currentPage : PAGE.HOME,
            dropMenu: false,
        };
        // constructor  this alway points to APP, so we bind this to changePage method
      this.changePage = this.changePage.bind(this);
      this.toggleDropMenu = this.toggleDropMenu.bind(this);
    }
    changePage(pageName:string){
      this.setState({
          currentPage: pageName,
      })
    }

    toggleDropMenu(dropMenu:boolean){
        this.setState({
            dropMenu: dropMenu,
        })
    }

    render() {
       const { currentPage, dropMenu } = this.state;

       return(
           <div>
               <Header currentPage={currentPage} dropMenu={dropMenu} toggleDropMenu={this.toggleDropMenu} changePage={this.changePage}/>
               <Pages currentPage={currentPage} changePage={this.changePage}/>
               <Footer />
           </div>
       )
   }
}

export default App;