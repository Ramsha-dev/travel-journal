import logoImg from '../../public/images/logo.png'

export default function Navbar(){
    return(
        <nav>
            <img src={logoImg}/>
            <p>Pakistan Diaries - A travel Journal</p>
        </nav>
    )
}