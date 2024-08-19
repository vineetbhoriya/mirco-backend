export const isValidPassword = (password: string): string | null => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  
    if (!passwordRegex.test(password)) {
      return "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.";
    }
  
    return null; 
  };
  

export const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };