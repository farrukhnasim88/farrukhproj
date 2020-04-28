import React, { useEffect, useState } from 'react';
import Row from './row';
import {
    getItem,
    setItem,
    
} from '../services/storage';
import { useHistory } from 'react-router-dom';
import './home.css';
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';

function Home() {
    
    
    const [notes, setNotes] = useState([]);
    const history = useHistory();

    useEffect(() => {
       
        let storedNotes = getItem('notes', []);
        setNotes(storedNotes);
    }, []);


    function onDeleteRow(index) {
        let new_notes = Array.from(notes);
        new_notes.splice(index,1);
        setNotes(new_notes);
        setItem('notes', new_notes);

    }

    function renderNotes() {
        let renderNotes = [];
        notes.forEach((note, index) => {
            function onRowDelete() {
                onDeleteRow(index)
            }
            
            renderNotes.push(
                <Row index={index}
                    value={note.title + " , " + note.content}
                    
                    onDeleteRow={onRowDelete}
                    
                />
            );
        });
        return renderNotes;

    }
   
    return (
        <div>
            <div>
                {renderNotes()}
            </div>
             
            <AwesomeButton className="home-btn" href="/add" ripple="true" type="secondary" >
                Add Note
            </AwesomeButton>
        </div>
    );
}

export default Home;

