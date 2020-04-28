import React, { useState, useEffect } from 'react';
import {
    getItem,
    setItem,
} from '../services/storage';
import { Route, useHistory, useParams } from 'react-router-dom';


function Edit(props) {

    const params = useParams();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [notes, setNotes] = useState([]);
    const history = useHistory();
    


    useEffect(() => {
        
        let storedNotes = getItem('notes', []);
        let note = storedNotes[params.index];
       setTitle(note.title);
       setContent(note.content);
        setNotes(storedNotes);
    }, []);


    function onTitleChange(event) {
        setTitle(event.target.value);
        
    }

    function onContentChange(event) {
        setContent(event.target.value);
       
    }

    function onSubmit() {
        
        let new_note = getItem('notes', []);    
        new_note[params.index]= { title: title, content: content };
        //new_note[params.push].push({
        //    title: title,
        //    content: content
        //});
        setNotes(new_note);
        setItem('notes', new_note);
        history.push('/');

    }


    return (
        <div className="page">
           
            <h1>Edit Values Here</h1>
             
            
            <input
                value={title}
                onChange={onTitleChange}
                
            /> <br />
            
            <textarea
                value={content}
                onChange={onContentChange}/>
               <br/>
            <button onClick={onSubmit}>  Submit    </button>
            <br />
            
        </div>
    );
}

export default Edit;