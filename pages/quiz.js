import React from 'react'
import Navbar from '../components/Navbar'
import Link from 'next/link'
import RadioButton from '../components/RadioButton'

export default class extends React.Component {
    
    constructor(props){
        super(props)
        this.state =  {
            question : [],
            answer : {
                q1 : "0",
                q2 : "0",
                q3 : "0"
            },
            predict : ""
        }
        
    }
    
    changeRadio (answer , question){
       
        this.setState({
            answer : {
                ...this.state.answer,
                [question] : answer
            }
        })
    }
    onSubmit = (e) => {
        e.preventDefault()
        this.setState({
            predict : "Amazon"
        })
    }
    render(){
        const {answer , predict} = this.state
       
        return (
            <div>
                <Navbar/>
                <div className="containerQuiz">
                    {
                        predict == "" ? 
                        <form onSubmit={this.onSubmit}> 
                            <div>
                                <div className="containerQuestionText">
                                    <h1>
                                        Lorem Ipsum
                                    </h1>                          
                                </div>
                                <div className="containerChoice">
                                    <RadioButton text="test" type="radio" name="q1" value="0" checked={answer.q1==0} onChange={this.changeRadio.bind(this, 0 , "q1")} />
                                    <RadioButton text="test" type="radio" name="q1" value="1" checked={answer.q1==1} onChange={this.changeRadio.bind(this, 1 , "q1")} />                            
                                </div>
                            </div>       
                            <div>
                                <div className="containerQuestionText">
                                    <h1>
                                        Lorem Ipsum
                                    </h1>                          
                                </div>
                                <div className="containerChoice">
                                    <RadioButton text="test" type="radio" name="q2" value="0" checked={answer.q2==0} onChange={this.changeRadio.bind(this, 0 , "q2")} />
                                    <RadioButton text="test" type="radio" name="q2" value="1" checked={answer.q2==1} onChange={this.changeRadio.bind(this, 1 , "q2")} />                            
                                </div>
                            </div>       
                            <div>
                                <div className="containerQuestionText">
                                    <h1>
                                        Lorem Ipsum
                                    </h1>                          
                                </div>
                                <div className="containerChoice">
                                    <RadioButton text="test" type="radio" name="q3" value="0" checked={answer.q3==0} onChange={this.changeRadio.bind(this, 0 , "q3")} />
                                    <RadioButton text="test" type="radio" name="q3" value="1" checked={answer.q3==1} onChange={this.changeRadio.bind(this, 1 , "q3")} />                            
                                </div>
                            </div> 
                            <div style={{textAlign : "center" ,}}>
                                <button type="submit" className="submitButton">
                                    ทำนาย
                                </button>    
                            </div>                                                                                               
                        </form>
                        :
                        <div className="containerResult">
                            <h2 >ร้านที่เหมาะสำหรับคุณคือ..</h2>
                            <h1 style={{fontSize : "9em"}}>{predict}</h1>
                            <div style={{textAlign : "center" , marginTop : "50px"}}>
                                <button onClick={()=>this.setState({predict : ""})} className="submitButton">
                                    เริ่มทำควิซใหม่
                                </button>    
                            </div>      
                        </div>
                        
                    }
                    <style jsx>{`
                        .containerQuestionText{
                            padding : 0px 50px 0px 50px;
                            display : flex;
                            
                            color : white;
                        }
                        .containerResult{
                            display : flex;
                            justify-content : center;
                            flex-direction : column;
                            align-items :center;
                        }
                        .containerQuiz{
                            padding-top : ${predict != "" ? "0px" : "80px"};
                            background-color : #FE8A71;
                            min-height : ${predict != "" ? "100vh" : "90vh"};
                            display : flex;
                            align-items  :${predict != "" ? "center" : ""};
                            justify-content : center;
                            color : white;
                        }
                        .containerChoice{
                            padding : 20px 50px;
                        }
                        .submitButton{
                            padding : 10px 100px;
                            border-radius : 40px;
                            border : none;
                            font-size : 1.6em;
                            color : white;
                            font-family : Prompt;
                            font-weight : bold;
                            background-image: linear-gradient(to right , #FF416C , #FF4B2B);
                            transition : opacity 0.8s;
                           
                            cursor : pointer;
                            box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
                            transition : box-shadow 0.8s;
                        }
                        .submitButton:hover{
                            box-shadow : none;
                            transition : box-shadow 0.8s;
                        }
                    `}</style>
                </div>
            </div>
        )
    }
}