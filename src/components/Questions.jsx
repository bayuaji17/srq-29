import Card from "./Card";
import RadioButton from "./RadioButton";
import questionsData from "../../questions.json";
import { useState } from "react";
import FormInput from "./FormInput";
export default function Questions() {
  const [usersData, setUsersData] = useState({
    nama: "",
    umur: 0,
    jenisKelamin: "Pria",
  });

  const [result, setResult] = useState("");
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
    const dataUsers = Object.values(usersData);
    const answers = Object.values(questionsAnswer);

    // const neurosisCount = answers.slice(0, 20).filter(answer => answer === "Ya").length;
    // const substanceUse = answers[20] === "Ya";
    // const psychoticCount = answers.slice(21, 24).filter(answer => answer === "Ya").length;
    // const ptsdCount = answers.slice(24, 29).filter(answer => answer === "Ya").length;

    // let resultMessage = "";

    // if (neurosisCount >= 5 && neurosisCount <= 7) {
    //   resultMessage += "Indicates psychological issues (neurosis). ";
    // }
    // if (substanceUse) {
    //   resultMessage += "Indicates substance use. ";
    // }
    // if (psychoticCount >= 1) {
    //   resultMessage += "Indicates serious psychotic symptoms, further intervention needed. ";
    // }
    // if (ptsdCount >= 1) {
    //   resultMessage += "Indicates PTSD symptoms. ";
    // }

    // setResult(resultMessage || "No significant psychological issues detected.");
    // console.log(result)

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

    let message = `Hasil: + ${dataUsers}`;

    if (yesCountNeurosis >= 5 && yesCountNeurosis <= 7) {
      message += "Anda mungkin mengalami gejala neurosis.\n";
    }

    if (yesCountPsychoactive === 1) {
      message += "Ada indikasi penggunaan zat psikoaktif.\n";
    }

    if (yesCountPsychotic >= 1) {
      message += "Ada gejala psikotik.\n";
    }

    if (yesCountPTSD >= 1) {
      message += "Ada gejala-gejala PTSD (Post Traumatic Stress Disorder).\n";
    }
    setResult(message);
    console.log(result);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Card className={"bg-white my-5 border-none"}>
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
              className="mt-2 hover:cursor-pointer px-4 border-2 h-11 rounded-xl"
              onChange={handleInputChange}
            >
              <option value="Pria">Pria</option>
              <option value="Wanita">Wanita</option>
            </select>
          </label>
        </Card>
        <ul>
          {questionsData?.questions?.map((question) => (
            <Card key={question.id} className={"bg-[#b7ddea] my-6 border-none shadow-lg "}>
              <li>
                <p className="xl:text-xl after:content-['*'] after:text-red-500 after:pl-1 font-fira">
                  <span className="after:content-['.'] after:mr-2">
                    {question.id}
                  </span>
                  {question.question}
                </p>
                <div className="flex gap-4 ml-10">
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
        <div className="flex w-full justify-start gap-4 mb-52">
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
