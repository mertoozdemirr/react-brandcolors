import { useParams, Link, useNavigate } from "react-router-dom"
import { useContext, useEffect } from "react"
import MainContext from "../../MainContext"
import styled from '../../components/Content/Content.module.scss'
import Brand from "../Brand/Brand"
import Icon from "../BrandColorsIcon/BrandColorsIcon"
import LazyLoad from "react-lazyload"

const Collection = () => {
    const { slugs } = useParams()
    const navigate = useNavigate()
    const { setSelectedBrands, selectedBrands, setSearch, brands } = useContext(MainContext)

    const clearSelectedBrands = () => {
        setSelectedBrands([])
        setSearch('')
        navigate('/') 
    }

    useEffect(() => {
        setSelectedBrands(slugs.split(','))
    }, [])

    return (
        <main>
            <header className={styled.header}>
                <Link to="/" onClick={clearSelectedBrands} className={styled["header__collection"]}>
                    <Icon icon="arrow-left" size="16" color="#607d8b" />
                    All Brands
                </Link>
            </header>

            <section className='brand'>
                {selectedBrands.map(slug => {
                    let brand = brands.find(brand => brand.slug === slug)
                    return (
                        <LazyLoad key={brand.slug} once={true} placeholder="Yükleniyor...">
                            <Brand brand={brand} />
                        </LazyLoad>
                    )
                })}
            </section>

        </main>
    )
}

export default Collection