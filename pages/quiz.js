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
                sex : "male",
                salary : '5',
                typeOfBuy : "eatAtShop",
                numberOfCup : "5",
                recommendationPerson : "myself",
                reasonToDrink : "bakery"
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
        const {answer} = this.state
        if(answer.sex == "female"){
            if(answer.typeOfBuy == "eatAtHome"){
                if(answer.reasonToDrink == "bakery")    this.setState({ predict : "Amazon" })
                else if(answer.reasonToDrink == "easyToBuy")    this.setState({ predict : "Amazon" })
                else if(answer.reasonToDrink == "enviroment")    this.setState({ predict : "Amazon" })
                else if(answer.reasonToDrink == "meeting")    this.setState({ predict : "Amazon" })
                else if(answer.reasonToDrink == "price")    this.setState({ predict : "Amazon" })
                else if(answer.reasonToDrink == "promotion") {
                    if(answer.recommendationPerson == "family") this.setState({predict : "Amazon"})
                    else if(answer.recommendationPerson == "friend") this.setState({predict : "Starbuck"})
                    else if(answer.recommendationPerson == "myself") this.setState({predict : "Amazon"})
                    else if(answer.recommendationPerson == "staff") this.setState({predict : "Starbuck"})
                }
                else if(answer.reasonToDrink == "taste") this.setState({predict : "Amazon"})
                else if(answer.reasonToDrink == "wifi/internet") this.setState({predict : "Amazon"})
            }else {
                if(answer.salary == "15"){
                    if(answer.numberOfCup == "1"){
                        if(answer.recommendationPerson == "family") this.setState({predict : "Amazon"})
                        else if(answer.recommendationPerson == "myself") this.setState({predict : "Starbuck"})
                    }
                    else if(answer.numberOfCup == "2") this.setState({predict : "Amazon"})
                }
                else if(answer.salary =="20") {
                    if(answer.numberOfCup == "1")  this.setState({predict : "Starbuck"})
                    else if(answer.numberOfCup =="2") this.setState({predict : "Amazon"})
                }
                else if(answer.salary =="25") this.setState({predict : "Amazon"})
                else if(answer.salary =="30"){
                    if(answer.reasonToDrink == "environment") this.setState({predict : "Amazon"})
                    else if(answer.reasonToDrink == "meeting") this.setState({predict : "Amazon"})
                    else if(answer.reasonToDrink == "taste") this.setState({predict : "Starbuck"})
                }
                else if(answer.salary =="35") this.setState({predict : "Starbuck"})
                else if(answer.salary =="40") this.setState({predict : "Starbuck"})
                else if(answer.salary =="45") this.setState({predict : "Starbuck"})
                else if(answer.salary =="50") this.setState({predict : "Amazon"})
                else if(answer.salary =="10") this.setState({predict : "Amazon"})
                else if(answer.salary =="5") this.setState({predict : "Amazon"})
                else if(answer.salary =="55") this.setState({predict : "Amazon"})
            }
        }else{
            if(answer.reasonToDrink =="bakery") this.setState({predict : "Starbuck"})
            else if(answer.reasonToDrink =="easyToBuy") this.setState({predict : "Amazon"})
            else if(answer.reasonToDrink == "environment"){
                if(answer.numberOfCup == "1") this.setState({predict : "Amazon"})
                else if(answer.numberOfCup == "2") this.setState({predict : "Amazon"})
                else if(answer.numberOfCup == "3") this.setState({predict : "Starbuck"})
            }
            else if(answer.reasonToDrink == "meeting") this.setState({predict : "Starbuck"})
            else if(answer.reasonToDrink == "price") this.setState({predict : "Amazon"})
            else if(answer.reasonToDrink == "promotion") this.setState({predict : "Starbuck"})
            else if(answer.reasonToDrink == "taste") this.setState({predict : "Starbuck"})
            else if(answer.reasonToDrink == "wifi/internet") this.setState({predict : "Starbuck"})
        }
        
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
                            <h1  style={{padding : "0px 50px 0px 50px"}}>Quiz</h1>
                            <div>
                                <div className="containerQuestionText">
                                    <h1>
                                        เพศ 
                                    </h1>                          
                                </div>
                                <div className="containerChoice">
                                    <RadioButton text="ชาย" type="radio" name="sex" value="male" checked={answer.sex=='male'} onChange={this.changeRadio.bind(this, 'male' , "sex")} />
                                    <RadioButton text="หญิง" type="radio" name="sex" value="female" checked={answer.sex=='female'} onChange={this.changeRadio.bind(this, 'female' , "sex")} />                            
                                </div>
                            </div>       
                            {/* <div>
                                <div className="containerQuestionText">
                                    <h1>
                                        การศึกษา 
                                    </h1>                          
                                </div>
                                <div className="containerChoice">
                                    <RadioButton text="ต่ำกว่าปริญญาตรี" type="radio" name="education" value="highschool" checked={answer.education=='highschool'} onChange={this.changeRadio.bind(this, 'highschool' , "education")} />
                                    <RadioButton text="ปริญญาตรี" type="radio" name="education" value="bachelor" checked={answer.education=='bachelor'} onChange={this.changeRadio.bind(this, 'bachelor' , "education")} />                            
                                    <RadioButton text="ปริญญาโท" type="radio" name="education" value="master" checked={answer.education=='master'} onChange={this.changeRadio.bind(this, 'master' , "education")} />                            
                                    
                                </div>
                            </div>                                */}
                            {/* <div>
                                <div className="containerQuestionText">
                                    <h1>
                                        อาชีพ 
                                    </h1>                          
                                </div>
                                <div className="containerChoice">
                                    <RadioButton text="นักเรียน/นักศึกษา" type="radio" name="occupation" value="student" checked={answer.occupation=='student'} onChange={this.changeRadio.bind(this, 'student' , "occupation")} />
                                    <RadioButton text="พนักงานบริษัทเอกชน" type="radio" name="occupation" value="employees" checked={answer.occupation=='employees'} onChange={this.changeRadio.bind(this, 'employees' , "occupation")} />                            
                                    <RadioButton text="ข้าราชการ/รัฐวิสาหกิจ" type="radio" name="occupation" value="governmentOfficer" checked={answer.occupation=='governmentOfficer'} onChange={this.changeRadio.bind(this, 'governmentOfficer' , "occupation")} />                            
                                    <RadioButton text="ประกอบธุรกิจ/เจ้าของกิจการ" type="radio" name="occupation" value="entrepreneur" checked={answer.occupation=='entrepreneur'} onChange={this.changeRadio.bind(this, 'entrepreneur' , "occupation")} />                            
                                </div>
                            </div> */}
                            {/* <div>
                                <div className="containerQuestionText">
                                    <h1>
                                        เวลา 
                                    </h1>                          
                                </div>
                                <div className="containerChoice">
                                    <RadioButton text="06.00 - 9.00 น" type="radio" name="time" value="6" checked={answer.time=='6'} onChange={this.changeRadio.bind(this, '6' , "time")} />
                                    <RadioButton text="09.01 - 12.00 น" type="radio" name="time" value="9" checked={answer.time=='9'} onChange={this.changeRadio.bind(this, '9' , "time")} />
                                    <RadioButton text="12.01 - 15.00 น" type="radio" name="time" value="12" checked={answer.time=='12'} onChange={this.changeRadio.bind(this, '12' , "time")} />                            
                                    <RadioButton text="15.01 - 18.00 น" type="radio" name="time" value="15" checked={answer.time=='15'} onChange={this.changeRadio.bind(this, '15' , "time")} />                            
                                    <RadioButton text="18.01 - 21.00 น" type="radio" name="time" value="18" checked={answer.time=='18'} onChange={this.changeRadio.bind(this, '18' , "time")} />                                                               
                                </div>
                            </div> */}
                            <div>
                                <div className="containerQuestionText">
                                    <h1>
                                        เงินเดือน 
                                    </h1>                          
                                </div>
                                <div className="containerChoice">
                                    <RadioButton text="น้อยกว่า 5,000 บาท" type="radio" name="salary" value="5" checked={answer.salary=='5'} onChange={this.changeRadio.bind(this, '5' , "salary")} />
                                    <RadioButton text="5,000 - 10,000 บาท" type="radio" name="salary" value="10" checked={answer.salary=='10'} onChange={this.changeRadio.bind(this, '10' , "salary")} />
                                    <RadioButton text="10,001 - 15,000 บาท" type="radio" name="salary" value="15" checked={answer.salary=='15'} onChange={this.changeRadio.bind(this, '15' , "salary")} />                            
                                    <RadioButton text="15,001 - 20,000 บาท" type="radio" name="salary" value="20" checked={answer.salary=='20'} onChange={this.changeRadio.bind(this, '20' , "salary")} />                            
                                    <RadioButton text="20,001 - 25,000 บาท" type="radio" name="salary" value="25" checked={answer.salary=='25'} onChange={this.changeRadio.bind(this, '25' , "salary")} />                                                               
                                    <RadioButton text="25,001 - 30,000 บาท" type="radio" name="salary" value="30" checked={answer.salary=='30'} onChange={this.changeRadio.bind(this, '30' , "salary")} />                                                               
                                    <RadioButton text="30,001 - 35,000 บาท" type="radio" name="salary" value="35" checked={answer.salary=='35'} onChange={this.changeRadio.bind(this, '35' , "salary")} />                                                               
                                    <RadioButton text="35,001 - 40,000 บาท" type="radio" name="salary" value="40" checked={answer.salary=='40'} onChange={this.changeRadio.bind(this, '40' , "salary")} />                                                               
                                    <RadioButton text="40,001 - 45,000 บาท" type="radio" name="salary" value="45" checked={answer.salary=='45'} onChange={this.changeRadio.bind(this, '45' , "salary")} />                                                               
                                    <RadioButton text="45,001 - 50,000 บาท" type="radio" name="salary" value="50" checked={answer.salary=='50'} onChange={this.changeRadio.bind(this, '50' , "salary")} />                                                               
                                    <RadioButton text="มากกว่า 50,000 บาท" type="radio" name="salary" value="55" checked={answer.salary=='55'} onChange={this.changeRadio.bind(this, '55' , "salary")} />                                                               
                                </div>
                            </div>
                            <div>
                                <div className="containerQuestionText">
                                    <h1>
                                        จำนวนแก้ว 
                                    </h1>                          
                                </div>
                                <div className="containerChoice">
                                    <RadioButton text="1 แก้ว" type="radio" name="numberOfCup" value="1" checked={answer.numberOfCup=='1'} onChange={this.changeRadio.bind(this, '1' , "numberOfCup")} />
                                    <RadioButton text="2 แก้ว" type="radio" name="numberOfCup" value="2" checked={answer.numberOfCup=='2'} onChange={this.changeRadio.bind(this, '2' , "numberOfCup")} />
                                    <RadioButton text="3 แก้ว" type="radio" name="numberOfCup" value="3" checked={answer.numberOfCup=='3'} onChange={this.changeRadio.bind(this, '3' , "numberOfCup")} />                            
                                    {/* <RadioButton text="4 แก้ว" type="radio" name="numberOfCup" value="4" checked={answer.numberOfCup=='4'} onChange={this.changeRadio.bind(this, '4' , "numberOfCup")} />                            
                                    <RadioButton text="มากกว่า 4 แก้ว" type="radio" name="numberOfCup" value="5" checked={answer.numberOfCup=='5'} onChange={this.changeRadio.bind(this, '5' , "numberOfCup")} />                                                                */}
                                </div>
                            </div>      
                            <div>
                                <div className="containerQuestionText">
                                    <h1>
                                        ลักษณะการเข้าใช้บริการ
                                    </h1>                          
                                </div>
                                <div className="containerChoice">
                                    <RadioButton text="บริโภคที่ร้าน" type="radio" name="typeOfBuy" value="eatAtShop" checked={answer.typeOfBuy=='eatAtShop'} onChange={this.changeRadio.bind(this, 'eatAtShop' , "typeOfBuy")} />
                                    <RadioButton text="ซื้อกลับบ้าน" type="radio" name="typeOfBuy" value="eatAtHome" checked={answer.typeOfBuy=='eatAtHome'} onChange={this.changeRadio.bind(this, 'eatAtHome' , "typeOfBuy")} />                            
                                </div>
                            </div>              
                            <div>
                                <div className="containerQuestionText">
                                    <h1>
                                        บุคคลที่มีผลต่อการเลือกเข้าใช้บริการร้านกาแฟมากที่สุด
                                    </h1>                          
                                </div>
                                <div className="containerChoice">
                                    <RadioButton text="ตนเอง" type="radio" name="recommendationPerson" value="myself" checked={answer.recommendationPerson=='myself'} onChange={this.changeRadio.bind(this, 'myself' , "recommendationPerson")} />
                                    <RadioButton text="เพื่อน" type="radio" name="recommendationPerson" value="family" checked={answer.recommendationPerson=='friend'} onChange={this.changeRadio.bind(this, 'friend' , "recommendationPerson")} />                            
                                    <RadioButton text="ครอบครัว" type="radio" name="recommendationPerson" value="family" checked={answer.recommendationPerson=='family'} onChange={this.changeRadio.bind(this, 'family' , "recommendationPerson")} />                            
                                    <RadioButton text="พนักงาน" type="radio" name="recommendationPerson" value="staff" checked={answer.recommendationPerson=='staff'} onChange={this.changeRadio.bind(this, 'staff' , "recommendationPerson")} />                            
                                </div>
                            </div>
                            <div>
                                <div className="containerQuestionText">
                                    <h1>
                                        เหตุผลที่ท่านเลือกใช้บริการร้านกาแฟ
                                    </h1>                          
                                </div>
                                <div className="containerChoice">
                                    <RadioButton text="เบเกอรี่" type="radio" name="reasonToDrink" value="bakery" checked={answer.reasonToDrink=='bakery'} onChange={this.changeRadio.bind(this, 'bakery' , "reasonToDrink")} />
                                    <RadioButton text="โปรโมชั่น/ส่วนลด" type="radio" name="reasonToDrink" value="promotion" checked={answer.reasonToDrink=='promotion'} onChange={this.changeRadio.bind(this, 'promotion' , "reasonToDrink")} />
                                    <RadioButton text="ราคาถูก" type="radio" name="reasonToDrink" value="price" checked={answer.reasonToDrink=='price'} onChange={this.changeRadio.bind(this, 'price' , "reasonToDrink")} />
                                    <RadioButton text="เข้าถึงร้านได้ง่าย" type="radio" name="reasonToDrink" value="easyToBuy" checked={answer.reasonToDrink=='easyToBuy'} onChange={this.changeRadio.bind(this, 'easyToBuy' , "reasonToDrink")} />
                                    <RadioButton text="พักผ่อนหย่อนใจ" type="radio" name="reasonToDrink" value="environment" checked={answer.reasonToDrink=='environment'} onChange={this.changeRadio.bind(this, 'environment' , "reasonToDrink")} />
                                    <RadioButton text="ชื่นชอบรสชาติของเครื่องดื่ม" type="radio" name="reasonToDrink" value="taste" checked={answer.reasonToDrink=='taste'} onChange={this.changeRadio.bind(this, 'taste' , "reasonToDrink")} />
                                    <RadioButton text="เจรจาธุรกิจ นัดพบปะสังสรรค์" type="radio" name="reasonToDrink" value="meeting" checked={answer.reasonToDrink=='meeting'} onChange={this.changeRadio.bind(this, 'meeting' , "reasonToDrink")} />
                                    <RadioButton text="ใช้บริการ Wi-fi/Internet ฟรี" type="radio" name="reasonToDrink" value="wifi/internet" checked={answer.reasonToDrink=='wifi/internet'} onChange={this.changeRadio.bind(this, 'wifi/internet' , "reasonToDrink")} />
                                </div>
                            </div>
                                   
                           
                            <div style={{textAlign : "center" , margin : "30px 0px"}}>
                                <button type="submit" className="submitButton">
                                    ทำนาย
                                </button>    
                            </div>                                                                                               
                        </form>
                        :
                        <div className="containerResult">
                            <h2 >ร้านที่เหมาะสำหรับคุณคือ..</h2>
                            <h1 style={{fontSize : "9em"}}>{predict}</h1>
                            <div style={{textAlign : "center" , marginTop : "20px" }}>
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
                            min-height : 90vh;
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
                            flex-direction : column;
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