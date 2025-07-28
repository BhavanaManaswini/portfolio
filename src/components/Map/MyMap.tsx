'use client';

import 'maplibre-gl/dist/maplibre-gl.css';
import Image from 'next/image';
import { useState } from 'react';
import Map, { Marker, Popup } from 'react-map-gl/maplibre';
import { Icons } from '../icons';

interface Location {
    name: string;
    position: [number, number];
    description: string;
}

const locations: Location[] = [
    { name: 'Hyderabad', position: [78.388973, 17.520176], description: 'Hyderabad is where I was raised, where I grew up, and where I live today with my family. This place holds countless memories—of laughter, learning, and love.' },
    { name: 'Pragathi Central School', position: [78.393842, 17.520739], description: 'My foundation was built here. Till 10th grade, Pragathi was my second home. I graduated with a perfect 10 CGPA, but more importantly, I made unforgettable memories that shaped who I am.' },
    { name: 'Narayana Jr. College', position: [78.397929, 17.497828], description: 'Two years of dedication and growth. Narayana was where I pursued my Intermediate (HSC) and graduated with 97.3%. It was a time of focus, ambition, and preparing for the future.' },
    { name: 'VNRVJIET', position: [78.385499, 17.540671], description: 'My engineering journey unfolded here. At VNRVJIET, I earned my B.Tech with a CGPA of 9.24. It was a place of innovation, challenge, and transformation—where I discovered my passion for technology.' },
    { name: 'Capgemini', position: [78.381056, 17.435853], description: 'My first step into the professional world. Capgemini is where I began my career as a Frontend Developer.' },
];

const MyMap = () => {
    const [selected, setSelected] = useState<Location | null>(null);

    return (
        <div className="w-full h-full min-h-96 rounded-lg">
            <Map
                initialViewState={{
                    longitude: 78.4,
                    latitude: 17.5,
                    zoom: 4,
                }}
                style={{ width: '100%', height: '100%' }}
                mapStyle="https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json"
                mapLib={import('maplibre-gl')}
            >
                {locations.map((loc, idx) => (
                    <Marker
                        key={idx}
                        longitude={loc.position[0]}
                        latitude={loc.position[1]}
                        color="red"
                        onClick={() => setSelected(loc)}
                        className="cursor-pointer"
                    />
                ))}

                {selected && (
                    <Popup
                        longitude={selected.position[0]}
                        latitude={selected.position[1]}
                        onClose={() => setSelected(null)}
                        closeOnClick={false}
                        anchor="left"
                        closeButton={false}
                    >
                        <div className="text-foregroundReverse rounded-lg text-sm w-full p-2 relative"
                            style={{ width: '250px', padding: 0 }}>
                            <h3 className="font-bold mb-1">{selected.name == 'Capgemini' && (<Image src="/CGLogo.png" width={25} height={25} alt="CG logo" className='inline' />)}{selected.name}</h3>
                            <p>{selected.description}</p>
                            <button className='absolute right-0 top-0 text-red-500' onClick={() => setSelected(null)}><Icons.close /></button>
                        </div>
                    </Popup>
                )}
            </Map>
        </div>
    );
};

export default MyMap;
