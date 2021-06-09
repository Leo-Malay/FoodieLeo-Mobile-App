import AsyncStorage from '@react-native-async-storage/async-storage';

async function LoginReq(body) {
  return fetch(
    'https://leo-api-center.herokuapp.com/Auth/login',
    post_Req_Option(body),
  ).then(async response => response.json());
}
function NewAccountReq(body) {
  return fetch(
    'https://leo-api-center.herokuapp.com/Auth/new_account',
    post_Req_Option(body),
  ).then(response => response.json());
}
async function GetAccountReq() {
  try {
    let token = await AsyncStorage.getItem('token');
    return fetch(
      'https://leo-api-center.herokuapp.com/Auth/account',
      get_Req_Option_Token({}, token),
    ).then(response => response.json());
  } catch (err) {
    throw err;
  }
}
async function ChAccountReq(body) {
  try {
    let token = await AsyncStorage.getItem('token');
    return fetch(
      'https://leo-api-center.herokuapp.com/Auth/ch_account',
      post_Req_Option_Token(body, token),
    ).then(response => response.json());
  } catch (err) {
    throw err;
  }
}
async function AddCartReq(body) {
  try {
    let token = await AsyncStorage.getItem('token');
    return fetch(
      'https://leo-api-center.herokuapp.com/FoodieLeo/add_cart',
      post_Req_Option_Token(body, token),
    ).then(response => response.json());
  } catch (err) {
    throw err;
  }
}
async function RmCartReq(body) {
  try {
    let token = await AsyncStorage.getItem('token');
    return fetch(
      'https://leo-api-center.herokuapp.com/FoodieLeo/rm_cart',
      post_Req_Option_Token(body, token),
    ).then(response => response.json());
  } catch (err) {
    throw err;
  }
}
async function GetCartReq() {
  try {
    let token = await AsyncStorage.getItem('token');
    return fetch(
      'https://leo-api-center.herokuapp.com/FoodieLeo/cart',
      get_Req_Option_Token({}, token),
    ).then(response => response.json());
  } catch (err) {
    throw err;
  }
}
// Helper Functions
function FormBody(details) {
  var formBody = [];
  for (var property in details) {
    var encodedKey = encodeURIComponent(property);
    var encodedValue = encodeURIComponent(details[property]);
    formBody.push(encodedKey + '=' + encodedValue);
  }
  formBody = formBody.join('&');
  return formBody;
}
function post_Req_Option(body) {
  return {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: FormBody(body),
  };
}
function post_Req_Option_Token(body, token) {
  return {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Bearer ' + token,
    },
    body: FormBody(body),
  };
}
function get_Req_Option(body) {
  return {
    method: 'GET',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    params: FormBody(body),
  };
}
function get_Req_Option_Token(body, token) {
  return {
    method: 'GET',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Bearer ' + token,
    },
    params: FormBody(body),
  };
}

export {
  LoginReq,
  NewAccountReq,
  AddCartReq,
  RmCartReq,
  GetCartReq,
  GetAccountReq,
  ChAccountReq,
};
