import { GoogleGenerativeAI } from "@google/generative-ai";
import { OPENAI_KEY } from "./constant"

const Openai = new GoogleGenerativeAI(OPENAI_KEY);
//AIzaSyA_5VldJjSBKRqv7DPKtsdcy5CR0J5DbiM 

export default Openai;