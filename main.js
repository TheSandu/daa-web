function makeRequest (method, url) {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.onload = function () {
      if (this.status >= 200 && this.status < 300) {
        resolve(xhr.response);
      } else {
        reject({
          status: this.status,
          statusText: xhr.statusText
        });
      }
    };
    xhr.onerror = function () {
      reject({
        status: this.status,
        statusText: xhr.statusText
      });
    };
    xhr.send();
  });
}

var fulfillButton = document.getElementById("FulfillButton");
fulfillButton.onclick = function(event) {
    
    makeRequest('GET', 'http://daa-balancer-2015045468.us-east-2.elb.amazonaws.com:3000/api/users')
    .then(function (response) {
        console.log( response );
        var tableContent = "";
        // for (const mockValue of mockValues) {
        //     tableContent += `
        //     <tr>
        //         <td>${mockValue.userId} </td>
        //         <td>${mockValue.userName} </td>
        //         <td>${mockValue.contor} </td>
        //         <td>${mockValue.price} </td>
        //         <td> </td>
        //     </tr>
        //     `; 
        // }

        var tabelul = document.getElementById("tabelOfUsers");
        tabelul.innerHTML = tableContent;

    })
    .catch(function (err) {
      console.error('Augh, there was an error!', err.statusText);
    });
}