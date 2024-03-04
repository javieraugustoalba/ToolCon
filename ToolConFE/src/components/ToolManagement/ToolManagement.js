import React from 'react'; 
import '../../components/Styles.css';
import LeftNav from '../LeftNav/LeftNav';
import Header from '../Header/HeaderIconos';
import Footer from '../Footer/Footer';
import Gtool from './Gtool'
import UseValidateToken from '../Api/token-api'

function ToolManagement() {
    UseValidateToken(); //  This will now handle session validation
    return (
        <div>
            <Header></Header>
            <div className='main-container'>
                <LeftNav></LeftNav>
                <div className='flex-column-a'>
                    <Gtool></Gtool>       
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default ToolManagement;