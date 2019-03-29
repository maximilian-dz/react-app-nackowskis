export async function fetchData(url) {
  let promise = await fetch(url);
  let data = await promise.json();
  return data;
}

export async function getAllAuctions(group) {
  return fetchData('http://nackowskis.azurewebsites.net/api/Auktion/' + group);
}

export async function getAuction(group, auction) {
  return await fetchData(
    'http://nackowskis.azurewebsites.net/api/Auktion/' + group + '/' + auction
  );
}

export async function getBids(group, auction) {
  return await fetchData(
    'http://nackowskis.azurewebsites.net/api/bud/' + group + '/' + auction
  );
}
