import React, { useState, useEffect } from 'react'
import { useParams, NavLink } from 'react-router-dom'
import axios from 'axios'

export const Single = () => {
    const params = useParams();
    const id = params.dobId;
    const [dob, setDob] = useState([]);
    const [isPending, setPending] = useState(false);

    useEffect(() => {
        setPending(true);
        axios.get(`http://localhost:3001/drums/${id}`)
        .then(response => {
            setDob(response.data);
            setPending(false);
        })
        .catch(error => {
            console.log(error);
        })
        .finally(() => {
            setPending(false);
        });
    }, [id]);

    return (
     <div className="p-5 m-auto text-center content bg-ivory">
        {isPending || !dob.id ? (
            <div className="spinner-border"></div>
        ) : (
            <div className="container"> {/* Bootstrap középre igazított tartalom, fix szélességi töréspontokkal */}

  <h2 className="mb-4"> {/* mb-4 = margin-bottom 4 egység (kb 1.5rem) */}
    Dob
  </h2>

  <div className="row g-4 justify-content-center"> 
      
      <div className="col-12 col-sm-10 col-md-8 col-lg-6">
        
        <div className="card shadow-lg">

           <div className="card-body text-center">
            {/* card-body = kártya tartalom része, automatikus padding */}

            <h5 className="card-title mb-3">
              {dob.name}
            </h5>
          
            <p className="card-text fs-5">
              Márka: <b>{dob.brand}</b>
            </p>
            
            <p className="card-text fs-5">
              Ár: <b>{dob.price} Ft</b>
            </p>

            <p className="card-text fs-5">
              Darabszám: {dob.quantity}
            </p>

          </div>

        </div>

      </div>
  </div>

</div>
        )
    }

     </div>)};
