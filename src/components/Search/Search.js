import { useContext } from 'react'
import Icon from '../BrandColorsIcon/BrandColorsIcon'
import styled from './Search.module.scss'
import MainContext from '../../MainContext'

const Search = () => {

    const {search, setSearch} = useContext(MainContext)

    return (
        <div className={styled["search"]}>
            <Icon icon="search" size="16" color="#607d8b" />
            <input type='text' placeholder='Search Brands' onChange={(e) => setSearch(e.target.value)} className={styled["search-input"]} />
        </div>
    )
}

export default Search