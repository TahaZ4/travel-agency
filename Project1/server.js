const {app}= require('./index');
const PORT=3000;
// Initialize database tables
db.seralize(() => {
    db.run(db_access.createTripTable, (err) =>{
        if(err) console.log("Error",err.message);
    })
});

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});