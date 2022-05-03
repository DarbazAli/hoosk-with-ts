import { useState } from 'react'
import { json } from 'stream/consumers'

const useStateComponent = () => {
  const [arr, setArr] = useState<number[]>([])
  const [name, setName] = useState<string | null>(null)
  return (
    <div>
      <button onClick={() => setArr([...arr, arr.length + 1])}>Add to array</button>
      <div>
        {
          JSON.stringify(arr)
        }
      </div>
      <hr />

      <button onClick={() => setName('Mac')}>Set Name</button>
      <div>
        {name}
      </div>

    </div>
  )
}

export default useStateComponent