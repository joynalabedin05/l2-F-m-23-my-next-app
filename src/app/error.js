"use client"

const ErrorPage = ({error, reset}) => {
    // console.log(error);
    return (
        <div>
            <h1 className="text-center text-3xl text-red-500">something went wrong!</h1>
            <h1 className="text-center text-3xl text-red-500">{error.message}</h1>
            <div className="text-center">
                <button className="btn btn-outline btn-primary m-10" onClick={()=>reset()}>Try Again</button>
            </div>

        </div>
    );
};

export default ErrorPage;