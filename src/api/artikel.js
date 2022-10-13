import axios from "./baseUrl2";

export async function getAllArtkl() {
    return axios.get(`/artikel`);
}

export async function createartikel(payload) {
    console.log('payload akan di kirim', payload);

   const formData = new FormData()
   formData.append('judul', payload.judul)
   formData.append('artikel', payload.artikel)
   formData.append('thumbnail', payload.thumbnail)
   
   return axios.post("/artikel", formData);
}
export async function detailArtikel(slug) {
    return axios.get(`/artikel/${slug}`)
}

export async function deleteArtikel(slug) {
    return axios.post(`/artikel/delete/${slug}`)
}