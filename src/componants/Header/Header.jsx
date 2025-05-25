import backgroundImage from '../../assets/img.jpg'
const Header = () => {
    return (
        <div
            className="hero min-h-screen my-10 rounded-2xl"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}>
            
            <div className="hero-content text-neutral-content text-center">
                <div className="mx-50">
                    <h1 className="mb-5 text-6xl font-bold">Discover an exceptional cooking class tailored for you!</h1>
                    <p className="mb-5 text-gray-400 text-2xl">
                        Discover delicious recipes with calorie counts. Eat smart, stay fit, and enjoy every bite!
                    </p>
                    <div className='flex gap-4 justify-center'>
                        <button className="btn  bg-emerald-400 border-none">Get Started</button>
                        <button className="btn btn-ghost border-gray-400 text-gray-400">Our Feedback</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
