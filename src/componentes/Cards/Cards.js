import React from 'react'
import maggie from '../../assets/img/maggie.jpg'
import homero from '../../assets/img/homer.jpg'
import bart from '../../assets/img/bart.jpg'
import './Cards.css';

const cards = () => {
    return (
        <div className='contenedorCards'>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div className="card h-100">
                        <img src={maggie} className="card-img-top" alt="Maggie" />
                        <div className="card-body">
                            <h5 className="card-title">Maggie</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <a href="index.html" class="btn btn-danger">Leer Mas</a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src={homero} className="card-img-top" alt="Homero" />
                        <div className="card-body">
                            <h5 className="card-title">Homero</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <a href="index.html" class="btn btn-danger">Leer Mas</a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src={bart} className="card-img-top" alt="Bart" />
                        <div className="card-body">
                            <h5 className="card-title">Bart</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <a href="index.html" class="btn btn-danger">Leer Mas</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default cards