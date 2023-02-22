import React from 'react'
// import MemeData from '../components/MemeData';

function Meme() {
    const [meme, setMeme] = React.useState(
        {
            topText: "",
            bottomText: "",
            randomImage: 'https://i.imgflip.com/1ur9b0.jpg'
        })

    const [allMemes, setAllMemes] = React.useState([])

    function getRandom() {
        const random = Math.floor(Math.random() * allMemes.length) + 1;
        const url = allMemes[random].url
        setMeme(prevMemeImage => ({
            ...prevMemeImage, randomImage: url
        }))
    }

    React.useEffect(() => {
        async function getMemes() {
            const response = await fetch('https://api.imgflip.com/get_memes')
            const data = await response.json()
            setAllMemes(data.data.memes)
        }
        getMemes()
    },[])

    function memeText(e) {
        setMeme(prevMemeText => {
            return {
                ...prevMemeText,
                [e.target.name]: e.target.value
            }
        })
    }

  return (
    <main>
        <div className='form'>
            <input type="text" className='form-input' placeholder='Top text' name="topText" onChange={memeText} 
            value={meme.topText} />
            <input type="text" className='form-input' placeholder='Bottom text' name='bottomText' onChange={memeText} 
            value={meme.bottomText} />
            <button className='form-button' onClick={getRandom}>Get a new image 🖼</button>
        </div>
        <div className='meme'>
            <img src={meme.randomImage} className="meme-image" />
            <h2 className='meme-text top'>{meme.topText}</h2>
            <h2 className='meme-text bottom'>{meme.bottomText}</h2>
        </div>
    </main>
  )
}

export default Meme
