


const validateEmail = (Email) => {
  if (!Email) return 'Email is required';
  if (!isvalidEmail))
    return 'Invalid email format';
  return null;
};




const validatePassword = (password) => {
  if (!password) return 'password is required';
  if (!isStrongPassword))
    return 'Passord must have 8+ chars, upper, lower, number, and special char';
  return null;
};


//-------------
// Middlewares
// ------------



const validateSignup = (req,res, next) => {
  let {  name, email, password } = req.body;

  name = sanitizeInput (name);
  email = sanitizeInput(email);
  cont requiredError = validatedRequired({ name, email, password }, ['name', 'email' , 'password']);
  if (requiredError) return res.status(400).json({ error: requiredError });
