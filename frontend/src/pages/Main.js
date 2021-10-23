import React from 'react'
import { useState } from 'react'
import '../stylesheets/Main.scss'

const Main = ({ username }) => {
    const [ listings, setListings ] = useState([]);

    return (
        <div className='main-page'> 
            <div className="listings-container">
                {
                    listings.map((listing) => <p>{listing}</p>)
                }
            </div>
        </div>
    )
}

export default Main
