export const fetchUsers = async (req, res) => {
  const users = [{ name: 'Mike' }, { name: 'Bob' }, { name: 'Kate' }];

  return res.status(200).json({ data: users });
};
