export default function Warna({ warna, setWarna }) {
    return (
        <div>
            <div style={{ backgroundColor: warna, width: 300, height: 300 }}>
                <p>{warna}</p>
            </div>

            <button
                onClick={() => {
                    setWarna("red");
                }}>
                Merah

            </button>

            <button
                onClick={() => {
                    setWarna("yellow");
                }}>
                Kuning

            </button>

            <button
                onClick={() => {
                    setWarna("green");
                }}>
                Green

            </button>
        </div>
    )
}