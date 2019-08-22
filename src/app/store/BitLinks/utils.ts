import { FormattedError } from './types';

export const formatError = (error: Error) => {
  if (error.message.match(/\d+/g)) {
    const messageSplit: string[] = error.message.split(' ');
    const formattedError: FormattedError = {
      code: Number(messageSplit[0]),
      message: messageSplit[1],
    };
    return formattedError;
  }
  return {
    code: null,
    message: error.message,
  }
};

export const decodeErrorMessage = (error: Error | FormattedError) => {
  let message: string = 'There was an error.';
  switch (error.message) {
    case 'INVALID_ACCESS_TOKEN':
    case 'INVALID_ARG_ACCESS_TOKEN':
      message = 'The access token used was invalid or expired.';
      break;
    case 'MISSING_ARG':
      message = 'A required argument was missing from the request.';
      break;
    case 'MISSING_ARG_URI':
      message = 'The required URL argument was missing or empty.';
      break;
    case 'MISSING_ARG_SHORTURL_OR_HASH':
      message = 'The required Short URL or Hash argument was missing or empty.';
      break;
    case 'INVALID_URI':
      message = 'The URL provided was not formatted correctly.';
      break;
    case 'ALREADY_A_BITLY_LINK':
      message = 'The URL provided is already a Bitly link.';
      break;
    default:
      message = error.message || message;
  }
  return message;
}
