/* 
  in order to run our sage
  1. create a saga middleware with a list of sagas to run(so far we have only one helloSaga)
  2. connect the sage middleware to the redux store
 */

export function* helloSaga() {
  console.log('Hello Sagas'); 
}
