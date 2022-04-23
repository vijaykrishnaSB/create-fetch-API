"use strict";

const url = "https://623d55e87efb5abea68ce31d.mockapi.io/suman/friends/";

      async function Suman(url) {
        let data = await fetch(url);
        if (data.ok) {
          return data.json();
        } else {
          return data.status;
        }
      }

      Suman(url)
        .then(function (value) {
          console.log(JSON.stringify(value));
        })
        .catch(function (error) {
          console.log(error);
        })
        .finally(function () {
          console.log("Fetch API ran successfully !");
        });

// SHORCUT METHOD FOR FETCH API
fetch(url)
        .then((response) => response.json())
        .then((data) => console.log(JSON.stringify(data)));

// POST DATA using Fetch() API
const data ={name:'shirin',country:'israel',pic:'www.google.com'}

      //post data

      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("success");
        })
        .catch((error) => {
          console.log("error");
        });
