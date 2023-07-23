import classnames from 'classnames';
import styled from './Brand.module.scss'
import { getContrastYIQ } from '../../helpers';
import { useContext, useState } from 'react';
import MainContext from '../../MainContext';
import Icon from '../BrandColorsIcon/BrandColorsIcon';
import ClipboardButton from 'react-clipboard.js';

const Brand = ({ brand }) => {

    const { selectedBrands, setSelectedBrands, setCopied } = useContext(MainContext)


    const toggleSelected = () => {
        if (selectedBrands.includes(brand.slug)) {
            setSelectedBrands(selectedBrands.filter(slug => slug !== brand.slug))
        } else {
            setSelectedBrands([...selectedBrands, brand.slug])
        }
    }

    const setColor = (color) => {
        setCopied(color)
    }

    return (
        <div className={classnames({
            [styled["brand__item"]]: true,
            [styled["brand__item--selected"]]: selectedBrands.includes(brand.slug)
        })}>
            {selectedBrands.includes(brand.slug) && (
                <Icon icon="tick" size="26" color="#2196f3" />
            )}
            <h2 className={styled["brand__title"]} onClick={toggleSelected}>{brand.title}</h2>
            <div className={styled["brand__colors"]}>
                {brand.colors.map((color, key) => (
                    <ClipboardButton component="span" data-clipboard-text={color} key={key} onSuccess={() => setColor(color)} className={styled["brand__colors-item"]} style={{ '--bgColor': `#${color}`, '--textColor': `#${getContrastYIQ(color)}` }}>
                        {color}
                    </ClipboardButton>
                ))}
            </div>
        </div>
    )
}

export default Brand