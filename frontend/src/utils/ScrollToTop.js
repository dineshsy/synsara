import { useEffect } from 'react'

export default function ScrollToTop() {
    useEffect(() => {
        setTimeout(() => window.scrollTo(0, 0), 20)
    }, [])

    return null
}
