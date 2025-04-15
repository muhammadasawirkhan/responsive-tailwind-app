import React, { useState, useEffect } from 'react';
import Card from '../components/card';
import card13pic from '../assets/images/card13pic.png';
import card14pic from '../assets/images/card14pic.png';
import card15pic from '../assets/images/card15pic.png';
import card16pic from '../assets/images/card16pic.png';
import card17pic from '../assets/images/card17pic.png';
import card18pic from '../assets/images/card18pic.png';
import card19pic from '../assets/images/card19pic.png';
import card20pic from '../assets/images/card20pic.png';

const Auction = () => {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const deadline = 'December, 31 ,2025';

    const gettime = () => {
        const time = Date.parse(deadline) - Date.now();
        setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
        setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
        setMinutes(Math.floor((time / (1000 * 60)) % 60));
        setSeconds(Math.floor((time / 1000) % 60));
    };

    useEffect(() => {
        const interval = setInterval(gettime, 1000);
        return () => clearInterval(interval);
    }, []);

    const images = [card13pic, card14pic, card15pic, card16pic, card17pic, card18pic,card19pic,card20pic];

    return (
        <div className='py-[100px] px-[0px] mx-auto max-w-[1318px]'>
            <h1 className='text-4xl sm:text-center lg:text-left lg:ml-[10px]'>Auction</h1>
            <div className='flex flex-wrap mx-auto max-w-[1318px] gap-2 pt-[40px] justify-around'>
                {images.map((img, idx) => (
                    <Card
                        key={idx}
                        image={img}
                        days={days}
                        hours={hours}
                        minutes={minutes}
                        seconds={seconds}
                    />
                ))}
            </div>
        </div>
    );
};

export default Auction;





