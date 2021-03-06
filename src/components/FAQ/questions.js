import React, {useEffect, useState} from 'react';
import ReactMarkdown from 'react-markdown';
import firebase from "../Firebase/firebase";

const db = firebase.firestore();

const Question = () => {

    const [snap, setSnap] = useState();

    async function fetchData() {
        await db.collection('content').get().then(snapshot => {
            const items = snapshot.docs.map(doc => {
                return doc.data().input
            });
            setSnap(items)
        })
    }

    useEffect(() => {
        fetchData();
    }, []);


    if (snap) {
        return (
            snap.map(input => {
                return <ReactMarkdown source={input} escapeHtml={false}/>
            })
        )

    } else {
        return <p>Loading</p>
    }
};

export default Question;
