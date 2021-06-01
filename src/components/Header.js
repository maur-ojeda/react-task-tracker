import PropTypes from 'prop-types';
import Button from './Button'


const Header = ({title}) => {

    const onClick = () => {
        alert('ok  desde header'); 
    }
    


    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button text={'Agregar'} color={'green'} onClick={onClick}/>
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
