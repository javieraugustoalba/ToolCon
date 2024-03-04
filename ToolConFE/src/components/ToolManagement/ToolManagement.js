import React from 'react'; // Removed {useState} because it's not used
import '../../components/Styles.css';
import LeftNav from '../LeftNav/LeftNav';
import Header from '../Header/HeaderIconos';
import Footer from '../Footer/Footer';
import Gtool from './Gtool'
import UseValidateToken from '../Api/token-api'
import ModificarT from './ModificarT'

function ToolManagement() {
    UseValidateToken(); //  This will now handle session validation
    return (
        <div>
            <Header></Header>
            <div className='main-container'>
                <LeftNav></LeftNav>
                <div className='flex-column-a'>
                    <Gtool></Gtool>       
                    {/*<CreateTool></CreateTool>*/}
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default ToolManagement;