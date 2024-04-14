/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from 'react';
import useFetch from '../../hooks/useFetch';


function Categories() {
    const [categories, setCategories] = useState([]);
    const [error, setError] = useState(null);
useEffect(() => {
        const fetchCategories = async () => {
            try {
                const data = await useFetch('GET', '/categories/getAll');
                setCategories(data);
                console.log(data);
            } catch (err) {
                setError(err);
                
            }
        };

        fetchCategories();
    }, []);

    

  return (
    <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-md-10 col-lg-8">
                    <div className="row align-items-center">
                        {/* Afficher les catégories ici */}
                        <ul>
                            {categories.map((category, index) => (
                                <li key={index}>{category.name}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Categories