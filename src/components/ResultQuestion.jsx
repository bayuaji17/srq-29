import { useNavigate } from "react-router-dom";
import Card from "./Card";

export default function ResultQuestion() {
  const navigate = useNavigate();
  const result = JSON.parse(localStorage.getItem("resultSRQ"));
  const handleSubmit = () => {
    localStorage.removeItem("resultSRQ");
    localStorage.removeItem("answers");
    navigate("/");
  };
  return (
    <>
      <div className="font-poppins">
        <h1 className="text-2xl text-center font-bold mb-5">HASIL</h1>
        <Card className={"bg-cyan-600 border-none shadow-lg"}>
          <div>
            <div>
              <h3 className="pl-0 sm:pl-10 text-3xl font-semibold pt-5 text-white text-center sm:text-left">
                Biodata Pasien
              </h3>
            </div>
            <div className="mt-6 border-t border-gray-100">
              <dl className="divide-y divide-gray-100">
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="px-10 text-lg font-medium leading-6 text-white text-center sm:text-left">
                    Nama
                  </dt>
                  <dd className="mt-1 text-lg leading-6 text-white font-medium sm:col-span-2 sm:mt-0 text-center sm:text-left">
                    {result.nama}
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="px-10 text-lg font-medium leading-6 text-white text-center sm:text-left">
                    Umur
                  </dt>
                  <dd className="mt-1 text-lg leading-6 text-white font-medium sm:col-span-2 sm:mt-0 text-center sm:text-left">
                    {result.umur}
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="px-10 text-lg font-medium leading-6 text-white text-center sm:text-left">
                    Jenis Kelamin
                  </dt>
                  <dd className="mt-1 text-lg leading-6 text-white font-medium sm:col-span-2 sm:mt-0 text-center sm:text-left">
                    {result.jenisKelamin}
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="px-10 text-lg font-medium leading-6 text-white text-center sm:text-left">
                    Hasil
                  </dt>
                  <dd className="mt-1 text-lg leading-6 text-white font-medium sm:col-span-2 sm:mt-0">
                    <ul>
                      {result.result.map((item, index) => (
                        <li key={index} className="list-disc ml-6 sm:ml-0">{item}</li>
                      ))}
                    </ul>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </Card>
        <div className="flex flex-col mt-4 w-full items-center">
          <p className="text-2xl text-center font-semibold my-4">
            Melakukan kesalahan saat mengisi Kuesioner ?
          </p>
          <button
            className="w-44 h-12 rounded-xl bg-[#b7ddea] font-semibold hover:bg-[#143058] hover:text-white items-center justify-center"
            onClick={handleSubmit}
          >
            Perbaiki Jawaban
          </button>
        </div>
      </div>
    </>
  );
}
