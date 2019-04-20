import React from 'react'
import Navbar from '../components/Navbar'
import Link from 'next/link'
export default class extends React.Component {
    render(){
        return (
            <div>
                <Navbar/>
                <img src="/static/AmazonVsStarbuck.png" style={{display:"block", width : "100%" , maxHeight : "100vh"}}/>
                <div className="containerAmazonDetail" style={{backgroundImage : ""}} >
                    <div style={{display : "flex",justifyContent : "center" ,flexDirection : "column" , padding : "5%"}}>
                        <h1>Amazon</h1>
                        <p>
                            ร้านกาแฟ Cafe Amazon ถือกำเนิดขึ้นครั้งแรกในปี 2545 จากวิสัยทัศน์ของผู้บริหาร บริษัท ปตท. จำกัด (มหาชน) ที่เล็งเห็นถึงโอกาสในการเพิ่มศักยภาพทางการตลาดของสถานีบริการน้ำมัน ปตท. จึงได้วางแนวคิดให้เป็นธุรกิจหนึ่งในสถานีบริการน้ำมัน ปตท. ที่สร้างรายได้ให้กับสถานีฯ และตอบสนองต่อไลฟ์สไตร์ของผู้บริโภคและคนเดินทางได้มากขึ้น

                            การสร้างแบรนด์ "CafeAmazon" เริ่มต้นจากแนวความคิดที่ว่า ประเทศบราซิลซึ่งเป็นต้นตำรับกาแฟและดินแดนแห่งนี้มีป่า Amazon อันเป็นสุดยอดแห่งป่าดงดิบธรรมชาติของโลก ที่อุดมไปด้วยเสน่ห์ของธรรมชาติอันยิ่งใหญ่ ทั้งพืชพรรณแมกไม้ สายน้ำ สัตว์ป่านานาชนิด และยังเป็นแหล่งผลิตอากาศอันบริสุทธิ์ แนวความคิดนี้จึงถูกนำมาเพื่อสร้างสรรค์เป็นร้านกาแฟที่มีบรรยากาศร่มรื่นเย็นสบายด้วยร่มไม้และน้ำล้อมรอบ

                            โดยตลอดระยะเวลาที่ผ่านมา ร้าน CafeAmazon ถูกพัฒนาให้เป็นจุดนัดพบ แหล่งพักผ่อน สำหรับคนเดินทาง ตกแต่งด้วยโทนสีเขียว นำเสนอภาพลักษณ์แนวธรรมชาติ โดยใช้สวนหย่อมและน้ำพุเพื่อสร้างบรรยากาศ ร่มรื่น เย็นสบาย ความรู้สึกผ่อนคลาย ซึ่งถือเป็นเอกลักษณ์ของร้าน Cafe Amazon เสมือนเป็นโอเอซิสของคนเดินทาง และด้วยเอกลักษณ์รสชาติเครื่องดื่มกาแฟที่เข้มข้น จึงกลายมาเป็นสโลแกนที่ว่า "Taste of Nature"0
                        </p>
                    </div> 
                    <img src="/static/AmazonCup.png" style={{width : "300px" , height : "100%" , padding : "5% 0"}}  />                   
                </div>
                
                <div className="containerStarbuckDetail" >
                    <div style={{display : "flex",justifyContent : "center" ,flexDirection : "column" , padding : "5%"}}>
                        <h1>Starbuck</h1>
                        <p>
                            สตาร์บัคส์ (อังกฤษ: Starbucks) เป็นร้านกาแฟจากอเมริกาในเมืองซีแอตเทิลในรัฐวอชิงตัน ในปี ค.ศ. 1971 โดย กอร์ดอน โบเคอร์, เจอรี่ บัลด์วิน และซิฟ ซีเกิ้ล โดยตอนแรกใช้โลโก้เป็นรูปไซเรน 2 ปลาย ก่อตั้งในฐานะร้านขายเมล็ดกาแฟคั่ว ต่อมาปี 1982 สตาร์บัคส์มีสาขา 5 สาขา และโฮเวิร์ด ชูลทส์ได้เข้ามาร่วมงานด้วย โดยดูแลด้านการตลาดและค้าปลีก ซึ่งเขาเป็นผู้แนะนำให้สตาร์บัคส์เปิดเป็นบาร์กาแฟ แต่หลายคนก็ไม่เชื่อในวิสัยทัศน์ของเขา ต่อมาชูลทส์ได้ลาออกจากบริษัท ไปเปิดบาร์กาแฟของตนเองชื่อ อิล จิออร์เนล และจำหน่ายกาแฟของสตาร์บัคส์ ในปี 1987 สตาร์บัคส์ประสบปัญหายุ่งยากจากการไม่สามารถควบคุมคุณภาพสินค้าได้ ปี 1988 อิล จิออร์เนลจึงซื้อกิจการด้านค้าปลีกไว้พร้อมกับเปลี่ยนชื่อเป็น สตาร์บัคส์ คอร์ปอเรชั่น และจ้างนักบริหารมืออาชีพเข้ามาดูแล ปี 1992 สตาร์บัคส์ได้เข้าตลาดหลักทรัพย์ ปี 1996 สตาร์บัคส์ได้ขยายสาขาเข้าไปในญี่ปุ่นและสิงคโปร์ โดยบริษัทได้เริ่ม Caffe Starbucks เป็นระบบบริการออนไลน์โดยอาศัยเครือข่ายของ เอโอแอล
                            สัญลักษณ์ของสตาร์บัคส์ครั้งแรกนั้นเป็นรูปนางเงือก ซึ่งเป็น นางเงือกไซเรนสองหาง (Norse Siren) ในเทพนิยายปรัมปรา เพื่อให้นึกถึงการผจญภัยในทะเล และปรับเปลี่ยนหลายครั้งและล่าสุดคือ ค.ศ. 2011 ในวาระการเฉลิมฉลองครบ 40 ปีของการดำเนินธุรกิจ 
                            ปัจจุบันสตาร์บัคส์ เป็นร้านจำหน่ายกาแฟอันดับที่ 1 ของโลก และเป็นหนึ่งในสัญลักษณ์ของทุนนิยมอเมริกัน มีสาขากว่า 19,972 สาขาทั้งในสหรัฐฯและในอีก 60 ประเทศ ประธานเจ้าหน้าที่บริหารคนปัจจุบันคือ โฮเวิร์ด ชูลทส์ (Howard Schultz) ในปี ค.ศ. 2012 ประเทศไทยมีจำนวนสาขาทั้งหมด 158 สาขา
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
                        color : white;
                        display : flex;
                        z-index : 2;
                        max-height : 600px;
                        background-color : #FBC5DD;
                        flex-direction : row-reverse;
                    }
                    .containerAmazonDetail{
                        padding-top : 0px;
                        display : flex;
                        z-index : 2;
                        max-height : 600px;
                        justify-content : space-around;
                        align-items :center;
                        background-color : #3498db;
                        color : white;
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
                        box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
                        transition : box-shadow 0.8s;
                        cursor : pointer;
                    }
                    .letStartButton:hover{
                        box-shadow: none;
                        transition : box-shadow 0.8s;
                    }
                    
                      
                `}</style>
            </div>
        )
    }
}