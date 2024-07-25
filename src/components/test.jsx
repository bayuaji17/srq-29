import Card from "./Card";
import RadioButton from "./RadioButton";
import questionsData from "../../questions.json";
import { useState } from "react";
import FormInput from "./FormInput";
export default function Questions({ onSubmit }) {
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

  const [result, setResult] = useState("");

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

  };