import React from 'react';
import { useParams } from 'react-router-dom';

const UserEdit = () => {
    let params = useParams();
    let slug = params.slug
    console.log(slug);
    
    
    return (
    

        <div className='UserEdit'>
            Edit user

        </div>
    );
};

export default UserEdit;