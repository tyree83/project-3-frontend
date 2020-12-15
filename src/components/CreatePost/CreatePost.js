import { Link } from 'react-router-dom'; 

import './CreatePost.css'


export default function CreatePost(props) {
    return (
        <main className='Page'>
            <div>
               <form onSubmit={props.handleSubmit}>
                    <fieldset>
                        <legend>What would you like to post?</legend>
                        <div className="form-group">
                            <div className="col-sm-12">
                                <input type='text' placeholder='let everybody know who is posting' name='whoPosted' value={props.posts.whoPosted} onChange={props.handleChange} required/>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-12">
                                <input type='date' placeholder='Todays Date' name='datePosted' value={props.posts.datePosted} onChange={props.handleChange} required/>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-12">
                                <input type='text' placeholder='Where are/were you' name='location' value={props.posts.location} onChange={props.handleChange} required/>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-12">
                                <input className="adjinput" type='text' placeholder='let people know how your day was' name='textPost' value={props.posts.texPost} onChange={props.handleChange} required/>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-12">
                                <input type='text' placeholder='upload avatar' name='imgURL' value={props.posts.imgURL} onChange={props.handleChange} required/>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-12 text-center">
                                <button className="btn btn-default">Add Post</button>&nbsp;&nbsp;
                                <Link to='/feed'>Cancel</Link>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </div>
        </main>
    )
}