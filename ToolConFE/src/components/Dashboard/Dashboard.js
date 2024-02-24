import React from 'react'; // Removed {useState} because it's not used
import '../../components/Styles.css';
import LeftNav from '../LeftNav/LeftNav';
import RequestToolStoreKeeper from '../ToolManagement/RequestToolStoreKeeper';
import RequestWorkersStoreKeeper from '../WorkersManagement/WorkersManagement';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Dashboard() {
    return (
        <>
            <Header></Header>
            <div className='main-container'>
                <LeftNav></LeftNav>
                <div className='flex-column-a'>
                    <RequestToolStoreKeeper></RequestToolStoreKeeper>
                    <RequestWorkersStoreKeeper></RequestWorkersStoreKeeper>
                </div>
                <div className='div-top-car-rental'>
                    <div className='div-top-car-rental-1e'>
                        <span className='span-top-toolcon'>Top 5 ToolCon </span>
                        <div className='div-more'>
                            <div className='vuesax-linear-more' />
                        </div>
                    </div>
                    <div className='sport-car'>
                        <div className='sport-car-1f'>
                            <div className='mark-20' />
                            <span className='martillo'>Martillo</span>
                        </div>
                        <span className='text-22'>17</span>
                    </div>
                    <div className='suv'>
                        <div className='suv-21'>
                            <div className='mark-22' />
                            <span className='serrucho'>Serrucho</span>
                        </div>
                        <span className='text-24'>9</span>
                    </div>
                    <div className='coupe'>
                        <div className='coupe-23'>
                            <div className='mark-24' />
                            <span className='soldadura'>Soldadura</span>
                        </div>
                        <span className='text-26'>18</span>
                    </div>
                    <div className='hatchback'>
                        <div className='hatchback-25'>
                            <div className='mark-26' />
                            <span className='llave-inglesa'>Llave inglesa</span>
                        </div>
                        <span className='text-28'>12</span>
                    </div>
                    <div className='mpv'>
                        <div className='mpv-27'>
                            <div className='mark-28' />
                            <span className='pie-de-rey'>Pie de Rey</span>
                        </div>
                        <span className='text-2a'>14</span>
                    </div>
                    <div className='chart' />
                    <div className='rental-car'>
                        <span className='text-2b'>70</span>
                        <span className='prestamos'>Prestamos</span>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
}

export default Dashboard;