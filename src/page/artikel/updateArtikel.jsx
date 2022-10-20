import React from "react";
import Button from "../../komponen/button";
import Input from "../../komponen/input";
import { useNavigate, useParams } from "react-router-dom";
import {
  createartikel,
  getDetailArtikel,
  Updateartikel,
} from "../../api/artikel";

export default function UpdateArtikel() {
  const [payload, setPayload] = React.useState({
    judul: "",
    thumbnail: "",
    artikel: "",
    imagePreview: null,
  });

  let { slug } = useParams();

  const navigate = useNavigate();
  const handlechange = (e) => {
    setPayload((payload) => {
      return {
        ...payload,
        [e.target.name]: e.target.value,
      };
    });
  };

  // eslint-disable-next-line no-unused-vars
  const handleSubmit = async (e) => {
    try {
    
      e.preventDefault();
      // eslint-disable-next-line no-undef
      const response = await createartikel(payload);
      let data = response?.data?.data
      console.log(data);
      if (data?. status === 'Fail') {
        return alert(data?.message)
      } 
      alert("berhasil")
      console.log("response berhasil =>", response);
      return;
      alert("berhasil");
      return navigate("/artikel", { replace: true });
    } catch (err) {
      console.log(err);
    } finally {
      // eslint-disable-next-line no-undef
      // setIsSubmitting(false);
    }
  };
  const getDetailArtikelHandle = async () => {
    try {
      const response = await getDetailArtikel(slug);
      const data = response.data.data;
      console.log(data);
      setPayload((payload) => {
        return {
          ...payload,
          id: data?.id,
          judul: data?.judul,
          thumbnail: data?.thumbnail,
          artikel: data?.artikel,
          imagePreview: data?.thumbnail,
        };
      });
    } catch (err) {
      console.log("err", err);
    }
  };

  React.useEffect(() => {
    getDetailArtikelHandle();
  }, []);
  return (
    <React.Fragment>
      <h1>Edit Artikel</h1>
      <form onSubmit={handleSubmit}>
        <Input
          name="judul"
          value={payload.judul}
          label="Judul Artikel"
          placeholder="Judul"
          onChange={handlechange}
        />
        <Input
          name="artikel"
          value={payload.artikel}
          label="Isi Artikel"
          placeholder="Artikel"
          onChange={handlechange}
        />
        <input
          name="thumbnail"
          type={"file"}
          value={payload?.file}
          label="Isi Artikel"
          placeholder="Artikel"
          onChange={(e) => {
            console.log("event", e.target.files[0]);
            let file = e.target.files[0];
            if (file.size > 200000) {
              return alert("ukuran lebih dari 100 Kb");
            }

            if (
              file.type === "image/jpeg" ||
              file.type === "image/png" ||
              file.type === "application/pdf"
            ) {
              console.log("ha");
              let reader = new FileReader();
              reader.readAsDataURL(file);
              reader.onloadend = () => {
                console.log(reader);
                setPayload((payload) => {
                  return {
                    ...payload,
                    imagePreview: reader.result,
                    thumbnail: file,
                  };
                });
              };
            } else {
              return alert("file harus image atau pdf");
            }
          }}
          // onChange={handlechange}
        />

        <Button title={"Perbarui"} />
        <img src={payload.imagePreview} alt={payload.imagePreview} />
      </form>

      <Button
        title={"back"}
        onClick={() => {
          navigate("/artikel", { replace: true });
        }}
      />
    </React.Fragment>
  );
}
