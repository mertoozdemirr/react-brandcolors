import Modal from 'react-modal';
import Icon from "../BrandColorsIcon/BrandColorsIcon";
import { useContext } from 'react';
import MainContext from '../../MainContext';
import styled from './ModalContent.module.scss'

const ModalContent = () => {     
    const {modalIsOpen, toogleModal} = useContext(MainContext)
    
    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={toogleModal}
            className={styled["about-modal"]}
            overlayClassName={styled["about-modal__overlay"]}
        >
            <div className={styled["about-modal__content"]}>
                <button className={styled["about-modal__close"]} onClick={toogleModal}>
                    <Icon icon="close" size={15} color="black" />;
                </button>

                <h2>About BrandColors</h2>
                <p>BrandColors was created by <a href="https://www.designbombs.com/"><strong>DesignBombs</strong></a>. The goal was to create a helpful reference for the brand color codes that are needed most often.</p>
                <p>It's been featured by Smashing Magazine, CSS-Tricks, Web Design Depot, Tuts+, and over <strong>2 million pageviews</strong>. There are now over <strong>600 brands</strong> with <strong>1600 colors</strong> and the collection is always growing.</p>
            </div>
        </Modal>
    )
}
export default ModalContent