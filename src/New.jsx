import { useNavigate } from 'react-router-dom'
import axios from 'axios'
export const New = () => {
    const navigate = useNavigate()
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post("http://localhost:3001/drums", {
            name: event.target.name.value,
            brand: event.target.brand.value,
            price: Number(event.target.price.value),
            quantity: Number(event.target.quantity.value)
        })
        .then(() =>{
            navigate("/");
        })
        .catch(error => {
            console.log(error);
        })
    }
    return (
        <div className="p-5 content bg-whitesmoke text-center">
            <h2>Uj dob</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group row pb-3">
                    <label className="col-sm-3 col-form-label">Dob neve:</label>
                    <div className="col-sm-9">
                        <input type="text" name="name" className="form-control" />
                    </div>
                </div>
                <div className="form-group row pb-3">
                    <label className="col-sm-3 col-form-label">Márka:</label>
                    <div className="col-sm-9">
                        <input type="text" name="brand" className="form-control" />
                    </div>
                </div>
                <div className="form-group row pb-3">
                    <label className="col-sm-3 col-form-label">Ár:</label>
                    <div className="col-sm-9">
                        <input type="text" name="price" className="form-control" />
                    </div>
                </div>
                <div className="form-group row pb-3">
                    <label className="col-sm-3 col-form-label">Darabszám:</label>
                    <div className="col-sm-9">
                        <input type="text" name="quantity" className="form-control" />
                    </div>
                </div>
                <button type="submit" className="btn btn-success">Küldés</button>
            </form>
        </div>
    )
}
