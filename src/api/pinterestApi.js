import axios from "axios";

export const fetchApplePhoneImages = async () => {
  const options = {
    method: "GET",
    url: "https://pinterest-video-and-image-downloader.p.rapidapi.com/pinterest",
    params: {
      url: "https://in.pinterest.com/search/pins/?q=apple%20phone", // Apple telefonlarına ait Pinterest URL'si
    },
    headers: {
      "x-rapidapi-key": "0a090054c6mshb97be951ef59b91p12490djsn2da6edfd1155",
      "x-rapidapi-host": "pinterest-video-and-image-downloader.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data; // Veriyi döndürüyoruz
  } catch (error) {
    console.error("Error fetching Pinterest data:", error);
    throw error; // Hata durumunda exception fırlatıyoruz
  }
};
