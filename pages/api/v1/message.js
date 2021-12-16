import { fetchDataHomepage } from '../../../controllers/home';

const handler = async (req, res) => {
  await fetchDataHomepage(req, res);
};

export default handler;
