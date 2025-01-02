"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

interface Clientside {
    id: number;
    title:string;
    price:string;
    description:string;
    category:string;
    image:string;
    isNew: boolean;
    brand: string;

}

const Hero = () => {
    const [data, setData] = useState<Clientside[]>([]);


    useEffect(() => {
    const fetchdata = async () => {
        const response = await fetch(
            "https://jsonserver.reactbd.com/phonecase"
        );
        const parsedResponse: Clientside[] = await response .json();
        console.log ("clientside", parsedResponse);
        setData(parsedResponse);
    };
    fetchdata();
    });

    return (
        <div className="max-w-screen-lg mx-auto grid grid-cols sm:grid-cols-2 md:grid-cols-3 lg:gird-cols-4 gap-5 py-9">
            {data.map((fetch, index) => (
                <div key={index} className="flex flex-col gap-6 border-[1px] border-gray-700 rounded:md overflow-hidden hover:border-gray-400 duration-300">
                    <p>Id: {fetch.id}</p>
                    <p>title: {fetch.title}</p>
                    <p>price: {fetch.price}</p>
                    <p>description: {`${fetch.description}`}</p>
                    <p>category: {`${fetch.category}`}</p>
                    <p>brand: {`${fetch.brand}`}</p>
                    
                    <div><strong>image:</strong>
                    <Image src={fetch.image} alt={fetch.title}></Image>
                    </div>
                    <div className="border-[1px] border-gray-300 rounded-md overflow-hidden hover:border-gray-950 duration-300">
By Aisha
          </div>


                </div>
            ))}
        </div>
    )
}


export default Hero
