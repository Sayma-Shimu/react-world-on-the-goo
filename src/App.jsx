import { Suspense } from "react"
import Countries from "./component/Countries"


const countriesPromise = fetch('https://openapi.programming-hero.com/api/all')

.then(res => res.json())

function App() {
  

  return (
    <>
      <Suspense fallback = {<p>jhanker vai loading...</p>}>
        <Countries countriesPromise = {countriesPromise} />
      </Suspense>
      
    </>
  )
}

export default App
