import { useContext, useEffect, useState } from 'react';
import { getContrastYIQ } from '../../helpers';
import styled from './Copied.module.scss'
import classNames from 'classnames';
import MainContext from '../../MainContext';

const Copied = ({ color }) => {

    const { copiedFadeIn, setCopiedFadeIn } = useContext(MainContext)

    useEffect(() => {
        let timer = setTimeout(() => setCopiedFadeIn(true), 200)
        return () => {
            clearTimeout(timer)
        }
    }, [copiedFadeIn])

    return (
        <div className={classNames({
            [styled.copied]: true,
            [styled["copied--selected"]]: copiedFadeIn
        })} style={{ '--bgColor': `#${color}`, '--textColor': `#${getContrastYIQ(color)}` }}>
            Copied #{color} to Clipboard
        </div>
    )
}

export default Copied