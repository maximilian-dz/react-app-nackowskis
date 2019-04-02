export async function fetchData(url) {
  let promise = await fetch(url)
  let data = await promise.json()
  return data
}

export async function getAllAuctions(group) {
  return fetchData('http://nackowskis.azurewebsites.net/api/auktion/' + group)
}

export async function getAuction(group, auctionId) {
  return await fetchData(
    'http://nackowskis.azurewebsites.net/api/auktion/' + group + '/' + auctionId
  )
}

export async function getBids(group, auctionId) {
  return await fetchData(
    'http://nackowskis.azurewebsites.net/api/bud/' + group + '/' + auctionId
  )
}

export function createAuction(group, auction) {
  return fetch('http://nackowskis.azurewebsites.net/api/Auktion/' + group, {
    method: 'POST',
    body: JSON.stringify(auction),
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    }
  })
}

// WARNING! NOT TESTED YET
export function updateAuction(group, auctionId, auction) {
  return fetch('http://nackowskis.azurewebsites.net/api/Auktion/' + group + '/' + auctionId, {
    method: 'PUT',
    body: JSON.stringify(auction),
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    }
  })
}

export function deleteAuction() {}

export function placeBid() {}
