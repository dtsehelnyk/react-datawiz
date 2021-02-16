const BASE_URL = `...`;

const getBooks = async () => {
  try {
    const request = await fetch(BASE_URL);

    return await request.json();
  } catch (error) {
    console.error(error);
  }
}
