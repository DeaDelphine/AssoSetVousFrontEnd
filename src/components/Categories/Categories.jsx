/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from 'react';
import useFetch from '../../hooks/useFetch';
import { Link, NavLink } from 'react-router-dom';
import '../Categories/Categories.css';


function Categories() {
    const [categories, setCategories] = useState([]);
    const [error, setError] = useState(null);
useEffect(() => {
        const fetchCategories = async () => {
            try {
                const data = await useFetch('GET', '/api/categories');
                setCategories(data);
            } catch (err) {
                setError(err);
                
            }
        };

        fetchCategories();
    }, []);

    

  return (
     <div className="container my-5">
          <div className="row justify-content-center">
              <div className='title_page text-center'>
                  Nos catégories
              </div>
                {categories.map((category, index) => (
                    <div key={index} className="col-md-4 mb-4">
                        <div className="position-relative">
                            <NavLink  to={`/associations/category/${category.id}`} state={{ from: category.id, categoryName: category.name }}><img src={category.categoryImage} alt={category.name} className="img-fluid mb-2 opacity-50 image-hover category-image" /></NavLink>
                            <div className="position-absolute top-50 start-50 translate-middle text-white fs-3 fw-bold">
                                    <div>{category.name}</div>
                                </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Categories