import React from 'react';

const Warnings = () => {

    return (
        <>
            <div className="container-fluid d-flex flex-column justify-content-center align-items-center" style={{ marginTop: '10%' }} >
                <h1>Reached Warnings Limit</h1>
                <h6>You have exhausted your limit of warnings. Please contact the admin for further details</h6>
            </div>
        </>
    )

}

export default Warnings;