import React from 'react'
import Navbar from '../components/Navbar'
import Link from 'next/link'
export default class extends React.Component {
    render(){
        return (
            <div>
                <Navbar/>
               
                <div className="containerAmazonDetail" style={{backgroundImage : ""}} >
                    <div style={{display : "flex",justifyContent : "center" ,flexDirection : "column" , padding : "5%"}}>
                        <h1>Amazon</h1>
                        <p>
                            เนื้อหาจำลองแบบเรียบๆ ที่ใช้กันในธุรกิจงานพิมพ์หรืองานเรียงพิมพ์ มันได้กลายมาเป็นเนื้อหาจำลองมาตรฐานของธุรกิจดังกล่าวมาตั้งแต่ศตวรรษที่ 16 เมื่อเครื่องพิมพ์โนเนมเครื่องหนึ่งนำรางตัวพิมพ์มาสลับสับตำแหน่งตัวอักษรเพื่อทำหนังสือตัวอย่าง Lorem Ipsum อยู่ยงคงกระพันมาไม่ใช่แค่เพียงห้าศตวรรษ
                        </p>
                    </div> 
                    <img src="/static/AmazonCup.png" style={{width : "300px" , height : "100%" , padding : "5% 0"}}  />                   
                </div>
                
                <div className="containerStarbuckDetail" >
                    <div style={{display : "flex",justifyContent : "center" ,flexDirection : "column" , padding : "5%"}}>
                        <h1>Starbuck</h1>
                        <p>
                        เนื้อหาจำลองแบบเรียบๆ ที่ใช้กันในธุรกิจงานพิมพ์หรืองานเรียงพิมพ์ มันได้กลายมาเป็นเนื้อหาจำลองมาตรฐานของธุรกิจดังกล่าวมาตั้งแต่ศตวรรษที่ 16 เมื่อเครื่องพิมพ์โนเนมเครื่องหนึ่งนำรางตัวพิมพ์มาสลับสับตำแหน่งตัวอักษรเพื่อทำหนังสือตัวอย่าง Lorem Ipsum อยู่ยงคงกระพันมาไม่ใช่แค่เพียงห้าศตวรรษ
                        </p>
                    </div>
                    <img src="/static/StarbuckCup.png" style={{width : "300px" , height : "100%" , padding : "5%"}}  />        
                </div>
                <div className="containerLetStartQuiz">
                    <div className='containerLetStartButton'>
                        <Link href="/quiz">
                            <button className="letStartButton">
                                เริ่มต้นทำควิซ
                            </button>
                        </Link>                        
                    </div>
                    
                </div>
                <style jsx>{`
                    .containerStarbuckDetail{
                       
                        display : flex;
                        z-index : 2;
                        max-height : 600px;
                        background-color : #FBC5DD;
                        flex-direction : row-reverse;
                    }
                    .containerAmazonDetail{
                        padding-top : 50px;
                        display : flex;
                        z-index : 2;
                        max-height : 600px;
                        justify-content : space-around;
                        align-items :center;
                        background-color : white;
                    }
                    .containerLetStartQuiz{
                        display : flex;
                        justify-content : center;
                        min-height : 300px;
                        background-color : #F4F5FF;
                    }
                    .containerLetStartButton{
                        display : flex;
                        align-items : center;
                    }
                    .letStartButton{
                        padding : 10px 100px;
                        border-radius : 40px;
                        border : none;
                        font-size : 1.6em;
                        color : white;
                        font-family : Prompt;
                        font-weight : bold;
                        background-image: linear-gradient(to right , #fe00f4 , #b700ff);
                        transition : opacity 0.8s;
                        opacity : 0.7;
                        cursor : pointer;
                    }
                    .letStartButton:hover{
                        opacity : 1;
                        transition : opacity 0.8s;
                    }
                    
                      
                `}</style>
            </div>
        )
    }
}