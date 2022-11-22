import { Headers } from "./style";
import Logo from '../../assets/logo.svg'


export default function Header(){
    return (
        <Headers>
            <img src={Logo} alt="" />
            <ul>
                <li>people</li>
                <li>events</li>
                <li>contact</li>
                <li>feacture</li>
            </ul>
            <button>cadastrar</button>
        </Headers>
    )
}