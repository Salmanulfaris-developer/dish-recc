"use client"
export default function Navbar(){
    return (
        <>
        <div className="overflow-hidden flex justify-between content-center bg-amber-200">
            <div className="overflow-hidden p-[20px 10px] ">
                <a href="#default" className="text-2xl font-bold block text-left p-4" >Taste</a>
        </div>
            <div className="float-right">
                <a className="float-left text-black text-center p-2 mr-5 no-underline text-lg bg-amber-300 leading-6 rounded text-whitebg-white hover:text-white block text-left mt-4" href="http://localhost:3000/home">Home</a>
                <a className="float-left text-black text-center p-2 mr-5 no-underline text-lg bg-amber-300 leading-6 rounded text-whitebg hover:text-white block text-left mt-4" href="http://localhost:3000/contact">Contact</a>
                <a className="float-left text-black text-center p-2 mr-5 no-underline text-lg bg-amber-300 leading-6 rounded text-whitebg hover:text-white block text-left mt-4" href="http://localhost:3000/dishes">Dishes</a>
            </div>
        </div>
        <div>
        <div className="m-0 p-0 flex justify-center items-center h-screen text-center bg-amber-200">
            <div className="mt-0">
                <h1 className="text-4xl">Welcome to Our Dish Listing Website. </h1>
                <h1 className="text-3xl	mt-2">Find your taste.</h1>
                <button className="bg-amber-300 text-black rounded cursor-pointer p-3 mt-3">Search your dish.</button>
            </div>
        </div>
        </div>
        <div className="text-white bg-black">
            <p>Contact us: techeydev007@gmail.com | Phone: (+91) 9746281784</p>
            <p>&copy; 2024 Restaurant Lister. All rights reserved.</p>
        </div>
        </>
    )
}