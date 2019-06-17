import React from "react";
import axios from "axios";
import "./blog.css";
import ReactDOM from "react-dom";

class BlogComp extends React.Component{
    constructor(){
        super();
        this.state = {
            posts: [],
            inputTitle: null,
            inputBody: null,
            btnPost: null,
            btnCancel: null,
            newPostTitle: null,
            newPostBody: null,
            createPost: <button className ="btn btn-success mg" onClick = {this.handleCreate}>Create Post</button>,
            btnSave: null,
            elTop: null,
            
        }
    }

    componentDidMount(){
        axios("https://jsonplaceholder.typicode.com/posts").then(res=>{
            console.log(res.data)
            this.setState({
                posts: res.data.slice(0,30)
            })
        })
    }

    handleCreate = () =>{
        this.setState({
            inputTitle: <input type = "text" placeholder = "Enter Title" className = "mg" onChange = {(e) => this.setState({
                newPostTitle: e.target.value
            })}></input>,
            inputBody: <textarea placeholder = "Enter Body" onChange = {(e) => this.setState({
                newPostBody: e.target.value
            })}></textarea>,
            btnPost: <button onClick = {this.handlePost} className = "btn btn-success mg">Post</button>,
            btnCancel: <button onClick = {this.handleCancel} className = "btn btn-danger mg">Cancel</button>,
            createPost: null
        })
    }

    handlePost = () =>{
        let items = this.state.posts;
        let arr = {title: this.state.newPostTitle, body: this.state.newPostBody};
        items.push(arr);
        this.setState({
            posts: items,
            inputTitle: null,
            inputBody: null,
            btnPost: null,
            btnCancel: null,
            createPost: <button className ="btn btn-success mg" onClick = {this.handleCreate}>Create Post</button>
        })
        axios.post("https://jsonplaceholder.typicode.com/posts",this.state.posts);
        setTimeout(function(){
            window.scrollTo(0,document.body.scrollHeight);
        },1)
    }

    handleCancel = () =>{
        this.setState({
            inputTitle: null,
            inputBody: null,
            btnPost: null,
            btnCancel: null,
            btnSave:null,
            createPost: <button className ="btn btn-success mg" onClick = {this.handleCreate}>Create Post</button>
        })
    }

    handleDelete (el) {
        let index = this.state.posts.indexOf(el);
        let items = this.state.posts;
        items.splice(index,1);
        this.setState({
            posts: items
        });
        axios.post("https://jsonplaceholder.typicode.com/posts",this.state.posts);
    };
    
    handleEdit (el,i){
        this.setState({
            inputTitle: <input type = "text" placeholder = "Enter Title" className = "mg" onChange = {(e) => this.setState({
                newPostTitle: e.target.value
            })}></input>,
            inputBody: <textarea placeholder = "Enter Body"  onChange = {(e) => this.setState({
                newPostBody: e.target.value
            })}></textarea>,
            createPost: null,
            btnCancel: <button onClick = {this.handleCancel} className = "btn btn-danger mg">Cancel</button>,
            btnSave: <button onClick = {() => this.handleSave(el)} className = "btn btn-success mg">Save</button>,
            elTop: ReactDOM.findDOMNode(this.refs[`the_btn${i}`]).getBoundingClientRect().top/2 + window.pageYOffset
        })
        window.scrollTo(0, 0);
    }

    handleSave (el){
        let items = this.state.posts;
        let index = this.state.posts.indexOf(el);
        let arr = {title: this.state.newPostTitle, body: this.state.newPostBody};
        items.splice(index,1,arr);
        this.setState({
            posts: items,
            inputTitle: null,
            inputBody: null,
            btnPost: null,
            btnCancel: null,
            btnSave:null,
            createPost: <button className ="btn btn-success mg" onClick = {this.handleCreate}>Create Post</button>
        })
        axios.post("https://jsonplaceholder.typicode.com/posts",this.state.posts);
        window.scrollTo(0, this.state.elTop);
        
    }
    

    render(){
        return(
            <div>
                <div className = "flexx">
                    {this.state.inputTitle}
                    {this.state.inputBody}
                </div>
                {this.state.btnPost}
                {this.state.btnSave}
                {this.state.btnCancel}
                {this.state.createPost}
                {this.state.posts.map((el, i )=> 
                    <div key = {i} className = "thumbnail">
                        <h2>{el.title}</h2>
                        <p>{el.body}</p>
                        <button ref = {`the_btn${i}`} className = "btn btn-primary mg" onClick = {() => this.handleEdit(el,i)}>Edit</button>
                        <button className = "btn btn-danger mg" onClick = {() => this.handleDelete(el)}>Delete</button>
                    </div>
                    
                )}
            </div>
        )
    }

}

export default BlogComp;