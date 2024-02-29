import React from 'react'; // Removed {useState} because it's not used
import '../../components/Styles.css';
import LeftNav from '../LeftNav/LeftNav';
import RequestWorkersStoreKeeper from '../WorkersManagement/WorkersManagement';
import CreateTool from './CreateTool'
import Header from '../Header/HeaderIconos';
import Footer from '../Footer/Footer';
import Gtool from './Gtool'

function ToolManagement() {
    return (
        <div>
            <Header></Header>
            <div className='main-container'>
                <LeftNav></LeftNav>
                <div className='flex-column-a'>
                    {/*<CreateTool></CreateTool>*/}
                    <Gtool></Gtool>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default ToolManagement;