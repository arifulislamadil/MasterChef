import React from 'react';
import Footer from '../Footer/Footer';
import './CookMaster.css'

const CookMaster = () => {
    return (
        <div className='container'>
            <h1>Hello I'm From Cook master</h1>
            <div className="row">
                <div className="d-flex">
                    <div className="col-md-4">
                        <img className="img-fluid img-style" src="https://i.ibb.co/qMNfZJY/1.jpg" alt="" />

                        <br />
                        <a href="#">@goodappetite</a>
                        <br />
                        <a href="#">Melissa’s Recipe Box</a>

                    </div>
                    <div className="col-md-8">
                        <h1>Melissa Clark</h1>
                        Melissa Clark has been a columnist for the Food section since 2007. She reports on trends, creates recipes and appears in videos linked to her column, A Good Appetite. She’s also written dozens of cookbooks. A native of Brooklyn, she knows where to find the best bagel.

                    </div>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default CookMaster;