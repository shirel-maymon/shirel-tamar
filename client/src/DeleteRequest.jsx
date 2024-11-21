const DeleteRequest = async (url) => {
    try {
        const response = await fetch(url, {
            method: 'DELETE',
        });

        if (response.ok) {
            console.log("hhhh")
            return 'File deleted';

        } else {
            throw Error("something went wrong")
        }
    } catch (error) {

        return error;
    }
};

export default DeleteRequest