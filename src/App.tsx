import UseState from './components/useStateComponent'
import UseEffect from './components/useEffectComponent'
import UseContext from './components/useContextComponent'
const App = () => {
  return (
    <div>
      <h1>useState</h1>
      <UseState />
      <UseEffect />
      <UseContext />
    </div>
  )
}

export default App