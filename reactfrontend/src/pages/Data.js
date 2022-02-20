import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import swal from 'sweetalert';
import axios from 'axios';

// https://www.youtube.com/watch?v=NidmTs2xZaE

class Data extends Component {

    state = {
        datas: [],
        loading: true,
    }

    async componentDidMount() {
        const res = await axios.get('http://127.0.0.1:8000/api/datas');
        // console.log(res);
        if(res.data.status === 200) {
            this.setState({
                datas: res.data.datas,
                loading: false,
            });
        }
    }

    daleteData = async (e, id) => {
        const thidClickedFunda = e.currentTarget;
        // thidClickedFunda.innerText = "Deleting";

        const res = await axios.delete(`http://127.0.0.1:8000/api/delete-data/${id}`);
        if(res.data.status === 200) {
            thidClickedFunda.closest("tr").remove();

            // console.log(res.data.message);
            swal({
                title: "Deleted!",
                text: res.data.message,
                icon: "success",
                button: "Ok!",
            });
        }
    }

    render() {

        var data_HTMLTABLE = "";

        if(this.state.loading) {
            data_HTMLTABLE = <tr><td colSpan="4"> <h2>Loading...</h2> </td></tr>
        }
        else {
            data_HTMLTABLE =
            this.state.datas.map( (item) => {
                return (
                    <tr key={item.id}>
                        <td>{item.title}</td>
                        <td>{item.detail}</td>
                        <td>
                            <Link to={`edit-data/${item.id}`} className="btn btn-success btn-sm">Edit</Link>
                        </td>
                        <td>
                            <button type="button" onClick={(e) => this.daleteData(e, item.id)} className="btn btn-danger btn-sm">Delete</button>
                        </td>
                    </tr>
                );
            });
        }

        return (
            <div className="container">
                <div className="row"> 
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                 <h4>Data
                                    <Link to={'add-data'} className="btn btn-primary btn-sm float-end"> Add Data </Link>
                                 </h4>
                            </div>
                            <div className="card-body">
                                <table className="table table-bordered table-striped">
                                    <thead>
                                        <tr>
                                            <th>Title</th>
                                            <th>Detail</th>
                                            <th>Edit</th>
                                            <th>Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data_HTMLTABLE}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Data;