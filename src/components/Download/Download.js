import { useContext, useEffect, useState } from "react"
import MainContext from "../../MainContext"
import Icon from "../BrandColorsIcon/BrandColorsIcon"
import styled from './Download.module.scss'
import { Link } from "react-router-dom"

const Download = () => {

    const { selectedBrands, setSelectedBrands, brands } = useContext(MainContext)
    const [downloadUrl, setDownloadUrl] = useState()
    const [cssMethod, setCssMethod] = useState('css')

    const getLink = () => {
        prompt("Here's the URL to share", `${window.location.href}collection/${selectedBrands.join(',')}`)
    }

    useEffect(() => {
        if (selectedBrands.length > 0) {

            let output = ''
            switch (cssMethod) {

                case 'css':
                    output += ':root {\n'
                    selectedBrands.map(slug => {
                        let brand = brands.find(brand => brand.slug === slug)
                        brand.colors.map((color, key) => {
                            output += `--${slug}-${key}: #${color};\n`
                        })
                    })
                    output += '}'
                    break;

                case 'scss':
                    selectedBrands.map(slug => {
                        let brand = brands.find(brand => brand.slug === slug)
                        brand.colors.map((color, key) => {
                            output += `\$${slug}-${key}: #${color};\n`
                        })
                    })
                    break;

                case 'less':
                    selectedBrands.map(slug => {
                        let brand = brands.find(brand => brand.slug === slug)
                        brand.colors.map((color, key) => {
                            output += `@${slug}-${key}: #${color};\n`
                        })
                    })
                    break;

            }

            const blob = new Blob([output])
            const url = URL.createObjectURL(blob)
            setDownloadUrl(url)
            return () => {
                URL.revokeObjectURL(url)
                setDownloadUrl('')
            }
        }
    }, [selectedBrands, cssMethod])

    return (
        <div className={styled.download}>
            <ul className={styled["download__actions"]}>
                <li className={styled["download__actions-item"]}>
                    <a download={`brands.${cssMethod}`} href={downloadUrl}>
                        <Icon icon="download" size="18" color="#607d8b" />
                    </a>
                </li>
                <li className={styled["download__actions-item"]}>
                    <select onChange={(e) => setCssMethod(e.target.value)}>
                        <option value="css">CSS</option>
                        <option value="scss">SCSS</option>
                        <option value="less">LESS</option>
                    </select>
                </li>
                <li className={styled["download__actions-item"]}>
                    <button onClick={getLink}>
                        <Icon icon="link" size="20" color="#607d8b" />
                    </button>
                </li>
                <li className={styled["download__actions-item"]}>
                    <button onClick={() => setSelectedBrands([])}>
                        <Icon icon="close" size="14" color="#607d8b" />
                    </button>
                </li>
            </ul>
            <div className={styled["download__brand-selected"]}>
                {selectedBrands.length} brands collected
            </div>
        </div>
    )
}

export default Download   