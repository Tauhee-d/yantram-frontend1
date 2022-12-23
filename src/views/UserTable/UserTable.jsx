import React, { useState } from 'react'
import './UserTable.css'
import { NavLink } from "react-router-dom";
import { Link } from 'react-router-dom';
import UserDetail from 'views/UserDetail/UserDetail';




const UserData = [
    { userId: "1", name: "xyz", gender: "male", weight: "44", age: "12", addedOn: "11:00" },
    { userId: '2', name: 'abc', gender: 'female', weight: '44', age: "12", addedOn: '12:00' },
    { userId: '3', name: 'xyz', gender: 'male', weight: '44', age: "12", addedOn: '01:00' },
    { userId: '4', name: 'abc', gender: 'female', weight: '44', age: "12", addedOn: '02:00' },
    { userId: '5', name: 'xyz', gender: 'male', weight: '44', age: "12", addedOn: '03:00' },

]
const Header = () => {
    return (
        <tr className='Heading' >
            <th>UserId</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Weight</th>
            <th>Age</th>
            <th>AddedOn</th>

        </tr>
    )
}
const Row = (props) => {
    const { userId, name, gender, weight, age, addedOn } = props
    return (
        // <Link to='../UserDetail/UserDetail.jsx'> <tr>
        <tr>


            <td className='tabledata'><Link to='./UserDetail'  >{name}</Link></td>
            <td className='tabledata'><Link to='./UserDetail'  >{userId}</Link></td>
            <td className='tabledata'><Link to='./UserDetail'  >{gender}</Link></td>
            <td className='tabledata'><Link to='./UserDetail'  >{weight}</Link></td>
            <td className='tabledata'><Link to='./UserDetail'  >{age}</Link></td>
            <td className='tabledata'><Link to='./UserDetail'  >{addedOn}</Link></td>



            {/* <td>{userId}</td>
            <td>{name}</td>
            <td>{gender}</td>
            <td>{weight}</td>
            <td>{age}</td>
            <td>{addedOn}</td> */}
        </tr>
        // </tr></Link>
    )
}
const Table = (props) => {
    const { data } = props
    console.log(data);
    return (
        <table class="table table-hover">
            <tbody>
                <Header />
                {data.map(row =>
                    <Row userId={row.userId} name={row.name} gender={row.gender}
                        weight={row.weight} age={row.gender} addedOn={row.addedOn} />
                    // <Row userId={row.userId} />
                )}
            </tbody>
        </table>
    )
}

function UserTable() {
    const [rows, setRows] = useState(UserData)
    return (
        <>

        <div className='UserTable'>
           
            <div className="flexRight">
            
            <h4>UserTAble</h4>
            <Table data={rows} />

        </div>
        </div>
        </>

    )
}

export default UserTable