import React from 'react'
import Navbar from '../components/Navbar'
import RadioButton from '../components/RadioButton'
import Link from 'next/link'

export default class extends React.Component {
    render(){
        return (
            <div>
                <Navbar/>
                <div className="containerAbout">
                    <div className="containerCreateBy" >
                        <h1>Create By</h1>
                        <h1>นางสาว ณัฏฐกานต์ พิมพ์หนู รหัสนักศึกษา 59050203</h1>
                        <h1>นาย ณัฐนนท์ เสมอเชื้อ รหัสนักศึกษา 59050207</h1>
                        <h1>นาย ปรเมศวร์ ถวิลการ รหัสนักศึกษา 59050254</h1>                    
                    </div>
                    <div style={{margin : "20px 0px" , color : 'white'}}>
                        <h1>
                            เว็บไซต์นี้ใช้สำหรับการศึกษาวิชา Data Mining เท่านั้น
                        </h1>                       
                    </div>
                    <style jsx>{`
                        .containerAbout{
                           
                            min-height : 100vh;
                            background-color : #1abc9c;
                            display : flex;
                            align-items : center;
                            flex-direction : column;
                            justify-content  :center;
                        }
                        .containerCreateBy{
                            text-align : center;
                            color :white;
                        }
                    `}</style>
                </div>
            </div>
        )
    }
}