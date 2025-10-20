import React, { use } from 'react';
import { AuthContext } from '../context/AuthContext/AuthContext';

const About = () => {
     const authInfo = use(AuthContext)
     console.log(authInfo)
    return (
       

        <div>
            about
        </div>
    );
};

export default About;