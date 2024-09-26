// handler appends .json to the URL of each request
// chain multiple handlers together to build up a request
export const JsonSuffixHandler = {
  request(context, next) {
    const { request } = context;
    const updatedRequest = Object.assign({}, request, {
      url: request.url + '.json',
    });

    return next(updatedRequest);
  },
};
