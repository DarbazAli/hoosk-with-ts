import { useState, useContext } from 'react'
import UserContext, { UserState } from '../store'

const ConsumerComponent = () => {
    const user = useContext<UserState>(UserContext)
    return (
        <div>
            <h1>useContext</h1>
            <div>First: {user.first}</div>
            <div>Last: {user.last}</div>
        </div>
    )
}

const useContextComponent = () => {
    const [user, setUser] = useState<UserState>({
        first: "Max",
        last: "Smith"
    })
    return (
        <UserContext.Provider value={user}>
            <ConsumerComponent />
            <button onClick={() => setUser({
                first: "Jade",
                last: "Smith"
            })}>
                Change Context
            </button>
            <hr />
        </UserContext.Provider>
    )
}

export default useContextComponent