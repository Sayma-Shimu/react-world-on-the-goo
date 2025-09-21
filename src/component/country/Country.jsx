import { useState } from "react"


const Country = ({country, handleVisitedCountries, handleVisitedFlags}) => {
    // console.log(country.area.area);

    // console.log('handle Visited Countries clicked');
    
    const [visited, setVisited] = useState(false);
    

    const handleVisited = ()=>{
      setVisited(true);
      // console.log('button clicked');

       handleVisitedCountries(country);
      
    }
    
  return (
    <div  className='border-2 border-red-600 rounded-2xl p-4 m-4'>
        <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
        <h3>Name: {country.name.common} </h3>
        <p>Population: {country.population.population}</p>
        <p>Area: {country.area.area} {country.area.area > 300000? 'Big Country' : 'Small country'}</p>

        <button onClick={handleVisited} className="bg-gray-800 text-white p-3 rounded mt-2">
          {visited ? 'visited' : 'Not visited'}
        </button>
        <button onClick={()=>{handleVisitedFlags(country.flags.flags.png)}} className="bg-gray-800 text-white p-3 rounded ml-2">Add Visited Flag</button>
    </div>
  )
}

export default Country