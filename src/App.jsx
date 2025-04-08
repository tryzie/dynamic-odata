import DynamicTable from './DynamicTable';
import './style.css'

function App() {
    const columns = [
        { header: 'Username', accessor: 'UserName', type: 'string' },
        { header: 'First Name', accessor: 'FirstName', type: 'string' },
        { header: 'Last Name', accessor: 'LastName', type: 'string' },
        { header: 'Middle Name', accessor: 'MiddleName', type: 'string' },
        { header: 'Gender', accessor: 'Gender', type: 'string' },
        { header: 'Age', accessor: 'Age', type: 'number' },
    ];

    return (
        <div>
            <DynamicTable
                apiUrl="https://corsproxy.io/?http://services.odata.org/TripPinRESTierService/People"
                columns={columns}
            />
        </div>
    );
}

export default App;

