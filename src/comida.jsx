import React, { useState } from "react";
import  ReactDOM  from "react-dom/client";
import comidas from './comidas.json';

const menuDom = document.getElementById('menu');
const root = ReactDOM.createRoot(menuDom);
root.render(<Menu />);

function Menu(){
    const [isVisible, setIsVisible] = useState(false);

    React.useEffect(() => {
        if(isVisible) return

        const observer = new IntersectionObserver((entries, observer) => {
            entries.map(entry => {
                if(entry.target.id === 'menu' && entry.isIntersecting) setIsVisible(true);  
            })
        }, {
            rootMargin: "0px",
            threshold: .3,
        });
          
        observer.observe(menuDom);

        return () => {
            observer.unobserve(menuDom)
            observer.disconnect()
        }

    }, [isVisible])

    return <>
        {comidas.map(({name, price, img}) => (
            <Comida
                key={name}
                title = {name}
                price = {price}
                img = {img}
                isVisible = {isVisible}
            />
        ))}
    </>
}

function Comida({title, price, img, isVisible}){
    return (
        <article className={`relative overflow-hidden grid grid-cols-[auto_1fr] max-[500px]:grid-cols-1 items-center w-full py-2 rounded-md shadow-md shadow-stone-600 dark:shadow-slate-800 
                            ${isVisible ? 'animate-[pop_1s_ease-in-out_forwards]' : 'scale-0 max-md:scale-100'}`}>
            <figure className="w-[250px] h-[150px] max-[500px]:w-full max-[500px]:h-full  flex-shrink-0 px-2 z-10">
                <img src={img} className="w-full h-full object-cover" alt="" />
            </figure>
            <div className="flex flex-col  px-5 text-left z-10">
                <div>
                    <h3 className="text-xl font-semibold">
                    {title}
                    </h3>
                    <span className="text-xs font-light">
                    {price} USD
                    </span>
                </div>
                <div className="text-right pb-5 pr-10">
                    <a href="" className="inline-block mt-14 px-8 py-1 text-[1.1rem]  text-stone-100 text-center  bg-yellow-500  rounded-md 
                                    hover:scale-105 hover:rotate-[-2deg] transition-transform  hover:translate-y-[-1px] 
                                    shadow-2xl shadow-slate-900 dark:shadow-slate-800">
                    Pedir
                    </a>
                </div>

            </div>
            <div className="absolute top-0 left-[45%] z-0 w-full h-full rotate-[-40deg] bg-yellow-500 opacity-10"></div>
            <div className="absolute top-0 left-[-45%] z-0 w-full h-full rotate-[-45deg] bg-yellow-500 opacity-10"></div>
        </article>
    )
}
