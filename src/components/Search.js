import React, { useEffect, useState } from 'react'
import './Search.css'
import brandRecognition from './../assets/images/icon-brand-recognition.svg'
import detailedrecords from './../assets/images/icon-detailed-records.svg'
import fullycustomizable from './../assets/images/icon-fully-customizable.svg'



const Search = () => {
    const getLocalStorage = () => {
        let links = localStorage.getItem('links')

        if(links){
            return JSON.parse(localStorage.getItem('links'))
        }else{
            return []
        }
    }

    const [link, setLink] = useState(getLocalStorage())
    const [links, setLinks] = useState([])
    const [buttonText, setButtonText] = useState('Copy')

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!link){
            alert("Não é um link valido.")
        }else{
            const shortenlink = async () => {
                const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${link}`)
                const data = await res.json();
                setLinks(data.result)
                setLink("");
            }
            shortenlink()
        }
    }
    const handleCopy = () => {
        navigator.clipboard.writeText(links.full_short_link)
        setButtonText("Copied!")
    } 

    useEffect(() => {
        localStorage.setItem("links", JSON.stringify(links))
    }, [links])

  return (
    <div className='containerbody'>
        <div className='containerSearch'>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input placeholder='Shorten a link here...' className='input' value={link} onChange={(e) => setLink(e.target.value)} />
                <button className='btninput' onClick={(e) => handleSubmit(e)}>Shorten it!</button>
            </form>
        </div>
            <div className='containerLinks'>
                <article className='originallinkcontainer'>
                    <h5 className='originalink'>{links.original_link}</h5>
                </article>  
                <hr className='hr'></hr>
                <article >
                    <nav className='btnCopy'>
                        <button className='btnlink'>{links.full_short_link}</button>
                        <button className='btncopiar' onClick={handleCopy}>{buttonText}</button>
                     </nav>
                </article>
            </div>
        
        <div className='containerAdvancedStatistics'>
            <h1 className='AdvancedTitle'>Advanced Statistics</h1>
            <p className='AdvancedP'>
            Track how your links are performing across the web with our 
            advanced statistics dashboard.
            </p>
            <div className='containerCards'>
                <div className='cardRecognition'>
                    <div className='iconCard'>
                        <img alt='' src={brandRecognition} />
                    </div>
                    <h2 className='titlecard' > Brand Recognition</h2>
                    <p className='p'>
                    Boost your brand recognition with each click. Generic links don’t 
                    mean a thing. Branded links help instil confidence in your content.
                    </p>
                </div>
                
                <div className='cardDetailed'>
                    <div className='iconCard'>
                        <img alt='' src={detailedrecords} />
                    </div>
                    <h2 className='titlecard'> Brand Recognition</h2>
                    <p className='p'>
                    Boost your brand recognition with each click. Generic links don’t 
                    mean a thing. Branded links help instil confidence in your content.
                    </p>
                </div>
                
                <div className='cardFully'>
                    <div className='iconCard'>
                        <img alt='' src={fullycustomizable} />
                    </div>
                    <h2 className='titlecard'> Brand Recognition</h2>
                    <p className='p'>
                    Boost your brand recognition with each click. Generic links don’t 
                    mean a thing. Branded links help instil confidence in your content.
                    </p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Search