import { Suspense } from "react"
import Countries from "./component/Countries"


const countriesPromise = fetch('https://openapi.programming-hero.com/api/all')

.then(res => res.json())

function App() {
  

  return (
    <>
     <div className="w-10/12 mx-auto">
       <Suspense fallback = {<p>jhanker vai loading...</p>}>
        <Countries countriesPromise = {countriesPromise} />
      </Suspense>
     </div>
      
    </>
  )
}

export default App
