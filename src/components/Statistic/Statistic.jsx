import {Component} from "react"
import {Button} from "./Button.jsx"
import {Section} from "./Section"


export class Statistic extends Component{

    state = {
        good: 0,
        neutral: 0,
        bad: 0
      }

      addGoodFeedback=()=>{
         this.setState((prevState)=>{
        return {good:prevState  + 1}})
         
      }
      addNeutralFeedback=(prevState)=>{
        this.setState({neutral: prevState + 1})
     }
     addBadFeedback=(prevState)=>{
        this.setState({bad: prevState + 1})
     }

render(){
    return(
        <div>
            <h2>Plese leave feedback</h2>
            <Button
             onAddingGood={this.addGoodFeedback}
             onAddingNeutral = {this.addNeutralFeedback}
             onAddingBad = {this.addBadFeedback}
            />
            <Section 
            isGood={this.state.good}
            isNeutral={this.state.neutral}
            isBad={this.state.bad}
            />
            
        </div>
    )
}


}
