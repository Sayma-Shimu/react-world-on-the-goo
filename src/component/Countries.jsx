import React from 'react'
import { use } from 'react'
import Country from './country/Country';
import { useState } from 'react';


const Countries = ({ countriesPromise }) => {
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [visitedFlags, setVisitedFlags] = useState([]);

  const handleVisitedCountries = (country) => {
    console.log('Handle Visited Countries Clicked', country);

    const newVisitedCountries = [...visitedCountries, country]
    setVisitedCountries(newVisitedCountries)

  }


  const handleVisitedFlags = (flag) => {
    // console.log('flag needed to b added', flag);
    const newVisitedFlag = [...visitedFlags, flag]
    setVisitedFlags(newVisitedFlag);

  }


  const countriesData = use(countriesPromise);
  const countries = countriesData.countries
  // console.log(countries);

  return (
    <div>
      <h1 className='font-semibold text-xl'>In the countries: {countries.length}</h1>
      <h3 className='font-semibold text-xl'>Total country visited: {visitedCountries.length}</h3>
      <h4 className='font-semibold text-xl'> Total visited flags: {visitedFlags.length}</h4>

      <ol className='mt-3'>
        {
          visitedCountries.map((country, index) => <li key={index}>{index + 1}. {country.name.common}</li>)
        }
      </ol>

      <div className='flex'>
        {
          visitedFlags.map((flag, index) => <img key={index+1} className='w-[120px] ml-3' src={flag} alt="" />)
        }
      </div>

      <div className=' grid grid-cols-3 gap-4'>
        {
          countries.map(country => <Country
            key={country.cca3.cca3}
            country={country}
            handleVisitedCountries={handleVisitedCountries}
            handleVisitedFlags={handleVisitedFlags}
          >

          </Country>)
        }
      </div>
    </div>
  )
}

export default Countries