import React from 'react';

const Post = ({user, page}) => {
    
    return (
        <ul className="list-group mb-4 ">
            {
                user.map(user =>(
                    <li key={user.id} className="list-group-item">
                        
                        <h4>name :<small>{user.first_name} {user.last_name}</small></h4>
                        <h5>Email :{user.email}</h5>
                    </li>
                ))
            }
        </ul>
    );
};

export default Post;