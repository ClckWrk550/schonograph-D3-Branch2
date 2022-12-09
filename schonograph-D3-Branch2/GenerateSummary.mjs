import { textSummarizer } from "./TextSummarizer.mjs";


var text = "Finding the shortest path in direction effective is essential. To solve this shortest path problem, we usually using Dijkstra or A* algorithm. These two algorithms are often used in routing or road networks. This paper's objective is to compare those two algorithms in solving this shortest path problem. In this research, Dijkstra and A* almost have the same performance when using it to solve town or regional scale maps, but A* is better when using it to solve a large scale map."

const result = await textSummarizer(text).then(() => {
    window.location.href = "ArticleNode.html";
});



