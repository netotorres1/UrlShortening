import React, { useState } from 'react'
import shrtcode from '../api/shrtcode'

const Search = () => {

    const [link, setLink] = useState('')
    const [short, setShort] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        getLink();
    }

    const getLink = async () => {
        await shrtcode.get(`shorten?url=${link}`).then((response) => {
            setShort(response.data.result.short_link)
        }).catch( error => console.log(error))
    }

  return (
    <div>
        <form onSubmit={(e) => handleSubmit(e)}>
            <textarea value={link} onChange={(e) => setLink(e.target.value)}>
            </textarea>
            <button onClick={(e) => handleSubmit(e)}>Submit</button>
        </form>
        {short && (
            <div>
                Short Link: {short}
            </div>
        )}
    </div>
  )
}

export default Search