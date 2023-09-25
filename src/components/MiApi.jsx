import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";


const MiApi = (props) => {
    const [dataApi, setDataApi] = useState([]);

    useEffect(() => {
        getDataApi();
    }, []);
    const getDataApi = async () => {
        const url = 'https://api.victorsanmartin.com/feriados/en.json';
        try {
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            setDataApi(data.data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="feriados">
            <div className="list">
                <Table striped bordered hover responsive className="text-bg-light mt-3">
                    <thead>
                        <tr>
                            <th className="bg-secondary text-light fs-5 text-center" onClick={() => ("title")}>Nombre</th>
                            <th className="bg-secondary text-light fs-5 text-center" onClick={() => ('date')}>Fecha</th>
                            <th className="bg-secondary text-light fs-5 text-center" onClick={() => ('extra')}>Tipo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.buscarPor === '' ? (
                            dataApi.map((feriado) => (
                                <tr key={feriado.index}>
                                    <td>{feriado.title}</td>
                                    <td>{feriado.date.split("-")[2] + "/" + feriado.date.split("-")[1] + "/" + feriado.date.split("-")[0]}</td>
                                    <td>{feriado.extra}</td>
                                </tr>
                            )
                            )
                        ) : (
                            dataApi
                                .filter((feriado) =>
                                    feriado.title
                                        .toLowerCase()
                                        .includes(props.buscarPor.toLowerCase()) ||
                                    feriado.date
                                        .toLowerCase()
                                        .includes(props.buscarPor.toLowerCase()) ||
                                    feriado.extra
                                        .toLowerCase()
                                        .includes(props.buscarPor.toLowerCase())
                                )
                                .map((feriado) => (
                                    <tr key={feriado.index}>
                                        <td>{feriado.title}</td>
                                        <td>{feriado.date.split("-")[2] + "/" + feriado.date.split("-")[1] + "/" + feriado.date.split("-")[0]}</td>
                                        <td>{feriado.extra}</td>
                                    </tr>
                                ))
                        )}
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default MiApi;