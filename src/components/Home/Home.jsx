
import './Home.css';
import Categories from '../Categories/Categories';


function Home() {
    const handleScroll = () => {
        const categoriesSection = document.getElementById('categoriesSection');
        if (categoriesSection) {
            categoriesSection.scrollIntoView({ behavior: 'smooth' });
        }
    };
       

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
                                <div className='home_title'><img src="src\assets\images\Logo-Photoroom.png" alt="Logo Asso's" className="img-fluid" id="logo_home"/>Asso'S & Vous</div>
                                <div>
                                    Bienvenue Chez Asso's Et Vous, nous sommes là pour mettre en relation des associations et des bénévoles qui souhaitent contribuer à leur échelle à ces associations.
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center mt-5">
                <div className="col-md-12 text-center">
                    <i className="bi bi-chevron-double-down fa-5x" style={{'color': '#438FA4'}} onClick={handleScroll}></i>
            </div>
        </div>
            <div  id="categoriesSection" className="mt-5">
                <Categories />
            </div>
        </div>
    );
}

export default Home;
