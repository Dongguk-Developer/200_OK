import PropTypes from 'prop-types';
import styles from './InputAge.module.css';

const InputAge = ({ ...rest }) => {
  return (
    <div>
      <input className={styles['input-age']} 
      type='number'
      placeholder='{placeholder}'
      // style = "text-align:right"
      {...rest}
      />
    </div>
  )
}

InputAge.propTypes = {
  children: PropTypes.node.isRequired,
  placeholder: PropTypes.string,
};

export default InputAge
