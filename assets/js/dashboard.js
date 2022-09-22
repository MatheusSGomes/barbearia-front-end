const url = 'http://127.0.0.1:8000/api/';

const id = 18;

// INDEX
// axios
//   .get(url+'agenda')
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

// STORE
// axios
//   .post(url+'agenda', {
//     "nome": "Ricardo",
//     "email": "ricardo@email.com",
//     "whatsapp": "61 8989-7895",
//     "servicos": {
//         "corte": true,
//         "sobrancelhas": true,
//         "barba": true,
//         "hidratacao": true
//     },
//     "horario": "seg-15-16"  
//   })
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });


// SHOW
// axios
//   .get(url+`agenda/${id}`)
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.log(error);
//   })
  
// UPDATE
// axios
//   .put(url+`agenda/${id}`, {
//     "nome": "João Fernando",
//     "email": "joao@email.com",
//     "whatsapp": "61 7777-7895",
//     "corte": true,
//     "sobrancelhas": true,
//     "barba": false,
//     "hidratacao": false,
//     "horario": "seg-16-17"  
//   })
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

// DESTROY
// axios
//   .delete(url+`agenda/${id}`)
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });