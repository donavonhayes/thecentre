// ! https://stackoverflow.com/questions/64566405/react-router-dom-v6-usenavigate-passing-value-to-another-component
import React, { useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import Update from './update';

export default function Read() {
    const [ APIData, setAPIData ] = useState([])
    useEffect(() => {
        axios.get(`https://631cbcad1b470e0e120961c6.mockapi.io/PromineoTechApi/fakeData`)
            .then((response) => {
                setAPIData(response.data)
                console.log('Here is APIData', response.data)
            })
    }, []) 

    const setData = (data) => {
        let { id, firstName, lastName, checkbox } = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('First Name', firstName);
        localStorage.setItem('Last Name', lastName);
        localStorage.setItem('Checkbox Value', checkbox)
        console.log(data);
    }

    let navigate = useNavigate();

    const handleClick = (data) => {
        setData(data)
        navigate('/update');
    }

    const getData = () => {
        axios.get(`https://631cbcad1b470e0e120961c6.mockapi.io/PromineoTechApi/fakeData`)
            .then((getData) => {
                setAPIData(getData.data);
            }).then(() => {
                navigate('/read')
            })
    }


    const onDelete = async (id) => {
        try {
            const resp = await fetch(`https://631cbcad1b470e0e120961c6.mockapi.io/PromineoTechApi/fakeData/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            navigate('/')
            console.log('Delete resp:', resp)
            return await resp.json();            
        } catch (err) {
            console.log(
                "Oops, looks like onDelete had an issue.", err);
        }
        getData();
    };
    

  return (
    <>
        <Table striped bordered hover variant="light">
            <thead>
                <tr>
                    <th>Firs Name</th>
                    <th>Last Name</th>
                    <th>Checked</th>
                    <th>Update</th>
                    <th>Delete</th>
                </tr>
            </thead>

            <tbody>
                {APIData.map((data, index) => {
                    return(
                    <tr key={index}>
                        <td>{data.firstName}</td>
                        <td>{data.lastName}</td>
                        <td>{data.checkbox ? 'Checked' : 'Unchecked'}</td>
                        <td>
                            <Button variant='warning' onClick={() => handleClick(data)}>Update</Button>
                        </td>
                        <td>
                            <Button variant='danger' onClick={() => onDelete(data.id)}>Delete</Button>
                        </td>
                    </tr>
                )})}          
            </tbody>
        </Table>
    </>
  )
}


    // const getData = async () => {
    //     try {
    //         const resp = await axios.get(`https://631cbcad1b470e0e120961c6.mockapi.io/PromineoTechApi/fakeData`);
    //         console.log('resp in getData:', resp.data);
    //         // const data = await resp.json();
    //         // return data;
    //     } catch (err) {
    //         console.log('Oops, looks like getData had an issue.', err)
    //     }
    // }


    // const onDelete = async (id) => {
    //     try {
    //         const resp = await axios.delete(`https://631cbcad1b470e0e120961c6.mockapi.io/PromineoTechApi/fakeData/${id}`)
    //         console.log(resp.data)
    //         await getData();
    //     } catch (err) {
    //         console.log('Oops, looks like onDelete had an issue.', err);
    //     }
    // }