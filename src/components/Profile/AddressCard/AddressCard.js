import React, {useEffect, useState} from 'react';
import AddressMap from "../../Maps/AddressMap/AddressMap";
import "./AddressCard.css"


const AddressCard = (props) => {
    const [address, setAddress] = useState({
        name: "",
        number: "",
        municipality: ""
    });

    useEffect(() => {
        if (props.address) {
            setAddress({
                ...address,
                name: props.address.street,
                number: props.address.number,
                municipality: props.address.municipality
            })
        }
    }, [props])

    return (
        <React.Fragment>
            <div className="row mb-5">
                <div className="col-md-6 col-sm-12">
                    <AddressMap location={props.address.locationDto}/>
                </div>

                <div className="col-md-6 col-sm-12">
                    <div className="row mb-2">
                        <div className="col-md-7 col-sm-12 addressInput">
                            <input className="form-control"
                                   onChange={(event) => setAddress({...address, name: event.target.value})}
                                   value={address.name} placeholder="Address" type="text"/>
                        </div>

                        <div className="col-md-5 col-sm-12">
                            <input className="form-control"
                                   onChange={(event) => setAddress({...address, number: event.target.value})}
                                   value={address.number} placeholder="Number" type="text"/>
                        </div>
                    </div>
                    <div>
                        <select className="custom-select"
                                onChange={(event) => setAddress({...address, municipality: event.target.value})}
                                value={address.municipality}>
                            <option value="CENTAR">Centar</option>
                            <option value="AERODROM">Aerodrom</option>
                            <option value="BUTEL">Butel</option>
                            <option value="GJORCE_PETROV">Gjorce Petrov</option>
                            <option value="KISELA_VODA">Kisela Voda</option>
                            <option value="CHAIR">Chair</option>
                            <option value="KARPOSH">Karpos</option>
                            <option value="CHENTO">Chento</option>
                        </select>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default AddressCard
