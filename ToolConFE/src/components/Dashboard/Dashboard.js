import React from 'react'; // Removed {useState} because it's not used
import './tooltop5.css';
import RequestToolStoreKeeper from '../ToolManagement/RequestToolStoreKeeper';
import RequestWorkersStoreKeeper from '../WorkersManagement/RequestWorkersStoreKeeper';
import Header from '../Header/HeaderIconos';
import Footer from '../Footer/Footer';
import LeftNav from '../LeftNav/LeftNav';
import UseValidateToken from '../Api/token-api'

function Dashboard() {
    UseValidateToken(); //  This will now handle session validation
    return (
        <>  
            <Header></Header>
            <div className='main-container'>
                <LeftNav></LeftNav>
                <div className='flex-column-a'>
                    {/*Solicitud de herramientas*/}
                    <RequestToolStoreKeeper></RequestToolStoreKeeper>
                    {/* Logs */}
                    <RequestWorkersStoreKeeper></RequestWorkersStoreKeeper>
                </div>
                {/*Top 5 tools*/}
                <div className='div-top-car-rental'>
                    <div className='div-top-car-rental-1e'>
                        <span className='span-top-toolcon'>Top 5 ToolCon </span>
                        <div className='div-more'>
                            <div className='vuesax-linear-more' />
                        </div>
                    </div>
                    <div className='sportool spot-tool'>
                        <div className='spot-margin'>
                            <div className='mark-tool markcolor1' />
                            <span className='herramientatool'>Martillo</span>
                        </div>
                        <span className='cantidadtool'>17</span>
                    </div>
                    <div className='sportool spot-tool2'>
                        <div className='spot-margin'>
                            <div className='mark-tool markcolor2' />
                            <span className='herramientatool'>Serrucho</span>
                        </div>
                        <span className='cantidadtool'>9</span>
                    </div>
                    <div className='sportool spot-tool3'>
                        <div className='spot-margin'>
                            <div className='mark-tool markcolor3' />
                            <span className='herramientatool'>Soldadura</span>
                        </div>
                        <span className='cantidadtool'>18</span>
                    </div>
                    <div className='sportool spot-tool4'>
                        <div className='spot-margin'>
                            <div className='mark-tool markcolor4' />
                            <span className='herramientatool'>Llave inglesa</span>
                        </div>
                        <span className='cantidadtool'>12</span>
                    </div>
                    <div className='sportool spot-tool5'>
                        <div className='spot-margin'>
                            <div className='mark-tool markcolor5' />
                            <span className='herramientatool'>Pie de Rey</span>
                        </div>
                        <span className='cantidadtool'>14</span>
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