import React from 'react';
import Footer from '../Footer/Footer';
import './CookMaster.css'

const CookMaster = () => {
    return (

        <div>
            <div className='container'>
                <h1 className="mt-4 mb-4">World Class Chef Master</h1>
                <div className="row mt-3 mb-3 p-3 master-chef-card">
                    <div className="col-md-4">
                        <img className="img-fluid img-style" src="https://i.ibb.co/qMNfZJY/1.jpg" alt="" />
                        <br />
                        <a href="#">@goodappetite</a>
                        <br />
                        <a href="#">Melissa’s Recipe Box</a>
                    </div>
                    <div className="col-md-8 mt-3">
                        <h1>Melissa Clark</h1>
                        Melissa Clark has been a columnist for the Food section since 2007. She reports on trends, creates recipes and appears in videos linked to her column, A Good Appetite. She’s also written dozens of cookbooks. A native of Brooklyn, she knows where to find the best bagel.

                    </div>
                </div>
                <div className="row mt-3 mb-3 p-3 master-chef-card">
                    <div className="col-md-4">
                        <img className="img-fluid img-style" src="https://i.ibb.co/X7RQWRB/10586023-male-chef.jpg" alt="" />
                        <br />
                        <a href="#">@goodappetite</a>
                        <br />
                        <a href="#">Mr Robart Recipe Box</a>
                    </div>
                    <div className="col-md-8 mt-3">
                        <h1>Mr Robart</h1>
                        Melissa Clark has been a columnist for the Food section since 2007. She reports on trends, creates recipes and appears in videos linked to her column, A Good Appetite. She’s also written dozens of cookbooks. A native of Brooklyn, she knows where to find the best bagel.

                    </div>
                </div>
                <div className="row mt-3 mb-3 p-3 master-chef-card">
                    <div className="col-md-4">
                        <img className="img-fluid img-style" src="https://i.ibb.co/Dr1gNd2/be-a-great-chef.jpg" alt="" />
                        <br />
                        <a href="#">@goodappetite</a>
                        <br />
                        <a href="#">Alex Recipe Box</a>
                    </div>
                    <div className="col-md-8 mt-3">
                        <h1>Master Alex</h1>
                        Melissa Clark has been a columnist for the Food section since 2007. She reports on trends, creates recipes and appears in videos linked to her column, A Good Appetite. She’s also written dozens of cookbooks. A native of Brooklyn, she knows where to find the best bagel.

                    </div>
                </div>
                <div className="row mt-3 mb-3 p-3 master-chef-card">
                    <div className="col-md-4">
                        <img className="img-fluid img-style" src="https://i.ibb.co/gtpLQq3/female-chef-jpg-370x370-q85.jpg" alt="" />
                        <br />
                        <a href="#">@goodappetite</a>
                        <br />
                        <a href="#">Ms Sara Recipe Box</a>
                    </div>
                    <div className="col-md-8 mt-3">
                        <h1>Sara Clark</h1>
                        Melissa Clark has been a columnist for the Food section since 2007. She reports on trends, creates recipes and appears in videos linked to her column, A Good Appetite. She’s also written dozens of cookbooks. A native of Brooklyn, she knows where to find the best bagel.

                    </div>
                </div>

            </div>



            <Footer></Footer>
        </div>

    );
};

export default CookMaster;