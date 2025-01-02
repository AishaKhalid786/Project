"use client";

import { useParams } from "next/navigation";

const MobileData:Record<string,{name:string;price:string;description:string}> ={
    1: { name: 'iPhone 14', price: '$899', description: 'Apple flagship mobile.'},
    2: { name: 'Samsung Galaxy S22 ultra', price: '$899', description: 'High-end Samsung Phone.'},
    3: {name: 'Xiaomi Poco F3', price: '$699', description: 'Affordable killer Xiaomi Phone.'},
};

export default function MobileDetails() {
    const params = useParams();
    const mobileId=params?.id as string
    
    const mobile = mobileId? MobileData [mobileId]:undefined;

    if (!mobile) {
        return <p>Mobile not found!</p>;
    }

    return (
        <div className="p-5">
       <h1 className="text-2xl font-bold">{mobile.name}</h1>
       <p className="text-xl font-semibold">Price: {mobile.price}</p>
       <p className="text-xl text-zinc-900">{mobile.description}</p>
       </div>
    )
} 