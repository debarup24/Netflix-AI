import { GoogleGenerativeAI } from "@google/generative-ai";
import { OPENAI_KEY } from "./constant"


// import { GoogleGenerativeAI } from "@google/generative-ai";
const Openai = new GoogleGenerativeAI(OPENAI_KEY);

export default Openai;