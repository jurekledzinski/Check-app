import { fetchUsers } from '../../../controllers/users';

const handler = async (req, res) => {
  await fetchUsers(req, res);
};

export default handler;
