export const NotFound = () => {
  return (
    <>
      <div className="w-screen h-screen flex flex-col items-center justify-center bg-blue-100">
        <h1 className="text-7xl text-center font-poppins font-semibold leading-normal mb-8">HALAMAN YANG ANDA CARI TIDAK DITEMUKAN</h1>
        <a href="/" className="bg-cyan-700 h-14 w-56 rounded-xl text-white font-semibold flex items-center justify-center text-xl">Kembali ke HOME !</a>
      </div>
    </>
  );
};
