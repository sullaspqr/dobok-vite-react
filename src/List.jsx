import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

export const List = () => {
    const [dobok, setDobok] = useState([])
    const [isFetchPending, setFetchPending] = useState(false);

    useEffect(() => {
        setFetchPending(true);
        axios.get('http://localhost:3001/drums')
        .then(response => {
            setDobok(response.data);
            setFetchPending(false);
        })
        .catch(error => {
            console.log(error);
        })
        .finally(() => {
            setFetchPending(false);
        });
    }, []);

    return (
     <div className="p-5 m-auto text-center content bg-ivory">
        {isFetchPending ? (
            <div className="spinner-border"></div>
        ) : (
            <div className="container"> {/* Bootstrap középre igazított tartalom, fix szélességi töréspontokkal */}

  <h2 className="mb-4"> {/* mb-4 = margin-bottom 4 egység (kb 1.5rem) */}
   Dobok
  </h2>

  <div className="row g-4"> 
    {/* row = Bootstrap grid sor */}
    {/* g-4 = gap (térköz) az oszlopok között, 4-es méret */}
    
    {dobokk.map((dob, index) => (
      
      <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={index}>
        {/* col-12 = mobilon teljes szélesség (1 kártya/sor) */}
        {/* col-sm-6 = kis kijelzőn (≥576px) 2 kártya/sor */}
        {/* col-md-4 = közepes kijelzőn (≥768px) 3 kártya/sor */}
        {/* col-lg-3 = nagy kijelzőn (≥992px) 4 kártya/sor */}

        <div className="card h-100 shadow-lg">
          {/* card = Bootstrap kártya komponens */}
          {/* h-100 = magasság 100%, minden kártya egyforma magas */}
          {/* shadow-sm = kis árnyék a kártya alatt */}
        <NavLink to={"/single/" + dob.id}>
          Egy dob részletei </NavLink>
          {/* card-img-top = kép a kártya tetején */}
          {/* p-3 = padding minden oldalon (kb 1rem) */}
          {/* objectFit: contain = kép torzítás nélkül belefér */}

          <div className="card-body">
            {/* card-body = kártya tartalom része, automatikus padding */}

            <h6 className="card-title">
              {dob.name}
            </h6>
            {/* card-title = kártya cím stílus */}

            <p className="card-text">
              Márka: <b>{dob.brand}</b>
            </p>
            {/* card-text = kártya szöveg formázás */}

            <p className="card-text">
              Ár: <b>{dob.price} Ft</b>
            </p>

            <p className="card-text">
              Darabszám: {dob.quantity}
            </p>

          </div>

        </div>

      </div>

    ))}
  </div>

</div>
        )
    }

     </div>)};
