import { useState, useEffect } from 'react'

const useEffectComponent = () => {
    const [value, setValue] = useState(0)

    useEffect(() => {
        const timer = window.setInterval(() => {
            setValue(v => v + 1)
        }, 1000)

        return () => window.clearInterval(timer)
    }, [])


    return (
        <div>
            <h1>useEffect</h1>
            {value}
            <hr />
        </div>

    )
}

export default useEffectComponent