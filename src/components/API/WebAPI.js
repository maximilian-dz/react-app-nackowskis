export async function fetchData(url) {
  let promise = await fetch(url);
  let data = await promise.json();
  return data;
}

export async function getAllAuctions(group) {
  return fetchData('http://nackowskis.azurewebsites.net/api/auktion/' + group);
}

export async function getAuction(group, auction) {
  return await fetchData(
    'http://nackowskis.azurewebsites.net/api/auktion/' + group + '/' + auction
  );
}

export async function getBids(group, auction) {
  return await fetchData(
    'http://nackowskis.azurewebsites.net/api/bud/' + group + '/' + auction
  );
}

export function createAuction(group, auction) {
  return fetch('http://nackowskis.azurewebsites.net/api/Auktion/' + group, {
    method: 'POST',
    body: JSON.stringify(auction),
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    }
  });
}

export function updateAuction() {}

export function deleteAuction() {}

export function placeBid() {}
