import Card from "./Card";
import RadioButton from "./RadioButton";
import questionsData from "../../questions.json";
import { useState } from "react";
import FormInput from "./FormInput";
import { useNavigate } from "react-router-dom";
export default function Questions() {
  const [usersData, setUsersData] = useState({
    nama: "",
    umur: 0,
    jenisKelamin: "Pria",
  });

  const [questionsAnswer, setQuestionAnswer] = useState({
    "answer-1": "",
    "answer-2": "",
    "answer-3": "",
    "answer-4": "",
    "answer-5": "",
    "answer-6": "",
    "answer-7": "",
    "answer-8": "",
    "answer-9": "",
    "answer-10": "",
    "answer-11": "",
    "answer-12": "",
    "answer-13": "",
    "answer-14": "",
    "answer-15": "",
    "answer-16": "",
    "answer-17": "",
    "answer-18": "",
    "answer-19": "",
    "answer-20": "",
    "answer-21": "",
    "answer-22": "",
    "answer-23": "",
    "answer-24": "",
    "answer-25": "",
    "answer-26": "",
    "answer-27": "",
    "answer-28": "",
    "answer-29": "",
  });

  const navigate = useNavigate()
  const InputChange = (e) => {
    const { id, value } = e.target;
    if (id === "umur" && value <= 0) {
      return;
    }
    setUsersData({ ...usersData, [id]: value });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setQuestionAnswer({ ...questionsAnswer, [name]: value });
  };

  console.log(questionsAnswer);

  const handleSubmit = (e) => {
    e.preventDefault();
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
    console.log(questionsAnswer, "dari atas");
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
     navigate("/result")
  };

  return (
    <>
      {/* Form BIODATA */}
      <form onSubmit={handleSubmit}>
        <Card className={"bg-[#86c5da] my-5 border-none"}>
          <FormInput
            type={"text"}
            placeholder={"Masukkan Inisial / Nama Anda"}
            id={"nama"}
            label={"Nama :"}
            onChange={InputChange}
          />
          <FormInput
            type={"number"}
            placeholder={"Masukkan Umur Anda"}
            id={"umur"}
            label={"Umur :"}
            min={1}
            onChange={InputChange}
          />
          <label className="flex flex-col">
            Jenis Kelamin :
            <select
              id="jenisKelamin"
              name="jenisKelamin"
              defaultValue={"Pria"}
              className="mt-2 hover:cursor-pointer px-4 border-2 h-11 rounded-xl bg-transparent"
              onChange={InputChange}
            >
              <option value="Pria">Pria</option>
              <option value="Wanita">Wanita</option>
            </select>
          </label>
        </Card>
        <ul>
          {questionsData?.questions?.map((question) => (
            <Card
              key={question.id}
              className={"bg-[#b7ddea] my-6 border-none shadow-lg h-52"}
            >
              <li>
                <p className="xl:text-xl after:content-['*'] after:text-red-500 after:pl-1 font-fira text-justify">
                  <span className="after:content-['.'] after:mr-2">
                    {question.id}
                  </span>
                  {question.question}
                </p>
                <div className="flex gap-4 ml-10 py-3 ">
                  <RadioButton
                    label={"Ya"}
                    name={`answer-${question.id}`}
                    value={`yes`}
                    id={`yes-${question.id}`}
                    onChange={handleInputChange}
                  />
                  <RadioButton
                    label={"Tidak"}
                    name={`answer-${question.id}`}
                    value={`no`}
                    id={`no-${question.id}`}
                    onChange={handleInputChange}
                  />
                </div>
              </li>
            </Card>
          ))}
        </ul>
        <div className="flex w-full justify-end gap-4 ">
          <button
            className="bg-red-500 w-32 h-12 text-2xl rounded-xl text-white hover:bg-red-800"
            type="reset"
          >
            Reset
          </button>
          <button
            className="bg-cyan-600 w-32 h-12 text-2xl rounded-xl text-white hover:bg-cyan-800"
            type="submit"
          >
            Kirim
          </button>
        </div>
      </form>
    </>
  );
}
