

const DynamiCPage = ({params, searchParams}) => {
    console.log(params, "params");
    console.log(searchParams, "searchParams");
    //serach params demo:  http://localhost:3000/products/3?category=laptop
    return (
        <div>
            <h1>DynamiCPage id: {params.productId}</h1>
        </div>
    );
};

export default DynamiCPage;