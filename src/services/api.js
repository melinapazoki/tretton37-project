import Config from "../config";

export const handleError = async (e) => {
  return console.log(e);
};
export const fetchResponse = async (url, Method) => {
  return await fetch(url, {
    method: Method,
    headers: {
      "Access-Control-Allow-Origin": "*",
      Authorization: Config.api_key,
    },
  })
    .then(async (result) => {
      const response = await result.json().catch(() => {
        handleError();
      });
      return response.data;
    })
    .catch((e) => {
      handleError(e);
    });

  // const mel = [
  //   {
  //     id: 263,
  //     name: "Tomas Kristiansson",
  //     country: "🇸🇪",
  //     city: "Borlänge",
  //     text: " <p>I bought my first computer to play games, but discovering the world of programming turned out to be even better, both useful and fun!</p><p>The joy of creation and solving problems never seem to end.</p><p>I&apos;m always eager to learn something new, and as a developer there&apos;s no shortage. There&apos;s always a new language or framework to learn, or simply improving on what you already know. I enjoy sitting in the sofa reading books.</p><p>In my spare time I enjoy solving various Rubik&apos;s cubes with a blindfold on.</p> ",
  //     imagePortraitUrl: "https://i.1337co.de/profile/tomas-kristiansson-medium",
  //     imageFullUrl: "https://i.1337co.de/wallofleet/tomas-kristiansson-medium",
  //   },

  //   {
  //     id: 265,
  //     name: "Uday Pratap Singh",
  //     country: "🇸🇪",
  //     city: "Lund",
  //     text: " I have been in web development since 2009 and I like to work with people having a growth mindset, a positive attitude towards solving the problem, and keep on experimenting with different things. My approach with any new project is to understand the business first and then jump into technology. It&apos;s good to design a perfect system, but time to market really matters a lot. For me development is a lot like painting a picture, it&apos;s good to fill the painting with colors, but don&apos;t color it too much that it loses its simplicity. I am a big fan of writing test cases especially unit test cases.Other than development I enjoy mentoring people especially the trainees coming from colleges. I have been leading the Java web development Freshers boot camp for the last 10 years.After coding my second love is cooking especially Indian vegetarian food. Whenever I feel low or stressed out I find my kitchen as my best companion. I like to go for a 3-4 day break after every 3-4 months to regain my energy so traveling is also something that I enjoy. In sports, I like to watch Tennis, badminton, cricket, and hockey. ",
  //     imagePortraitUrl: "https://i.1337co.de/profile/uday-pratap-singh-medium",
  //     imageFullUrl: "https://i.1337co.de/wallofleet/uday-pratap-singh-medium",
  //   },

  //   {
  //     id: 268,
  //     name: "Victor Ciavarella",
  //     country: "🇸🇪",
  //     city: "Stockholm",
  //     text: " I have always had an interest in tech. I grew up playing computer games and was fascinated by how things worked. My curiosity on how the web worked spiked my interest and I wanted to build things myself.Programming still amazes me, it&#x2019;s incredible what we can build and achieve with just code. I am a curious person and always strive to improve and learn as much as possible.During my spare time, I enjoy walking with my dog in the woods. If I&#x2019;m not found outside with my dog, you would most likely find me in the kitchen trying new recipes. I also like to build custom mechanical keyboards. ",
  //     imagePortraitUrl: "https://i.1337co.de/profile/victor-ciavarella-medium",
  //     imageFullUrl: "https://i.1337co.de/wallofleet/victor-ciavarella-medium",
  //   },
  // ];

  // return mel;
};
export const getQuery = (entityURL, start, end, filter) => {
  if (start) entityURL += `?start=${start}`;
  if (end) entityURL += `&end=${end}`;
  if (filter) entityURL += `?filter=${filter}`;
  return entityURL;
};
export const fetchCoworkerList = async (start, end, filter) => {
  const url = getQuery(Config.api_url, start, end, filter);
  const Method = "GET";

  try {
    return await fetchResponse(url, Method);
  } catch (e) {
    handleError(e);
  }
};
