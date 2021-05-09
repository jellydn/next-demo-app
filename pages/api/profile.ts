import { NextApiRequest, NextApiResponse } from "next";

import { withValidation } from "next-validations";
import * as yup from "yup";
import { getGithubUserRepos } from "../../services/github";

const schema = yup.object().shape({
  username: yup.string().min(3).required(),
});

const validate = withValidation({
  schema,
  type: "Yup",
  mode: "query",
});

/**
 * @swagger
 * /api/profile:
 *   get:
 *     description: Returns John Doe
 *     parameters:
 *       - name: username
 *         description: Github username
 *         in: query
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: John Doe
 *       400:
 *         description: Username is required and min 3 characters
 */
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const responses = await getGithubUserRepos(String(req.query.username));
    res.status(200).json(responses);
  } catch (error) {
    const { response } = error;
    return response
      ? res.status(response.status).json({ message: response.statusText })
      : res.status(400).json({ message: error.message });
  }
};

export default validate(handler);