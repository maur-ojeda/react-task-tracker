import PropTypes from 'prop-types';
import Button from './Button'


const Header = ({title, onAdd, showAdd}) => {




    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color={'green'} onClick={onAdd} text = { showAdd ? 'Close' : 'Add'}
            
            color={ showAdd ? 'Red' : 'green'}
            />
        </header>
    )
}
        // set default props
        Header.defaultProps = {
            title : "Task traker"
        }
        // set validate prosp types 
        Header.propTypes = {   
            title : PropTypes.string.isRequired
        }
      

export default Header
