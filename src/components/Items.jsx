import React from "react";

function Items(props){
    console.log(props)
    return(
        <div>
            <table>
                <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Boletos disponibles</th>
                </tr>
                </thead>
                <tbody>
                {
                    // eslint-disable-next-line react/prop-types
                    props.itemsData.data?.length > 0
                    // eslint-disable-next-line react/prop-types
                    ? props.itemsData.data.map((movie, index) => (<tr key={index}><td>{movie.brand}</td> <td>{movie.category}</td></tr>) )
                    : <tr><td>No hay películas en la Cartelera</td></tr>
                }
                </tbody>
            </table>
        </div>
    );
}

export default Items;
