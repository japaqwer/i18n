import { useRouter } from 'next/router'
import React from 'react'

const languges = {
    en: 'English',
    ru: 'Русский'
}

const LanguageChange = () => {
    const router = useRouter();

    const handleChange = (lang) => {
        router.push(router.asPath, router.asPath, {
            locale: lang,
            scroll: true
        })
    }

    return (
        <div>
            {
                Object.keys(languges).map((key, index) => {
                    return <button key={index} onClick={() => handleChange(key)}>
                        {languges[key]}
                    </button>
                })
            }
        </div>
    )
}

export default LanguageChange