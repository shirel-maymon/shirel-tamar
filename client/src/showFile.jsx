import React, { useEffect } from "react";

export default function showFile(props) {
  function handleShowContent() {
    useEffect(() => {
      getcontent();
    }, []);
    async function getcontent() {
      const url = `http://localhost:4001/home/${props.userName}`;
      let array = await GetRequest(url);
      console.log("array: ", array);
      if (array !== "something went wrong")
        setArrayFiles(await GetRequest(url));
      else {
        setError("error");
      }
    }
  }

  async function deleteContent(fileName) {
    try {
      const url = `http://localhost:4001/delete/${fileName}`;
      const response = await fetch(url, {
        method: "DELETE",
      });

      if (response.ok) {
        setArrayFiles((prevFiles) =>
          prevFiles.filter((file) => file !== fileName)
        );
        console.log('fileName: ', fileName);
      } else {
        setError("Failed to delete file");
      }
    } catch (err) {
      setError("error");
      console.error(err);
    }
  }
  return (
    <>
      <div>{props.file}</div>
      <button onClick={handleShowContent}>show content</button>
      <button onClick={() => deleteContent(file)}>Delete</button>
    </>
  );
}
