// UseValidateToken.js
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const UseValidateToken = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const validateSession = async () => {
            const token = localStorage.getItem('userToken');
            if (!token) {
                navigate('/login');
                return;
            }

            const validationUrl = 'https://localhost:7238/authentication/validateToken';
            try {
                const response = await fetch(validationUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`,
                    },
                });
                const data = await response.json();
                if (!response.ok || !data.isValid) {
                    throw new Error('Session is not valid');
                }
                // If needed, perform actions after successful validation here
            } catch (error) {
                console.error(error);
                navigate('/login');
            }
        };

        validateSession();
    }, [navigate]); // Adding navigate as a dependency
};

export default UseValidateToken;
