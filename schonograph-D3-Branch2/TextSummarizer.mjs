import { Configuration, OpenAIApi } from "openai";

let OPENAI_API_KEY = "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";

const configuration = new Configuration({
  apiKey: OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

//var text = fs.readFile("./prompt.txt", "utf-8");
//var text = "Finding the shortest path in direction effective is essential. To solve this shortest path problem, we usually using Dijkstra or A* algorithm. These two algorithms are often used in routing or road networks. This paper's objective is to compare those two algorithms in solving this shortest path problem. In this research, Dijkstra and A* almost have the same performance when using it to solve town or regional scale maps, but A* is better when using it to solve a large scale map."

//textSummarizer(text)
//console.log(result);


//textSummarizer(text);
//window.location.href = "ArticleNode.html"

export async function textSummarizer(text){
    const response = await openai.createCompletion({
    model: "text-davinci-002",
    prompt: text,
    temperature: 0.7,
    max_tokens: 80, 
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
    });

    return JSON.stringify(response.data.choices[0].text);
  }
