import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';
const PriceOption = ({ option }) => {
    const { name, price, features } = option;
    return (
        <div className='bg-yellow-100 rounded-xl  p-4 flex flex-col'>
            <h2 className='text-center'>
                <span className='text-7xl'>{price}</span>
                <span className='text-2xl'>/Mon</span>
            </h2>
            <h4 className='text-3xl text-center my-8'>{name}</h4>
            <div className='pl-6 flex-grow'>
                {
                    features.map((feature, idx) => <Feature feature={feature} key={idx}></Feature>)
                }
            </div>
            <button className='mt-12 w-full bg-blue-400 rounded-lg py-2 font-semibold hover:bg-fuchsia-400'>Buy Now</button>
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object
}

export default PriceOption;