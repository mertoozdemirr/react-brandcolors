import styled from './Content.module.scss'
import Search from '../Search/Search'
import MainContext from '../../MainContext'
import Brand from '../Brand/Brand'
import { useContext, useEffect } from 'react'
import LazyLoad from 'react-lazyload'
import Download from '../Download/Download'

const Content = () => {

    const { brands, selectedBrands } = useContext(MainContext)

    return (
        <main>
            <header className={styled.header}>
                <Search />
                {selectedBrands.length > 0 && (
                    <Download />
                )}
            </header>

            <section className='brand'>
                {brands.map((brand, key) => (
                    <LazyLoad once={true} placeholder="Yükleniyor...">
                        <Brand brand={brand} key={key} />
                    </LazyLoad>
                ))}
            </section>

        </main>
    )
}

export default Content