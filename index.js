require('dotenv').config();

const TikTokApi = require('tiktok-api');
const { load } = require('cheerio-httpcli');

const tiktok = new TikTokApi({
  userAgent: process.env.USER_AGENT,
  requestOptions: {
    headers: {
      'Referer': 'https://www.tiktok.com/',
      'Cookie': `tt_webid=${process.env.TT_WEBID}; tt_webid_v2=${process.env.TT_WEBID_V2}`,
    },
  },
});

// Função para pesquisar vídeos com uma hashtag específica
async function searchHashtag(hashtag) {
  try {
    const searchResult = await tiktok.searchHashtag({ keyword: hashtag });
    const videos = searchResult.itemList;

    videos.forEach((video, index) => {
      console.log(`Video ${index + 1}:`);
      console.log(`ID: ${video.id}`);
      console.log(`Descrição: ${video.desc}`);
      console.log(`URL: https://www.tiktok.com/@${video.author.uniqueId}/video/${video.id}`);
      console.log('-----------------------------');
    });
  } catch (error) {
    console.error(`Erro ao pesquisar hashtag: ${error.message}`);
  }
}

// Pesquise com a hashtag desejada
const hashtag = 'exemplo'; // Substitua 'exemplo' pela hashtag desejada
searchHashtag(hashtag);
