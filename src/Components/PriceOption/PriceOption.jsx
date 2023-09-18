import PropTypes from 'prop-types'
import Features from '../Features/Features';


const PriceOption = ({option}) => {
    const {name, price, features}=option
    return (
        <div className='bg-blue-300 rounded-lg p-4 flex flex-col text-black'>
           <h2 className='text-center'>
            <span className='text-7xl font-bold'>{price}</span>
            <span className='text-2xl'>/Per month</span>
           </h2>
           <h4 className='text-3xl text-center my-8'>
            {name}
           </h4>
           <div className='pl-6 space-y-2 flex-grow'>
           {
            features.map((feature, idx)=> <Features key={idx} feature={feature}></Features>)
           }
           </div>
           <button className='mt-12 bg-green-600 text-white p-3  rounded-xl hover:bg-green-900 w-full'>Buy Now</button>
        </div>
    );
};

PriceOption.propTypes={
    option:PropTypes.object
}

export default PriceOption;