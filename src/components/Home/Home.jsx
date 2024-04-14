import './Home.css';

function Home() {
    return (
        <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-md-12 col-lg-10">
                    <div className="row align-items-center">
                        <div className="col-md-6 mb-4 mb-md-0">
                            <img 
                                src="src\assets\images\istockphoto-1145183127-612x612.jpg" 
                                alt="homePage" 
                                className='img-fluid rounded-lg'  
                            />
                        </div>
                        <div className="col-md-6">
                            <div className='home_content'>
                                <div className='home_title'>Asso'S & Vous</div>
                                <div>
                                    Bienvenue Chez Asso's Et Vous, nous sommes là pour mettre en relation des associations et des bénévoles qui souhaitent contribuer à leur échelle à ces associations.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
