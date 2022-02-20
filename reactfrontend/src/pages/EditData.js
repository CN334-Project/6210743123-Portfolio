import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import swal from 'sweetalert';
import axios from 'axios';

class EditData extends Component {

    state = {
        title: '',
        detail: '',
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    async componentDidMount() {
        const queryString = window.location.pathname;
        // console.log(queryString);
        const id = queryString.split("/");
        // console.log(id[2]);
        const res = await axios.get(`http://127.0.0.1:8000/api/edit-data/${id[3]}`);
        if(res.data.status === 200) {
            this.setState({
                title: res.data.data.title,
                detail: res.data.data.detail,
            });
        }
    }

    updateData = async (e) => {
        e.preventDefault();
        
        document.getElementById('updatebtn').disabled = true;
        document.getElementById('updatebtn').innerText = "Updating";

        const queryString = window.location.pathname;
        const id = queryString.split("/");

        const res = await axios.put(`http://127.0.0.1:8000/api/update-data/${id[3]}`, this.state);
        if(res.data.status === 200) {
            // console.log(res.data.message);
            swal({
                title: "Updated!",
                text: res.data.message,
                icon: "success",
                button: "Ok!",
            });

            document.location.href = "http://localhost:3000/admin/";

            document.getElementById('updatebtn').disabled = false;
            document.getElementById('updatebtn').innerText = "Update Data";
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row"> 
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                 <h4>Edit Data
                                    <Link to={'/admin'} className="btn btn-primary btn-sm float-end"> BACK </Link>
                                 </h4>
                            </div>
                            <div className="card-body">
                                <form onSubmit={this.updateData}>
                                    <div className="form-group mb-3">
                                        <label>Title Name</label>
                                        <input type="text" name="title" onChange={this.handleInput} value={this.state.title} className="form-control" />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Details</label>
                                        <input type="text" name="detail" onChange={this.handleInput} value={this.state.detail} className="form-control" />
                                    </div>
                                    <div className="form-group mb-3">
                                        <button type="submit" id="updatebtn" className="btn btn-primary">Update Data</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default EditData;