import React, {Component} from 'react';
import {Link, useHistory } from 'react-router-dom';
import swal from 'sweetalert';
import axios from 'axios';

class AddData extends Component {

    state = {
        title: '',
        detail: '',
        error_list: [],
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    saveData = async (e) => {
        e.preventDefault();

        const res = await axios.post('http://127.0.0.1:8000/api/add-data', this.state);
        if(res.data.status === 200) {
            // console.log(res.data.message);
            swal({
                title: "Success!",
                text: res.data.message,
                icon: "success",
                button: "Ok!",
            });

            document.location.href = "http://localhost:3000/admin/";

            this.setState({
                title: '',
                detail: '',
            });
        } else {
            this.setState({
                error_list: res.data.validate_err,
            });
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row"> 
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                 <h4>Add Data
                                    <Link to={'/admin'} className="btn btn-primary btn-sm float-end"> BACK </Link>
                                 </h4>
                            </div>
                            <div className="card-body">
                                <form onSubmit={this.saveData}>
                                    <div className="form-group mb-3">
                                        <label>Title Name</label>
                                        <input type="text" name="title" onChange={this.handleInput} value={this.state.title} className="form-control" />
                                        <span className="text-danger">{this.state.error_list.title}</span>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Details</label>
                                        <input type="text" name="detail" onChange={this.handleInput} value={this.state.detail} className="form-control" />
                                        <span className="text-danger">{this.state.error_list.detail}</span>
                                    </div>
                                    <div className="form-group mb-3">
                                        <button type="submit" className="btn btn-primary">Save Data</button>
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

export default AddData;