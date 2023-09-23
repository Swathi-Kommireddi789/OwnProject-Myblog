import {Component} from "react"

import UserProfile from "./index2.js"

import "./index.css"

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


    
class Profile extends Component{ 
  state = {searchInput : "",
  usersDetailsList: initialUserDetailsList}

  


  
  onChangeSearchInput = (event)=>{
    this.setState({
      searchInput: event.target.value
    })
  }

  deleteUser = uniqueNo => {
    const {usersDetailsList} = this.state
    const filteredUsersData = usersDetailsList.filter(
      each => each.uniqueNo !== uniqueNo
    )
    this.setState({
      usersDetailsList: filteredUsersData
    })
  }

  render() {

    const {initialUserDetailsList1} = this.props
    console.log(initialUserDetailsList1)
  
    const {searchInput, usersDetailsList} = this.state
    const searchResults = usersDetailsList.filter(eachUser =>
      eachUser.name.toLowerCase().includes(searchInput.toLowerCase())
    )
  return  (
 <>
<div class="list-constainer">
  <h1 class="title">Users List</h1>
  <input type="search" onChange={this.onChangeSearchInput} value={searchInput}/>
  <ul className="list-container">
  {searchResults.map((eachItem)=>(
    <UserProfile userDetails = {eachItem} key={eachItem.uniqueNo}
    deleteUser={this.deleteUser}/>
  ))}
  
</ul>
</div>
</>
)
  }
}


export default Profile 