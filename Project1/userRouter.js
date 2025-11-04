userRouter.use(verifyAdmin)

// All USERS
userRouter
.route('/')
  .get(tretrieveAllusers) //Get users
  .post(createuser);

userRouter
  .route('/:id')
  .get(retrieveUserById)
  .put(UpdateUserById
       .delete(deletetUserbyId);

module.exports = userRouter;
.
