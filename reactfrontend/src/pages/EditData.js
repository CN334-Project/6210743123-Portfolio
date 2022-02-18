import React, {Component} from 'react';
import {Link} from 'react-router-dom';
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
        // const aid = useParams();
        // console.log(id); 51.17 https://www.youtube.com/watch?v=NidmTs2xZaE
    }

    updateData = async (e) => {
        e.preventDefault();

        // const res = await axios.post('http://127.0.0.1:8000/api/add-data', this.state);
        // if(res.data.status === 200) {
        //     console.log(res.data.message);
        //     this.setState({
        //         title: '',
        //         detail: '',
        //     });
        // }
    }

    render() {
        return (
            <div className="container">
                <div className="row"> 
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                 <h4>Edit Data
                                    <Link to={'/'} className="btn btn-primary btn-sm float-end"> BACK </Link>
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
                                        <button type="submit" className="btn btn-primary">Update Data</button>
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