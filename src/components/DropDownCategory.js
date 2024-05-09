import beginnerData from '../data/BeginnerData.js'
import intermediateData from '../data/IntermediateData.js'
import expertData from '../data/ExpertData.js'

import { React, useState, useEffect } from 'react'
const DDcategory = () => {
    let yourDataArray = [];
    const [selectedLevel, setSelectedLevel] = useState('');

    useEffect(() => {
        setSelectedLevel('beginner');
    }, []);

    const handleLevelChange = (event) => {
        setSelectedLevel(event.target.value);
    };

   
    if (selectedLevel === 'beginner') {
        yourDataArray = beginnerData;

    } else if (selectedLevel === 'intermediate') {
        yourDataArray = intermediateData;

    } else if (selectedLevel === 'expert') {
        yourDataArray = expertData;

    }

    const openVideo = (videoUrl) => {
        console.log('Opening video with ID:', videoUrl);
        const youtubeLink = `https://www.youtube.com/watch?v=${videoUrl}`;
        window.open(youtubeLink, '_blank');
    };
    return (
        <div>
            <label>Pilih level:</label>
            <select value={selectedLevel} onChange={handleLevelChange} className='custom-dropdown' >
                <option value="beginner">Pemula</option>
                <option value="intermediate">Menengah</option>
                <option value="expert">Ahli</option>
            </select>
        </div>
    )
}

export default DDcategory