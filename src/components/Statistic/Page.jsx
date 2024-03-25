import {Component} from "react"
import {FeedbackOptions} from "./FeedbackOptions.jsx"
import {Statistic} from "./Statistic.jsx"
import {Section} from "./Setion.jsx"


export class Page extends Component{

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
        return this.setState({neutral: prevState + 1})
      }
      addBadFeedback=(prevState)=>{
        return this.setState({bad: prevState + 1})
      }

      totalCount=()=>{
        const count = this.state.good+this.state.neutral+this.state.bad
        return( count)
      }

      message=()=>{
        if(this.totalCount === 0){
            return(<h2>There is no feedback</h2>)
        }
      }

render(){
    return(
        <div>
             <Section/>
             <FeedbackOptions
             onAddingGood={this.addGoodFeedback}
             onAddingNeutral = {this.addNeutralFeedback}
             onAddingBad = {this.addBadFeedback}
            />
            <Statistic
            isGood={this.state.good}
            isNeutral={this.state.neutral}
            isBad={this.state.bad}
            total={this.totalCount}
             />

         
        </div>
    )
}


}
