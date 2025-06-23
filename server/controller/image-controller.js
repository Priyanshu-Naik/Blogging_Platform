const url = 'http://localhost:8000';

export const uploadImage = (request, response) => {
  // console.log(JSON.stringify(Object.keys(response), null, 2))
  // console.log(response)
  console.log('Uploaded file:', request.body.file);

  // uncomment this
  if (!request.body.file) {
    return response.status(404).json({ error: "File upload failed or file not found" });
  }

  const imageUrl = `${url}/file/${request.body.name}`;
  return response.status(200).json( imageUrl ); // return in structured format
};