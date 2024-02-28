export const UseLogin = async (username, password) => {
    const loginUrl = 'https://localhost:7238/login';
  
    try {
      const response = await fetch(loginUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
  
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.indexOf("application/json") !== -1) {
        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.message || 'Login failed');
        }
        return { success: true, data: data };
      } else {
        const textData = await response.text();
        throw new Error(textData || 'Login failed');
      }
    } catch (error) {
      return { success: false, error: error.message };
    }
  };
  