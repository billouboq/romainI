// elements
const input = document.querySelector(".number-input");
const btn = document.querySelector(".submit-btn");
const result = document.querySelector(".result");

// server config
const config = {
  server: "http://127.0.0.1:3000",
};

// get romain number
const getRomainNumber = number => {
  return fetch(config.server + "/convertNumber", {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ number }),
  })
    .then(resp => resp.json())
    .then(json => json.result);
};

// listeners
btn.addEventListener("click", async () => {
  result.innerHTML = await getRomainNumber(input.value);

  // reset input
  input.value = null;
});
