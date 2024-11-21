import React, { useState } from 'react';

export default function ShowFile(props) {
  const [contentFile, setContentFile] = useState();
  const [err, setErr] = useState(null);
  const [contentClick, setContentClick] = useState(false);
  const [newFolderName, setNewFolderName] = useState('');

  const getcontent = async () => {
    try {
      const url = `http://localhost:4001/showFile/${props.userName}/${props.file}`;
      const response = await fetch(url);
      const text = await response.text();
      console.log('content: ', text);
      console.log('content type: ', typeof text);

      if (text !== 'something went wrong') {
        setContentFile(text);
        setContentClick(true);
      } else {
        setErr('Error fetching content');
      }
    } catch (error) {
      setErr('Error fetching content');
      console.error(error);
    }
  };

  const deleteContent = async () => {
    try {
      const url = `http://localhost:4001/delete/${props.file}`;
      const response = await fetch(url, {
        method: 'DELETE',
      });

      if (response.ok) {
        console.log('File deleted:', props.file);
        setContentFile(null);
        setContentClick(false);
      } else {
        setErr('Failed to delete file');
      }
    } catch (error) {
      setErr('Error deleting file');
      console.error(error);
    }
  };

  const renameFolder = async () => {
    try {
      const url = `http://localhost:4001/renameFolder/${props.file}`;
      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ newFolderName }),
      });

      if (response.ok) {
        console.log('Folder renamed to:', newFolderName);
        setNewFolderName('');
      } else {
        setErr('Failed to rename folder');
      }
    } catch (error) {
      setErr('Error renaming folder');
      console.error(error);
    }
  };

  return (
    <>
      <div>{props.file}</div>

      <div>
        <input
          type="text"
          value={newFolderName}
          onChange={(e) => setNewFolderName(e.target.value)}
          placeholder="Enter new folder name"
        />
        <button onClick={renameFolder}>Rename Folder</button>
      </div>

      <button onClick={getcontent}>Show Content</button>

      {contentClick && (
        <>
          {err ? (
            <div>{err}</div>
          ) : (
            <>
              <div>{contentFile}</div>
              <button onClick={deleteContent}>Delete</button>
            </>
          )}
        </>
      )}
    </>
  );
}
