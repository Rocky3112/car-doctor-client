import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";


const Services = () => {
    const [services, setServices] = useState([])

    useEffect(()=>{
        fetch('services.json')
        .then(res=> res.json())
        .then(data =>setServices(data))
    },[])
    return (
        <div>
            <div className=" text-center">
            <h2 className=" text-2xl text-yellow-500 font-bold">Servives</h2>
            <h1 className=" text-4xl font-bold">Our services Area</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quibusdam fuga consequatur pariatur! Voluptatibus natus minima quam architecto nisi magnam? Voluptatum incidunt nostrum illo optio facere iste reiciendis sapiente rem?</p>
        </div>
        <div>
            {
                services.map(service => <ServiceCard
                key={service._id}
                service ={service}
                ></ServiceCard>)
            }
        </div>
        </div>
    );
};

export default Services;