let fetchCall = async (route) => {
    const response = await fetch(route);
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
};

let fetchPost = async (route) => {

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: 'React POST Request Example' })
    };

    const response = await fetch(route, requestOptions);
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
};




export { fetchCall, fetchPost };