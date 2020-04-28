import React, { useState, useEffect, Link } from 'react';
import {
    getItem,
    setItem,
    removeItem,
    removeSessionItem,
    getSessionItem, setSessionItem
} from '../services/storage';
import { useHistory } from 'react-router-dom';






function Add() {
    
    const [title, setTitle] = useState(getSessionItem('title',""));
    const [content, setContent] = useState(getSessionItem('content',""));
    const [notes, setNotes] = useState([]);
    const history = useHistory();


    function onTitleChange(event) {
        setSessionItem('title', event.target.value);
        setTitle(event.target.value);
    }

    function onContentChange(event) {
        setSessionItem('content', event.target.value);
        setContent(event.target.value);
    }

    function onClear() {
        setTitle('');
        setContent('');
        removeSessionItem('title');
        removeSessionItem('content');
    }


    function onSubmit() {
        
        let new_notes = getItem('notes', []);
        new_notes.push({
            title: title,
            content: content
        });
        setNotes(new_notes);
        setItem('notes', new_notes);

       
        removeSessionItem('title');
        removeSessionItem('content');
        alert(" Title Added , thank you");
        history.push('/');
        
    }

    return (
        <div className="page">
            <h1>Add Title Here</h1>
            
            <input
                value={title}
                onChange={onTitleChange}
                placeholder="Title"
            /> <br />
            
            <textarea
                value={content}
                onChange={onContentChange}
                placeholder="Content" />
            <br />
            <button onClick={onSubmit}>  Submit </button><br/>
        </div>
            
    );
}

export default Add;