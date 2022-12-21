import React, { useState } from "react";
import {Configuration,OpenAIApi} from 'openai';
import './App.css';



const App = () =>{
const [prompt,setPrompt] = useState('');

  
  const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

  const openai = new OpenAIApi(configuration);
  const generateImage = async () =>{
   const res = await openai.createImage({
      prompt:'This is a test',
      n:1,
      size:"1024*1024",
    });
    console.log(res.data.data[0].url);
  }
  return (
    <div className="app-main">
      <h3>Generate an image</h3>

      <input className="app-input"   placeholder="type something to generate" onChange={(e)=>setPrompt(e.target.value)}/>
      
      <button onClick={generateImage}>Generate an image</button>
    </div>
  )
}

export default App;