export function fetchData (api: RequestInfo) {

    fetch(api).then(response => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json()
    }).then(function (responseAsJson) {
      // Do stuff with the JSON
      const { results } = responseAsJson;
      return results;
      
        }
        )
   
      .catch(error => console.log('Looks like we have an error', error)
      );
      
};
