import Card from "./Card";
import RadioButton from "./RadioButton";
import questionsData from "../../questions.json";
import { useState } from "react";
import FormInput from "./FormInput";
import { useNavigate } from "react-router-dom";
export default function Questions() {
  const [usersData, setUsersData] = useState({
    nama: "",
    umur: "",
    jenisKelamin: "Pria",
  });

  const [questionsAnswer, setQuestionsAnswer] = useState({});
  const [currentStep, setCurrentStep] = useState(0);
  const [errors, setErrors] = useState({});
  const questionsPerStep = 5;
  const totalSteps =
    Math.ceil(questionsData.questions.length / questionsPerStep) + 1;

  const navigate = useNavigate();

  const InputChange = (e) => {
    const { id, value } = e.target;
    setUsersData({ ...usersData, [id]: value });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setQuestionsAnswer({ ...questionsAnswer, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }
    
    const formattedAnswers = Object.keys(questionsAnswer).map((key) => {
      return {
        questionId: parseInt(key.split("-")[1]),
        value: questionsAnswer[key],
      };
    });
    localStorage.setItem("answers", JSON.stringify(formattedAnswers));


    const answers = Object.values(questionsAnswer);
    const yesCountNeurosis = answers
      .slice(0, 20)
      .filter((answer) => answer === "yes").length;
    const yesCountPsychoactive = answers[20] === "yes" ? 1 : 0;
    const yesCountPsychotic = answers
      .slice(21, 24)
      .filter((answer) => answer === "yes").length;
    const yesCountPTSD = answers
      .slice(24, 29)
      .filter((answer) => answer === "yes").length;

    let messages = [];
    if (yesCountNeurosis >= 5) {
      messages.push("Gejala Neurosis");
    }

    if (yesCountPsychoactive === 1) {
      messages.push("Indikasi Penggunaan Zat Psikoaktif");
    }

    if (yesCountPsychotic >= 1) {
      messages.push("Gejala Psikotik");
    }

    if (yesCountPTSD >= 1) {
      messages.push("Post Traumatic Stress Disorder");
    }
    if (messages.length === 0) {
      messages.push("Tidak ada indikasi apapun");
    }

    const result = {
      nama: usersData.nama,
      umur: usersData.umur,
      jenisKelamin: usersData.jenisKelamin,
      result: messages,
    };

    localStorage.setItem("resultSRQ", JSON.stringify(result));
    navigate("/result");
  };

  const nextStep = () => {
    if (validateForm()) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const validateForm = () => {
    let errors = {};

    if (currentStep === 0) {
      if (!usersData.nama) {
        errors.nama = "Nama / inisial harus diisi";
      }
      if (!usersData.umur) {
        errors.umur = "Umur harus diisi";
      }
      if (!usersData.jenisKelamin) {
        errors.jenisKelamin = "Jenis Kelamin harus diisi";
      }
    } else {
      const currentQuestions = questionsData.questions.slice(
        (currentStep - 1) * questionsPerStep,
        currentStep * questionsPerStep
      );

      currentQuestions.forEach((question) => {
        if (!questionsAnswer[`answer-${question.id}`]) {
          errors[
            `answer-${question.id}`
          ] = `Pertanyaan nomor ${question.id} harus diisi`;
        }
      });
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const currentQuestions = questionsData.questions.slice(
    (currentStep - 1) * questionsPerStep,
    currentStep * questionsPerStep
  );

  return (
    <>
      <form onSubmit={handleSubmit}>
        {currentStep === 0 ? (
          <div>
            <Card className={"bg-slate-300 border-none p-7 px-10"}>
              <h1 className="font-semibold text-lg text-red-600 after:content-['*'] font-poppins">
                Petunjuk Pengisian
              </h1>
              <p className=" text-justify font-openSans leading-relaxed">
                Pertanyaan berikut terkait tentang masalah yang mungkin dialami
                anda dalam <b>30 hari terakhir</b>. Jika anda mengalami masalah yang
                disebutkan, pilih opsi <b>Ya</b>, dan jika tidak, pilih opsi{" "}
                <b>Tidak</b>. Jika Anda tidak yakin tentang jawabannya, berilah
                jawaban yang paling sesuai di antara Jawaban <b>Ya</b> dan{" "}
                <b>Tidak</b>
              </p>
            </Card>
            <Card className={"bg-[#86c5da] my-5 border-none"}>
              <FormInput
                type={"text"}
                placeholder={"Masukkan Inisial / Nama Anda"}
                id={"nama"}
                label={"Nama / Inisial :"}
                onChange={InputChange}
                required={true}
                value={usersData.nama}
              />
              {errors.nama && <p className="text-red-500">{errors.nama}</p>}
              <FormInput
                type={"number"}
                placeholder={"Masukkan Umur Anda"}
                id={"umur"}
                label={"Umur :"}
                min={1}
                onChange={InputChange}
                required={true}
                value={usersData.umur}
              />
              {errors.umur && <p className="text-red-500">{errors.umur}</p>}
              <label className="flex flex-col text-lg font-poppins">
                Jenis Kelamin :
                <select
                  id="jenisKelamin"
                  name="jenisKelamin"
                  className="mt-2 hover:cursor-pointer px-4 border-2 h-11 rounded-xl bg-transparent text-base"
                  onChange={InputChange}
                  required={true}
                  value={usersData.jenisKelamin}
                >
                  <option value="Pria">Pria</option>
                  <option value="Wanita">Wanita</option>
                </select>
              </label>
              {errors.jenisKelamin && (
                <p className="text-red-500">{errors.jenisKelamin}</p>
              )}
              <div className="w-full flex justify-end">
                <button
                  className="bg-[#FF6C61] w-44 h-12 text-xl font-semibold rounded-xl text-black hover:bg-red-800 hover:text-white mt-4 font-poppins"
                  type="button"
                  onClick={nextStep}
                >
                  Selanjutnya
                </button>
              </div>
            </Card>
          </div>
        ) : (
          <ol>
            {currentQuestions.map((question) => (
              <Card
                key={question.id}
                className={"bg-[#b7ddea] my-6 border-none shadow-lg h-full"}
              >
                <li>
                  <p className="after:content-['*'] after:text-red-500 after:pl-1 font-poppins text-justify">
                    <span className="after:content-['.'] after:mr-2">
                      {question.id}
                    </span>
                    {question.question}
                  </p>
                  <div className="flex justify-center gap-4 py-3">
                    <RadioButton
                      label={"Ya"}
                      name={`answer-${question.id}`}
                      value={`yes`}
                      id={`yes-${question.id}`}
                      onChange={handleInputChange}
                      required={true}
                      checked={
                        questionsAnswer[`answer-${question.id}`] === "yes"
                      }
                    />
                    <RadioButton
                      label={"Tidak"}
                      name={`answer-${question.id}`}
                      value={`no`}
                      id={`no-${question.id}`}
                      onChange={handleInputChange}
                      required={true}
                      checked={
                        questionsAnswer[`answer-${question.id}`] === "no"
                      }
                    />
                  </div>
                  {errors[`answer-${question.id}`] && (
                    <p className="text-red-500">
                      {errors[`answer-${question.id}`]}
                    </p>
                  )}
                </li>
              </Card>
            ))}
          </ol>
        )}
        <div className="flex w-full justify-between gap-4 mt-4">
          {currentStep > 0 && (
            <button
              className="bg-gray-500 w-40 h-12 text-lg font-poppins font-semibold rounded-xl text-white hover:bg-gray-800"
              type="button"
              onClick={prevStep}
            >
              Sebelumnya
            </button>
          )}
          {currentStep > 0 && currentStep < totalSteps - 1 && (
            <button
              className="bg-cyan-600 w-40 h-12 text-lg font-poppins font-semibold rounded-xl text-white hover:bg-cyan-800"
              type="button"
              onClick={nextStep}
            >
              Selanjutnya
            </button>
          )}
          {currentStep === totalSteps - 1 && (
            <button
              className="bg-cyan-600 w-32 h-12 text-2xl rounded-xl text-white hover:bg-cyan-800"
              type="submit"
            >
              Kirim
            </button>
          )}
        </div>
      </form>
    </>
  );
}
