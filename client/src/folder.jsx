

import React, { useState, useEffect } from 'react'
import GetRequest from './GetRequest';
import ShowFile from './ShowFile';
function Folder(props) {
    console.log('props: ', props);

    const [arrayFiles, setArrayFiles] = useState([])
    const [error, setError] = useState(null)
    const [showfile, setShowfile] = useState(false)

    useEffect(() => {
        getFiles()
    }, [])
    async function getFiles() {
        const url = `http://localhost:4001/showFolder/${props.userName}/${props.folder}`
        let array = await GetRequest(url)
        console.log('array: ', array);
        if (array !== 'something went wrong')
            setArrayFiles(await GetRequest(url))
        else {
            setError("error")
        }
    }

    return (
        <>
            <div>{props.folder}</div>
            <button onClick={() => setShowfile(true)}>show files</button>
            {showfile &&
                <div id='container'>{Array.isArray(arrayFiles) && arrayFiles.map((file, i) => (<ShowFile i={i} setArrayFiles={setArrayFiles} folder={props.folder} arrayFiles={arrayFiles} userName={props.userName} file={file} />))}  </div>
            } </>)
}
export default Folder;

