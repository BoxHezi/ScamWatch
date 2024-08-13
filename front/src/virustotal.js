const BASE_URL = "https://www.virustotal.com/api/v3/domains/";

const HEADERS = {
  "x-apikey": process.env.REACT_APP_VTKEY,
  "Content-Type": "application/json"
};

async function domainCheck(domain) {
  const target = BASE_URL + domain;

  const resp = await fetch(target, {
    method: "GET",
    headers: HEADERS
  });
  const data = await resp.json();

  console.log(data);
  return data;
}

export { domainCheck };
