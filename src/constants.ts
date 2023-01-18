const DB =
  process.env.NODE_ENV == "development"
    ? process.env.mongo_dev_url
    : process.env.mongo_url;

export { DB };
