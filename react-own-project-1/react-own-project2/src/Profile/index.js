import {Component} from "react"

import UserProfile from "./index2.js"

import "./index.css"



    
class Profile extends Component{ 
  state = {
  usersDetailsList: []}

  

componentDidMount(){
  const {originalList} = this.props
  
  this.setState({usersDetailsList: originalList})
    console.log(originalList)
}
  
  onChangeSearchInput = (event)=>{
    const {changeList} = this.props
    changeList(event.target.value)
  }



  deleteUser = uniqueNo => {
    const {ondeleteuser}  = this.props
    ondeleteuser(uniqueNo)
  }

  render() {

    const {originalList} = this.props
    
  
    
    
  return  (
    
 <>
<div class="list-constainer">
  <h1 class="title">Users List</h1>
  <input type="search" onChange={this.onChangeSearchInput}/>
  <ul className="list-container">
  {originalList.map((eachItem)=>(
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