const apiKey = "ec1acec30ebfe2d9ac3420dc324ab223";
const baseUrl = "https://api.themoviedb.org/3/movie/";

export const topRatedUrl = `${baseUrl}top_rated?api_key=${apiKey}&language=en-US&page=1`;
export const PopularUrl = `${baseUrl}popular?api_key=${apiKey}&language=en-US&page=1`;
export const NowPlaying = `${baseUrl}upcoming?api_key=${apiKey}&language=en-US&page=1`;
