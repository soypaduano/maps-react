const callApi = async () => {
    const response = await fetch('http://localhost:4000/app/getAllElements');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
};

export default callApi;