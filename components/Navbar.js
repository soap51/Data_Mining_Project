import React from 'react'
import Link from 'next/link'
class Navbar extends React.Component {
    state = {
        isLoggedIn : false
    }
    render(){
        return (
            <div>
                <nav className="containerNavbar">
                    <div>
                        <Link  href="/"><p className="link">Brand</p></Link>
                    </div>                    
                    <div className="containerRightNavbar">
                        <Link  href="/about"><p className="link">About</p></Link>
                        <Link  href="/quiz"><p className="link">Quiz</p></Link>
                    </div>                    
                    <style jsx>{`
                        .containerNavbar {
                            position : fixed;
                            width : 100%;
                            background-color : white;
                            box-shadow: 0 4px 2px -2px rgba(200,200,200,.3);
                            opacity : 1;
                            z-index : 3;
                            padding : 20px 0px;
                            display : flex;
                            justify-content : space-between;
                            align-items : center;
                        }
                        .link{
                            text-decoration : none;
                            cursor : pointer;
                            margin : 0px 20px;  
                            transition : color 0.3s;
                        }
                        .link:hover{
                            color : #FBC5DD;

                            transition : color 0.3s;
                        }
                        .containerRightNavbar{
                            display : flex;
                            justify-content : space-between;
                        }
                    `}</style>
                </nav>
            </div>
        )
    }
}

export default Navbar