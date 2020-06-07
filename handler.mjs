let i = 0;
const handlerRequest =  (req, res) => {
    i++;
    res.end(`Hello world ${i}!`)
};

export default handlerRequest;