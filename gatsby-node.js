const axios = require('axios');
const crypto = require('crypto');

exports.sourceNodes = async ({ boundActionCreators }) => {
  const { createNode } = boundActionCreators;

  // fetch raw data from the randomuser api
  const fetchHeadlines = () => axios.get(`https://newsapi.org/v2/top-headlines?q=trump&apiKey=865a31a3c1b84596b93030e4bf2ee5dc`);
  // await for results
  const res = await fetchHeadlines();

  console.log(res.data.articles);
  // map into these results and create nodes
  res.data.articles.map((headline, i) => {
    // Create your node object
    const headlineNode = {
      // Required fields
      id: `${i}`,
      parent: `__SOURCE__`,
      internal: {
        type: `Headline`, // name of the graphQL query --> AllHeadline {}
        // contentDigest will be added just after
        // but it is required
      },
      children: [],

      // Other fields that you want to query with graphQl
      author: headline.author,
      source: {
        id: headline.source.id,
        name: headline.source.name,
      },
      title: headline.title,
      description: headline.description,
      url: headline.url,
      publishedAt: headline.publishedAt,
      content: headline.content
      // etc...
    }

    // Get content digest of node. (Required field)
    const contentDigest = crypto
      .createHash(`md5`)
      .update(JSON.stringify(headlineNode))
      .digest(`hex`);
    // add it to userNode
    headlineNode.internal.contentDigest = contentDigest;

    // Create node with the gatsby createNode() API
    createNode(headlineNode);
  });

  return;
}