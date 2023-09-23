import {Component} from 'react'

import { BrowserRouter, Route, Switch } from "react-router-dom";




import Header from "./Header"

import Home from "./Home"
import Profile from "./Profile"

import Domainpage from "./Domainpage"
import NotFound from "./NotFound"
import './App.css';

const initialUserDetailsList = [
  {
    uniqueNo: 1,
    imageUrl:
    'https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/35af6a41332353.57a1ce913e889.jpg',
    name: 'Esther Howard',
    role: 'Fullstack Developer'
  },
  {
    uniqueNo: 2,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Floyd Miles',
    role: 'Fullstack Developer'
  },
  {
    uniqueNo: 3,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Jacob Jones',
    role: 'Fullstack Developer'
  },
  {
    uniqueNo: 4,
    imageUrl:
      'https://tse4.mm.bing.net/th?id=OIP.2N8u_UiTR-l67y0dH03RFgHaHa&pid=Api&P=0&h=180',
    name: 'Devon Lane',
    role: 'Frontend Developer'
  },
  {
    uniqueNo: 5,
    imageUrl:
      'https://tse2.mm.bing.net/th?id=OIP.v7kVuQCnOT-alhDH41aaCgHaKX&pid=Api&P=0&h=180',
    name: 'shalini baradwaj',
    role: 'Frontend Developer'
  },
  {
    uniqueNo: 6,
    imageUrl:
      'https://tse2.mm.bing.net/th?id=OIP.PZsMLTIgXaEsdCA0VjTo7gHaLH&pid=Api&P=0&h=180',
    name: 'pranav hardwa',
    role: 'Frontend Developer'
  },
  {
    uniqueNo: 7,
    imageUrl:
      'https://www.kevinashleyphotography.com/wp-content/uploads/2015/11/person(pp_w480_h610).jpg',
    name: 'harsha bangal',
    role: 'Backend Developer'
  },
  {
    uniqueNo: 8,
    imageUrl:
      'https://tse2.mm.bing.net/th?id=OIP.IrUBHhdMo6wWLFueKNreRwHaHa&pid=Api&P=0&h=180',
    name: 'sohan varma',
    role: 'Backend Developer'
  },
  {
    uniqueNo: 9,
    imageUrl:
      'https://tse1.mm.bing.net/th?id=OIP.QjynegEfQVPq5kIEuX9fWQHaFj&pid=Api&P=0&h=180',
    name: 'pradeep sarma',
    role: 'Backend Developer'
  }
]


class App extends Component {
  state = {initialUserDetailsList1:initialUserDetailsList,searchInput:""}

  changeList = searchDetailsList => {
    this.setState({searchInput:searchDetailsList})
  
  }

ondeleteuser = uniqueNo =>{
  const {initialUserDetailsList1} = this.state
    const filteredUsersData = initialUserDetailsList1.filter(
      each => each.uniqueNo !== uniqueNo
    )
    this.setState({
      initialUserDetailsList1: filteredUsersData
    })
}


  render(){
    const {initialUserDetailsList1,searchInput} = this.state
    console.log(searchInput)
    const newList = initialUserDetailsList1.filter(eachUser =>
      eachUser.name.toLowerCase().includes(searchInput.toLowerCase())
    )
    console.log(newList)
  
  return (
    
    <BrowserRouter>
    <Header/>
    <Switch>
    <Route exact path="/home" component={Home}/>
    
    <Route exact path="/profile">
        <Profile
          originalList={newList}
          changeList ={this.changeList}
          ondeleteuser ={this.ondeleteuser}
        />
      </Route>
    
    <Route exact path="/domainpage" component={Domainpage}/>
    <Route component={NotFound}/>
    </Switch>
    </BrowserRouter>

    
  ); 
}
}
export default App;
