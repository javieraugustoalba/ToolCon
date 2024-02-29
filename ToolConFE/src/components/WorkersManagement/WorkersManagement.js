
import React from 'react'; // Removed {useState} because it's not used
import '../../components/Styles.css';
import LeftNav from '../LeftNav/LeftNav';
import RequestWorkersStoreKeeper from '../WorkersManagement/WorkersManagement';
import Header from '../Header/HeaderIconos';
import Footer from '../Footer/Footer';
import Gwork from './Gwork'

function WorkersManagement() {
    return (
        <div>
            <Header></Header>
            <div className='main-container'>
                <LeftNav></LeftNav>
                <div className='flex-column-a'>
                    <Gwork></Gwork>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default WorkersManagement;