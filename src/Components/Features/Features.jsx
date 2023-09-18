import PropTypes from 'prop-types'
import { AiOutlineCheckCircle } from 'react-icons/ai';

const Features = ({feature}) => {
    return (
        <div className=''>
            <p className='flex item-center  '><AiOutlineCheckCircle className='text-2xl text-green-700 mr-2'></AiOutlineCheckCircle>{feature}</p>
        </div>
    );
};


Features.propTypes={
    feature:PropTypes.string
}
export default Features;