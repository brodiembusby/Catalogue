import React from 'react';

const styles = {
    container: {
        textAlign: 'center'
    },

};
const NotFoundPage = () => {
    return (
        <div style ={styles.container}>
            <h1 >Not Found</h1>
            <p >This page doesn't exist. Sorry</p>
        </div>
    );
}

export default NotFoundPage;
