import React from 'react'
import { use } from 'react'
import Country from './country/Country';
import { useState } from 'react';


const Countries = ({ countriesPromise }) => {
  const [visitedCountries, setVisitedCountries] = useState([]);

  const handleVisitedCountries = (country) => {
    console.log('Handle Visited Countries Clicked', country);

    const newVisitedCountries = [...visitedCountries, country]
    setVisitedCountries(newVisitedCountries)

  }


  const countriesData = use(countriesPromise);
  const countries = countriesData.countries
  // console.log(countries);

  return (
    <div>
      <h1>In the countries: {countries.length}</h1>
      <h3>Total country visited: {visitedCountries.length}</h3>

      <ol className='mt-3'>
        {
          visitedCountries.map((country, index) => <li key={index}>{index+1}. {country.name.common}</li>)
        }
      </ol>

      <div className=' grid grid-cols-3 gap-4'>
        {
          countries.map(country => <Country
            key={country.cca3.cca3}
            country={country}
            handleVisitedCountries={handleVisitedCountries}
          >

          </Country>)
        }
      </div>
    </div>
  )
}

export default Countries