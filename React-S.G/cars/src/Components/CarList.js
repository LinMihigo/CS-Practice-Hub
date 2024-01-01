import { useDispatch, useSelector } from "react-redux"
import { removeCar } from "../Store";

export default function CarList() {
    const dispatch = useDispatch();

    //cars and name are destructured from the returned object.
    const { cars, name } = useSelector(({ form, cars: { data, searchTerm }}) => { //form and cars are state objects in the store. cars is further destructured to get data and searchTerm.
        const filteredCars = data.filter((car) => car.name.toLowerCase().includes(searchTerm.toLowerCase()));

        console.log(form)
        return { //this is the returned object.
            cars: filteredCars,
            name: form.name
        }
    })

    const handleCarDelete = (car) => {
        dispatch(removeCar(car.id));
    }

    const renderedCars = cars.map((car) => { //So here we are using cars: filteredCars
        const bold = name && car.name.toLowerCase().includes(name.toLowerCase());

        return (
        <div key={car.id} className={`panel ${bold && 'bold'}`}>
            <p>
                { car.name } - ${ car.cost }
            </p>
            <button 
                className="button is-danger" 
                onClick={() => handleCarDelete(car)}
            >
                Delete
            </button>
        </div>
        )
    })

    return (
        <div className="car-list">
            { renderedCars }
        </div>
    )
}