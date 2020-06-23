import React ,{Component}from 'react'
import axios from 'axios'
import {WorkS,WorkT,Span,Part,First,Icon,PartT,Line,PartD}from'./style.js'
class  Work extends Component {
    
        state={
            works:[]
        }
        componentDidMount=()=>{
            axios.get('./js/data.json').then(res=>{this.setState({works:res.data.works})})
        }
    render(){
        const {works}=this.state;
        const worksList=works.map((workItem)=>{
           
           return( 
           <Part first={workItem.id} Key={workItem.id}>
                <Icon>
                    <Icon className={workItem.icon_name}></Icon>
                    <PartT>{workItem.title}</PartT>
                    <Line/>
                    <PartD>
                      {workItem.body}
                    </PartD>
                    </Icon>
                </Part>
                )
        })
    return (
     <WorkS>
            <div className="container">
                <WorkT><Span>My</Span> Work</WorkT>
                {worksList}
            </div>
        </WorkS>
    )
    }
}
export default Work