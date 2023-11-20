// // in its own file so it can be reusable
// const USERS_ENDPOINT = 'https://631cbcad1b470e0e120961c6.mockapi.io/PromineoTechApi/fakeData';
// console.log(USERS_ENDPOINT);
// // reads top to bottom
// // creating class, normal class, has little to do with React
// // has functions and calls
// class UsersApi {
//     //! READ
//     get = async () => {
//         try {
//             // data from response into JSON
//             const resp = await fetch(USERS_ENDPOINT);
//             const data = await resp.json();
//             return data;
//         } catch (e) { //catching errors
//             console.log('Oops, looks like fetchHouses had an issue.', e);
//         }
//     }
//     // creating another method that takes in argument
//     //! UPDATE
//     put = async (fakeData) => {
//         try {
//             const resp = await fetch(`${USERS_ENDPOINT}/${fakeData.id}`, {
//                 method: 'PUT',
//                 headers: {
//                     'Content-Type': 'application/json' //type and value
//                 },
//                 body: JSON.stringify(fakeData)
//             });
//             return await resp.json();
//         } catch (e) {
//             console.log('Oops, looks like updating houses had an issue.', e);
//         }
//     }

//     //! CREATE
//     post = async (fakeData) => {
//         try {
//             const resp = await fetch(`${USERS_ENDPOINT}/${fakeData.id}`, {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json' //type and value
//                 },
//                 body: JSON.stringify(fakeData)
//             });
//             return await resp.json();
//         } catch (e) {
//             console.log('Oops, looks like updating houses had an issue.', e);
//         }
//     }

//     //! DELETE
//     delete = async (fakeData) => {
//         try {
//             const resp = await fetch(`${USERS_ENDPOINT}/${fakeData.id}`, {
//                 method: 'DELETE',
//                 headers: {
//                     'Content-Type': 'application/json' //type and value
//                 },
//                 body: JSON.stringify(fakeData)
//             });
//             return await resp.json();
//         } catch (e) {
//             console.log('Oops, looks like updating houses had an issue.', e);
//         }
//     }
// }

// export const usersApi = new UsersApi();
// console.log(usersApi);

// // we're using the same instances of these methods instead of creating new ones