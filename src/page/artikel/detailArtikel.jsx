import React from "react";
import { detailArtikel } from "../../api/artikel";
import { useParams,Link } from "react-router-dom";
import Button from '../../komponen/button';

export default function DetailArtikel() {
  let { slug } = useParams();
  const [users, setUsers] = React.useState({
    judul: "",
    thumbnail: "",
    artikel: "",
    imagePreview: null,
  });
  const getDetailArticle = async () => {
    try {
      const response = await detailArtikel(slug);
      const dataArtikel = response.data.data;
      console.log(dataArtikel);
      setUsers(() => {
        return {
          judul: dataArtikel.judul,
          thumbnail: dataArtikel.thumbnail,
          artikel: dataArtikel.artikel,
          imagePreview: null,
        };
      });
    } catch (error) {}
  };
  React.useEffect(() => {
    getDetailArticle();
  }, []);

  return (
    <React.Fragment>
      <div className="grid grid-cols-2">
        <div>
          <img src={users.thumbnail} alt=" Mana Gambarnya" className="w-50 h-50" />
        </div>
        <div>
          <h1 className="font-bold">Judul</h1>
          <h3>{users.judul}</h3>
          <h1 className="mt-10 font-bold">Artikel</h1>
          <p className="mb-10">{users.artikel}</p>
          <Link to={'/artikel'}>
            <Button title={'Kembali'}/>
        </Link>
        </div>
      </div>
    </React.Fragment>
  );
}