import {Component} from 'react'
import Profile  from '../Profile'

/*

import FrontedTab from './Fronted'
import BackendTab from './Backed'
import FullstackTab from './Fullstack'

import './App.css'

const tabsList = [
  {tabId: 'FRONTEND', displayText: 'Fronted'},
  {tabId: 'BACKEND', displayText: 'Backend'},
  {tabId: 'FULLSTACK', displayText: 'Fullstack'},
]

profileDetails = searchReaults => {
  this.setState(userDetailsList : searchReaults)
}*/

class Domainpage extends Component {
    
render(){
  return <h1>h</h1>
}
}    
      /*const {userDetailsList, changeList} = this.state


      

      onChangeList = event => {
        changeList(event.target.value)
      }

      return (
        state = {activeTabId: tabsList[0].tabId}

  getFilteredProjects = () => {
    const {userDetailsList} = this.state

    const filteredProjects = projectsList.filter(
      eachprojectDetails => eachprojectDetails.category === activeTabId,
    )
    return filteredProjects
  }

  updateActiveTabId = tabId => {
    this.setState({activeTabId: tabId})
  }

  render() {
    const {activeTabId} = this.state
    const filteredProjects = this.getFilteredProjects()
    return (
      <div className="app-container">
        <Header />
        <h1 className="title">User Details</h1>
        <p className="description">
          Your skills and achievements showcase your strengths and abilities.
          Speak about any new skills or software you learnt to perform the
          project responsibilities.
        </p>

        <ul className="tabs-container">
          {tabsList.map(tabDetails => (
            <TabItem
              key={tabDetails.tabId}
              tabDetails={tabDetails}
              updateActiveTabId={this.updateActiveTabId}
              isActive={tabDetails.tabId === activeTabId}
            />
          ))}
        </ul>

        <ul className="project-list-container">
          {filteredProjects.map(projectDetails => (
            <ProjectItem
              key={projectDetails.projectId}
              projectDetails={projectDetails}
            />
          ))}
        </ul>
      </div>
    )
  }


      )
      }*/ 
      
    

    export default Domainpage