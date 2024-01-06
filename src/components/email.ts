const emailAddress = () => {
  const encodedEmail = "aGVucnlvYmVyaG9sdHplckBnbWFpbC5jb20";
  return (atob(encodedEmail));
}

export default emailAddress;
