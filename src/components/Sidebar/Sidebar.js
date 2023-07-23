import styled from './Sidebar.module.scss'
import logo from '../../_assets/img/logo.png'
import ModalContent from '../ModalContent/ModalContent';
import { useContext } from 'react';
import MainContext from '../../MainContext';


const Sidebar = () => {
    const {toogleModal} = useContext(MainContext)    

    return (
        <>
            <aside className={styled.sidebar}>
                <div className={styled["sidebar__logo"]}>
                    <a href="/" className={styled["sidebar__logo-link"]}>
                        <img src={logo} />
                        Brand <strong>Colors</strong>
                    </a>
                </div>
                <div className={styled["sidebar__description"]}>
                    <p>The biggest collection of official brand color codes around. Curated by <a href='#'>@brandcolors</a> and friends.</p>
                </div>
                <nav>
                    <ul>
                        <li>
                            <a href='#'>Suggest a Brand</a>
                        </li>
                        <li>
                            <button onClick={toogleModal} className={styled["sidebar__modal-btn"]}>About BrandColors</button>
                        </li>
                    </ul>
                </nav>
            </aside>

            <ModalContent />
        </>

    )
}

export default Sidebar