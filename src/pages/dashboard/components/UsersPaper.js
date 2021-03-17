import React, {useEffect, useState} from "react";
import {DataGrid} from '@material-ui/data-grid';
import axios from "axios";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Username", width: 130 },
  { field: "website", headerName: "Website", width: 130 },
  { field: "catchphrase", headerName: "Catchphrase", width: 130 },
  //catchphrase
];

const UsersPaper = () => {
	const [users, setUsers] = useState([]);
	const USERS_ENPOINT = "https://jsonplaceholder.typicode.com/users";

	useEffect(() => {
		axios
      .get(USERS_ENPOINT)
      .then(({ data }) =>
        data.map(({ id, name, website, company }) => ({
          id,
          name,
          website,
          catchphrase: company.catchPhrase,
        }))
      )
      .then((usrs) => {
        setUsers(usrs);
      })
      .catch(console.error);
	}, [])

	return <DataGrid rows={users} columns={columns} pageSize={10} checkboxSelection
					 onSelectionChange={(selection) => {

					 }
	}/>
}

export default UsersPaper
