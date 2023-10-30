async function postCommunityForm(data) {
  console.log('DATA: ' + data);
  let requestOptions = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      ContentType: 'application/json'
    },
    body: data,
    redirect: 'follow'
  };

  fetch('https://apex.oracle.com/pls/apex/ardc/forms/community_access', requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result));
}

export default {
  postCommunityForm
};
