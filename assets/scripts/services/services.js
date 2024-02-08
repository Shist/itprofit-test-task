const postData = async (url, data) => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: data,
  });

  if (!response.ok) {
    throw new Error(
      `Could not fetch data from server, status: ${response.status}`
    );
  }

  return await response.json();
};

export { postData };
