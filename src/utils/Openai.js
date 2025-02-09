import { GoogleGenerativeAI } from "@google/generative-ai";
import { OPENAI_KEY } from "./constant"

const Openai = new GoogleGenerativeAI(OPENAI_KEY);


export default Openai;
