import './FuneralHeader.css'


export default function funeral() {

    return(
        <div className="Fheader">
            <div className="TopHeader">
                <div className="Flogo">MEONG-GORITHM</div>
                
            </div>
            <nav className="FMenu">
                <ul>
                    <li><a href="/school">유치원 펀딩</a></li>
                    <li><a href="/">HOME</a></li>
                    <li><a href="/products">반려동물 용품 펀딩</a></li>
                    
                </ul>
            </nav>
        </div>
    )
};


