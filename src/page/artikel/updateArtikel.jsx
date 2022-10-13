import React from "react";
import Button from "../../komponen/button";
import Input from "../../komponen/input";
import { useNavigate } from "react-router-dom";
import { createartikel } from "../../api/artikel";

export default function TambahArtikel() {
  const [payload, setPayload] = React.useState({
    judul: "",
    thumbnail: "",
    artikel: "",
    imagePreview: null,
  });

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
      await createartikel(payload);

      alert("berhasil");
      return navigate("/artikel", { replace: true });
    } catch (err) {
      console.log(err);
    } finally {
      // eslint-disable-next-line no-undef
      // setIsSubmitting(false);
    }
  };
  console.log("payload", payload);
  return (
    <React.Fragment>
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

        <Button title={"Simpan"} />
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
