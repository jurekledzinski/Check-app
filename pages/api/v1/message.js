const handler = (req, res) => {
  res.status(200).json({ msgSuccess: 'Hello, you fetch data!' });
};

export default handler;
