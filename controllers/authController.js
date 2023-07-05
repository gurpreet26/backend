import jwt from 'jsonwebtoken'

const jwtfunction= async(req, res,next) => {
    try {
        const token = req.headers.authorization.split(' ')[1]; // Authorization: 'Bearer TOKEN'
        if (!token) {
          throw new Error('Authentication failed!');
        }
        const verified = jwt.verify(token, "hello");
        console.log("vvvvv",verified)
        req.user = verified;  
        next();
      } catch (err) {
        res.status(400).send('Invalid token !');
      }
        
    
   
   
       
      
}

export default jwtfunction;