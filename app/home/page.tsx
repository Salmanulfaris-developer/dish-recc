import Link from "next/link"
import Image from 'next/image'
import Script from 'next/script'


export default function Home(){
    return (
       <section>
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
                <h1 className="text-3xl	">Find your taste.</h1>
                
                <button className="bg-amber-300 text-black rounded cursor-pointer p-3 mt-3 ">Search your dish.</button>
            </div>
        </div>
        </div>
        <div className="text-center p-12">
            <h2 className="text-3xl">Indian Dishes</h2>

            <div className="rounded-lg p-5 m-5 inline-block text-left max-w-80 bg-amber-300">
                <h3>Butter Chicken</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore earum nihil quo, illum veniam maiores dolores in? Aliquid beatae explicabo corporis ipsam impedit iusto? Officia exercitationem temporibus dolor nisi expedita?</p>
                <a href="http://localhost:3000/more" className="bg-amber-200 text-black rounded cursor-pointer text-base no-underline relative top-[8px] p-2">Get Recipe.</a>
            </div>

            <div className="rounded-lg p-5 m-5 inline-block text-left bg-amber-300 max-w-80">
                <h3>Vegetable Biryani</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit sequi iste tenetur molestias, in porro necessitatibus quod non vel maxime ullam quibusdam impedit iure quis adipisci aspernatur tempore corporis atque.</p>
                <a href="http://localhost:3000/more" className="bg-amber-200 text-black rounded cursor-pointer text-base no-underline relative top-[8px] p-2 ">Get Recipe.</a>
            </div>
            <div className="rounded-lg p-5 m-5 inline-block text-left max-w-80 bg-amber-300">
                <h3>Chicken Tikka Masala</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam est at odit impedit minima illum voluptatum, eligendi molestias exercitationem architecto, mollitia, quod similique illo. Laboriosam culpa porro veniam</p>
                <a href="http://localhost:3000/more" className="bg-amber-200 text-black rounded cursor-pointer text-base no-underline relative top-[8px] p-2">Get Recipe.</a>
            </div>

            <div className="rounded-lg p-5 m-5 inline-block text-left bg-amber-300 max-w-80">
                <h3>Paneer Butter Masala</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem vel maxime tenetur reprehenderit corporis sunt distinctio cum aliquam itaque ipsa reiciendis, facere at ab consequatur nisi voluptas porro. Unde, libero.</p>
                <a href="http://localhost:3000/more" className="bg-amber-200 text-black rounded cursor-pointer text-base no-underline relative top-[8px] p-2">Get Recipe.</a>
            </div>
            <div className="rounded-lg p-5 m-5 inline-block text-left max-w-80 bg-amber-300">
                <h3>Korma</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ullam animi, eius perferendis esse enim at dolorem autem omnis veniam voluptatum fugit delectus dolorum ipsam. Ad reprehenderit repellendus ab corrupti.</p>
                <a href="http://localhost:3000/more" className="bg-amber-200 text-black rounded cursor-pointer text-base no-underline relative top-[8px] p-2">Get Recipe.</a>
            </div>

            <div className="rounded-lg p-5 m-5 inline-block text-left bg-amber-300 max-w-80">
                <h3>Masala Dosa</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non aspernatur perspiciatis veritatis illum eligendi distinctio, sapiente minima! Eum a esse reiciendis quam architecto. Maiores ea quo cumque deserunt voluptatum?</p>
                <a href="http://localhost:3000/more" className="bg-amber-200 text-black rounded cursor-pointer text-base no-underline relative top-[8px] p-2">Get Recipe.</a>
            </div>
            <div className="shadow-amber-300/30">
                <a  className="bg-amber-300 rounded cursor-pointer text-base no-underline relative top-[8px] p-2" href="http://localhost:3000/dishes">View All Dishes</a>
            </div>
        </div>
        <div className="rounded-lg p-5 m-5 inline-block text-left bg-amber-200 mt-6">
            <h2>Special Dishes</h2>

            <div className="max-w-full rounded-lg" id="specialDish1">
                <h3>Spicy Paneer Tikka</h3>
                <p>A special Indian appetizer with marinated and grilled paneer cubes.</p>
            </div>

            <div className="max-w-full rounded-lg" id="specialDish2">
                <h3>Tandoori Salmon</h3>
                <p>Grilled salmon marinated in tandoori spices for a flavorful experience.</p>
            </div>
        </div>
        <div className="text-white bg-black">
            <p>Contact us: techeydev007@gmail.com | Phone: (+91) 9746281784</p>
            <p>&copy; 2024 Restaurant Lister. All rights reserved.</p>
        </div>
        </section>
    )
}