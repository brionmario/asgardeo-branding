const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
location.href = "https://polaris.iam.motion.abb.com/authenticationendpoint/retry.do?crID" + urlParams.get('crId');
